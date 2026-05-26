"use client";

import { useState } from "react";
import EXIF from "exif-js";
import PageContainer from "@/components/PageContainer";

export default function MetadataPage() {
    const [preview, setPreview] =
        useState("");

    const [metadata, setMetadata] =
        useState<any>(null);

    const handleFile = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file =
            e.target.files?.[0];

        if (!file) return;

        const imageUrl =
            URL.createObjectURL(file);

        setPreview(imageUrl);

        const image =
            new Image();

        image.onload = () => {
            (
                EXIF as unknown as {
                    getData: (
                        img: HTMLImageElement,
                        callback: () => void
                    ) => void;
                    getAllTags: (
                        img: unknown
                    ) => Record<
                        string,
                        unknown
                    >;
                }
            ).getData(
                image,
                function (this: HTMLImageElement) {
                    const exifData =
                        (
                            EXIF as unknown as {
                                getAllTags: (
                                    img: unknown
                                ) => Record<
                                    string,
                                    unknown
                                >;
                            }
                        ).getAllTags(
                            this
                        );

                    setMetadata({
                        name:
                            file.name,
                        type:
                            file.type,
                        size: (
                            file.size /
                            1024 /
                            1024
                        ).toFixed(2),
                        date:
                            String(
                                exifData.DateTimeOriginal ??
                                "N/A"
                            ),
                        camera: `${String(
                            exifData.Make ??
                            ""
                        )} ${String(
                            exifData.Model ??
                            ""
                        )}`.trim() ||
                            "Unknown",
                        iso: String(
                            exifData.ISO ??
                            "N/A"
                        ),
                    });
                }
            );
        };

        image.onerror = () => {
            setMetadata({
                name:
                    file.name,
                type:
                    file.type,
                size: (
                    file.size /
                    1024 /
                    1024
                ).toFixed(2),
                date: "N/A",
                camera:
                    "Unknown",
                iso: "N/A",
            });
        };

        image.src =
            imageUrl;
    };

    return (
        <PageContainer
            title="Metadata Viewer"
            description="View image EXIF metadata."
        >
            <div className="metadata-layout">
                <div className="card">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFile}
                    />

                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="preview-image"
                        />
                    )}
                </div>

                <div className="card">
                    <h3>Metadata</h3>

                    {metadata ? (
                        <div className="metadata-list">
                            <p>
                                <strong>Name:</strong>{" "}
                                {metadata.name}
                            </p>

                            <p>
                                <strong>Type:</strong>{" "}
                                {metadata.type}
                            </p>

                            <p>
                                <strong>Size:</strong>{" "}
                                {metadata.size} MB
                            </p>

                            <p>
                                <strong>Camera:</strong>{" "}
                                {metadata.camera ||
                                    "N/A"}
                            </p>

                            <p>
                                <strong>Date:</strong>{" "}
                                {metadata.date ||
                                    "N/A"}
                            </p>

                            <p>
                                <strong>ISO:</strong>{" "}
                                {metadata.iso ||
                                    "N/A"}
                            </p>
                        </div>
                    ) : (
                        <p>
                            Upload image to
                            view metadata
                        </p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}