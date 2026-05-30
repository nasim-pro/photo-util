"use client";

import { useRef, useState } from "react";
import {
    Cropper,
    ReactCropperElement,
} from "react-cropper";
import {
    Upload,
    ZoomIn,
    ZoomOut,
    RotateCcw,
    Download,
    Crop,
} from "lucide-react";
import "react-cropper/node_modules/cropperjs/dist/cropper.css";

export default function CropImagePage() {
    const cropperRef =
        useRef<ReactCropperElement>(null);

    const [image, setImage] =
        useState<string | null>(null);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const imageUrl =
            URL.createObjectURL(file);

        setImage(imageUrl);
    };

    const handleCrop = () => {
        const cropper =
            cropperRef.current?.cropper;

        if (!cropper) return;

        const canvas =
            cropper.getCroppedCanvas({
                imageSmoothingEnabled: true,
                imageSmoothingQuality:
                    "high",
            });

        canvas.toBlob(
            (blob) => {
                if (!blob) return;

                const url =
                    URL.createObjectURL(blob);

                const link =
                    document.createElement("a");

                link.href = url;
                link.download =
                    "cropped-image.png";

                link.click();

                URL.revokeObjectURL(url);
            },
            "image/png",
            1
        );
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
                        <Crop size={18} />
                        Image Cropper
                    </div>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Crop Images Easily
                    </h1>

                    <p className="text-slate-500 mt-2 text-lg">
                        Upload, crop and download
                        your image in high quality.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-[1fr_300px] gap-6">
                    {/* Cropper Card */}
                    <div className="bg-white rounded-[28px] shadow-sm border border-slate-200 overflow-hidden">
                        {/* Upload Area */}
                        <div className="border-b border-slate-100 p-5 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h2 className="font-semibold text-slate-900 text-lg">
                                    Upload Image
                                </h2>

                                <p className="text-sm text-slate-500">
                                    JPG, PNG, WEBP supported
                                </p>
                            </div>

                            <label className="cursor-pointer">
                                <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white font-medium shadow-sm">
                                    <Upload size={18} />
                                    Choose Image
                                </div>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Cropper */}
                        {!image ? (
                            <div className="h-[500px] flex flex-col items-center justify-center text-slate-400 bg-slate-50">
                                <Crop
                                    size={70}
                                    strokeWidth={1.5}
                                />

                                <p className="mt-4 text-lg font-medium">
                                    Upload an image to
                                    start cropping
                                </p>
                            </div>
                        ) : (
                            <div className="p-5 bg-slate-100">
                                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                                    <Cropper
                                        src={image}
                                        style={{
                                            height: 520,
                                            width: "100%",
                                        }}
                                        viewMode={1}
                                        autoCropArea={0.9}
                                        responsive
                                        guides
                                        dragMode="move"
                                        background={false}
                                        checkOrientation={
                                            false
                                        }
                                        ref={cropperRef}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm p-5 h-fit sticky top-6">
                        <h3 className="font-semibold text-slate-900 text-lg mb-5">
                            Tools
                        </h3>

                        <div className="space-y-3">
                            <ToolButton
                                icon={<ZoomIn size={18} />}
                                label="Zoom In"
                                onClick={() =>
                                    cropperRef.current?.cropper.zoom(
                                        0.1
                                    )
                                }
                            />

                            <ToolButton
                                icon={<ZoomOut size={18} />}
                                label="Zoom Out"
                                onClick={() =>
                                    cropperRef.current?.cropper.zoom(
                                        -0.1
                                    )
                                }
                            />

                            <ToolButton
                                icon={
                                    <RotateCcw
                                        size={18}
                                    />
                                }
                                label="Reset"
                                onClick={() =>
                                    cropperRef.current?.cropper.reset()
                                }
                            />
                        </div>

                        <button
                            onClick={handleCrop}
                            className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white py-4 font-semibold shadow-sm"
                        >
                            <Download size={18} />
                            Download Image
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ToolButton({
    icon,
    label,
    onClick,
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-4 hover:bg-slate-50 transition"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700">
                {icon}
            </div>

            <span className="font-medium text-slate-700">
                {label}
            </span>
        </button>
    );
}