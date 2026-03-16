#!/usr/bin/env node

const { execSync } = require("child_process");
process.chdir(
    execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim()
);

async function generateMessage(diff) {
    const prompt = `
Write a short conventional commit message.

Rules:
- one line
- format: type(scope): message
- types: feat, fix, refactor, chore, docs, test

Git diff:
${diff}
`;

    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "qwen2.5-coder:3b",
            prompt,
            stream: false
        })
    });

    const data = await res.json();
    let raw = data.response.trim()
    let message = raw
        .replace(/```/g, "")        // remove markdown blocks
        .replace(/`/g, "")          // remove backticks
        .split("\n")[0]             // take first line
        .trim()
        .replace(/"/g, '\\"');

    if (!message) message = "chore: update file";

    return message
}

async function main() {
    try {

        const auto = process.argv.includes("auto");

        const files = execSync(
            "git status --porcelain",
            // "git diff --name-only",
            { encoding: "utf8" }
        )
            .split("\n")
            .filter(Boolean)
            .map(line => line.slice(3).trim());

        if (!files.length) {
            console.log("No changes found.");
            process.exit(0);
        }

        for (const file of files) {

            console.log(`\nProcessing ${file}`);

            execSync(`git add "${file}"`);

            const diff = execSync(
                `git diff --cached "${file}" | head -n 200`,
                { encoding: "utf8" }
            );

            const message = await generateMessage(diff);

            const command = `git commit -m "${message}" -- "${file}"`;

            if (auto) {
                console.log(`Running: ${command}`);
                execSync(command, { stdio: "inherit" });
            } else {
                console.log(command);
                execSync(`git reset "${file}"`);
            }
        }

    } catch (err) {
        console.error(
            "Could not start ollama. Make sure it is running: ollama serve",
            err.message
        );
        process.exit(1);
    }
}

main();
