import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "Products | Silken Trading",
  description:
    "Premium seat covers, car mats, window visors, steering covers, and interior accessories. Shop by category.",
  openGraph: { title: "Products | Silken Trading", description: "Premium automotive interior products." },
};

const categories = [
  "Seat Covers",
  "Car Mats",
  "Window Visors",
  "Steering Covers",
  "Interior Accessories",
];

export default function ProductsPage() {
  const products = productsData as {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    price: string;
    description?: string;
    image: string;
  }[];

  return (
    <>
      <section className="relative border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            Our <span className="text-gold-primary">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-yellow-pastel/90">
            Premium seat covers, car mats, window visors, and accessories. Custom fit for your vehicle.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl text-gold-primary mb-6">Categories</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full border border-gold-primary/40 px-4 py-2 text-yellow-pastel/90 hover:bg-gold-primary/10 hover:text-gold-primary transition"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category === category);
        if (categoryProducts.length === 0) return null;
        const id = category.toLowerCase().replace(/\s+/g, "-");
        return (
          <section key={category} id={id} className="border-t border-white/10 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl text-white mb-8">{category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
