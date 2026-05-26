import ToolCard from "@/components/ToolCard";
import PageContainer from "@/components/PageContainer";

const tools = [
  {
    title: "Capture Photo",
    description:
      "Take photos using your device camera.",
    href: "/capture-photo",
  },
  {
    title: "Lossless Compression",
    description:
      "Compress images without visible quality loss.",
    href: "/lossless-compression",
  },
  {
    title: "Lossy Compression",
    description:
      "Reduce image size with adjustable quality.",
    href: "/lossy-compression",
  },
  {
    title: "Metadata Viewer",
    description:
      "View EXIF metadata from images.",
    href: "/metadata-viewer",
  },
  {
    title: "Crop Image",
    description:
      "Crop and download images.",
    href: "/crop-image",
  },
  {
    title: "Background Remover",
    description:
      "Remove image backgrounds in browser.",
    href: "/background-remover",
  },
];

export default function HomePage() {
  return (
    <PageContainer
      title="Image Tools"
      description="Choose a tool below"
    >
      <div className="tools-grid">
        {tools.map((tool) => (
          <ToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </div>
    </PageContainer>
  );
}