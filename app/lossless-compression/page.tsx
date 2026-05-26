"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import PageContainer from "@/components/PageContainer";

export default function LosslessPage() {
    const [file, setFile] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState("");

    const [downloadUrl, setDownloadUrl] =
        useState("");

    const handleFile = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selected =
            e.target.files?.[0];

        if (!selected) return;

        setFile(selected);
        setPreview(
            URL.createObjectURL(selected)
        );
    };

    const compressImage =
        async () => {
            if (!file) return;

            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            const compressed =
                await imageCompression(
                    file,
                    options
                );

            setDownloadUrl(
                URL.createObjectURL(
                    compressed
                )
            );
        };

    return (
        <PageContainer
            title="Lossless Compression"
            description="Compress image without visible quality loss."
        >
            <div className="card upload-card">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                />

                {preview && (
                    <img
                        src={preview}
                        className="preview-image"
                        alt="Preview"
                    />
                )}

                <button
                    className="button"
                    onClick={compressImage}
                >
                    Compress
                </button>

                {downloadUrl && (
                    <a
                        href={downloadUrl}
                        download="compressed.jpg"
                    >
                        <button className="button">
                            Download
                        </button>
                    </a>
                )}
            </div>
        </PageContainer>
    );
}