import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "Services | Silken Trading",
  description:
    "Professional installation for seat covers, window visors, and car mats. Premium fit and finish for your vehicle.",
  openGraph: { title: "Services | Silken Trading", description: "Seat cover, window visor, and car mat installation services." },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            Our <span className="text-gold-primary">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-yellow-pastel/90">
            Professional installation for every aspect of your car&apos;s interior. Quality materials and expert fit.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(servicesData as { slug: string; title: string; shortDescription: string; image: string }[]).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
