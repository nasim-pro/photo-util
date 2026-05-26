import Link from "next/link";

type Props = {
    title: string;
    description: string;
    href: string;
};

export default function ToolCard({
    title,
    description,
    href,
}: Props) {
    return (
        <Link href={href} className="tool-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    );
}