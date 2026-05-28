"use client";

import { useState } from "react";
import PageContainer from "@/components/PageContainer";
import { Upload } from "lucide-react";

export default function LossyPage() {
    const [file, setFile] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState<string>("");

    const [compressedUrl, setCompressedUrl] =
        useState("");

    const [quality, setQuality] =
        useState(70);

    const [resize, setResize] =
        useState(800);

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

    const compressImage = () => {
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();

            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (
                    width > resize ||
                    height > resize
                ) {
                    const ratio = Math.min(
                        resize / width,
                        resize / height
                    );

                    width *= ratio;
                    height *= ratio;
                }

                const canvas =
                    document.createElement(
                        "canvas"
                    );

                canvas.width = width;
                canvas.height = height;

                const ctx =
                    canvas.getContext("2d");

                if (!ctx) return;

                ctx.drawImage(
                    img,
                    0,
                    0,
                    width,
                    height
                );

                const compressed =
                    canvas.toDataURL(
                        "image/jpeg",
                        quality / 100
                    );

                setCompressedUrl(
                    compressed
                );

                setPreview(
                    compressed
                );
            };

            img.src =
                e.target?.result as string;
        };

        reader.readAsDataURL(file);
    };

    return (
        <PageContainer
        >
            <div className="card upload-card">
                <label className="cursor-pointer">
                    <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white font-medium shadow-sm">
                        <Upload size={18} />
                        Choose Image
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFile}
                        className="hidden"
                    />
                </label>

                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="preview-image"
                    />
                )}

                <div className="slider-group">
                    <label>
                        Quality: {quality}%
                    </label>

                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={quality}
                        onChange={(e) =>
                            setQuality(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    />
                </div>

                <div className="slider-group">
                    <label>
                        Max Size: {resize}px
                    </label>

                    <input
                        type="range"
                        min="300"
                        max="1920"
                        value={resize}
                        onChange={(e) =>
                            setResize(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    />
                </div>

                <button
                    className="button"
                    onClick={compressImage}
                >
                    Compress
                </button>

                {compressedUrl && (
                    <a
                        href={compressedUrl}
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