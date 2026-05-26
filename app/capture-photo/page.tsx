"use client";

import { useRef, useState } from "react";
import {
    Camera,
    Download,
    Play,
    StopCircle,
    Aperture,
} from "lucide-react";
import PageContainer from "@/components/PageContainer";

export default function CapturePhotoPage() {
    const videoRef =
        useRef<HTMLVideoElement>(null);

    const canvasRef =
        useRef<HTMLCanvasElement>(null);

    const [isStreaming, setIsStreaming] =
        useState(false);

    const [hasPhoto, setHasPhoto] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const startCamera = async () => {
        try {
            setLoading(true);

            const stream =
                await navigator.mediaDevices.getUserMedia(
                    {
                        video: true,
                        audio: false,
                    }
                );

            if (videoRef.current) {
                videoRef.current.srcObject =
                    stream;

                await videoRef.current.play();

                setIsStreaming(true);
            }
        } catch (error) {
            console.error(error);

            alert(
                "Unable to access camera. Please allow permission."
            );
        } finally {
            setLoading(false);
        }
    };

    const stopCamera = () => {
        const stream =
            videoRef.current
                ?.srcObject as MediaStream;

        stream?.getTracks().forEach(
            (track) => track.stop()
        );

        if (videoRef.current) {
            videoRef.current.srcObject =
                null;
        }

        setIsStreaming(false);
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas =
            canvasRef.current;

        if (!video || !canvas) return;

        const ctx =
            canvas.getContext("2d");

        if (!ctx) return;

        canvas.width =
            video.videoWidth;
        canvas.height =
            video.videoHeight;

        ctx.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        );

        setHasPhoto(true);
    };

    const downloadImage = () => {
        const canvas =
            canvasRef.current;

        if (!canvas) return;

        const link =
            document.createElement("a");

        link.href = canvas.toDataURL(
            "image/jpeg",
            1
        );

        link.download = `capture-${Date.now()}.jpg`;

        link.click();
    };

    return (
        <PageContainer
            title="Camera Studio"
            description="Capture high-quality photos directly from your browser."
        >
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
                {/* Camera */}
                <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900">
                                Live Camera
                            </h2>

                            <p className="text-slate-500 text-sm">
                                Preview your
                                camera
                            </p>
                        </div>

                        <div
                            className={`h-3 w-3 rounded-full ${isStreaming
                                    ? "bg-green-500 animate-pulse"
                                    : "bg-slate-300"
                                }`}
                        />
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-slate-200 mb-5">
                        {/* VIDEO ALWAYS EXISTS */}
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`w-full h-full object-cover ${isStreaming
                                    ? "block"
                                    : "hidden"
                                }`}
                        />

                        {/* Overlay */}
                        {!isStreaming && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                                <Aperture
                                    size={70}
                                    className="mb-3 opacity-50"
                                />

                                <p className="font-medium">
                                    Camera inactive
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-3">
                        {!isStreaming ? (
                            <button
                                onClick={
                                    startCamera
                                }
                                disabled={
                                    loading
                                }
                                
                                className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition"
                            >
                                <Play
                                    size={
                                        18
                                    }
                                />

                                {loading
                                    ? "Starting..."
                                    : "Start Camera"}
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={
                                        capturePhoto
                                    }
                                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white py-4 font-semibold transition"
                                >
                                    <Camera
                                        size={
                                            18
                                        }
                                    />
                                    Capture
                                </button>

                                <button
                                    onClick={
                                        stopCamera
                                    }
                                    className="px-5 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
                                >
                                    <StopCircle
                                        size={
                                            22
                                        }
                                    />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Preview */}
                <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm p-6 flex flex-col">
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                        Captured Photo
                    </h2>

                    <p className="text-slate-500 text-sm mb-5">
                        Preview and download
                    </p>

                    <div className="flex-1 min-h-[350px] rounded-3xl border border-slate-200 bg-slate-100 overflow-hidden flex items-center justify-center mb-5">
                        <canvas
                            ref={canvasRef}
                            className={`max-w-full max-h-full ${hasPhoto
                                    ? "block"
                                    : "hidden"
                                }`}
                        />

                        {!hasPhoto && (
                            <div className="text-center text-slate-400">
                                <Camera
                                    size={60}
                                    className="mx-auto mb-3 opacity-50"
                                />

                                <p>
                                    No photo
                                    captured
                                </p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={
                            downloadImage
                        }
                        disabled={!hasPhoto}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition disabled:opacity-50"
                    >
                        <Download
                            size={18}
                        />
                        Download Image
                    </button>
                </div>
            </div>
        </PageContainer>
    );
}