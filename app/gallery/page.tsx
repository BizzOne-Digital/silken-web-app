import type { Metadata } from "next";
import GalleryGrid, { type GalleryItem } from "@/components/GalleryGrid";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery | Silken Trading",
  description:
    "Before and after interior transformations, installed seat covers, customer cars, and installation videos.",
  openGraph: {
    title: "Gallery | Silken Trading",
    description: "See our work and transformations.",
  },
};

export default function GalleryPage() {
  const items: GalleryItem[] = (galleryData as any[]).map((item) => ({
    ...item,
    // Narrow the \"type\" field so TypeScript knows it's either \"image\" or \"video\"
    type: item.type === "video" ? "video" : "image",
  }));

  return (
    <>
      <section className="relative border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            Our <span className="text-gold-primary">Gallery</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-yellow-pastel/90">
            Before &amp; after interiors, installed seat covers, customer cars, and installation videos.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={items} />
        </div>
      </section>
    </>
  );
}
