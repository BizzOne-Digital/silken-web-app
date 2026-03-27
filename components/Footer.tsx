"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/products", label: "Seat Covers" },
    { href: "/products?category=mats", label: "Car Mats" },
    { href: "/products?category=visors", label: "Window Visors" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-primary/20 bg-luxury-black">
      {/* Top gold gradient line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,200,51,0.4) 15%, rgba(249,200,51,0.7) 50%, rgba(249,200,51,0.4) 85%, transparent 100%)",
        }}
      />
      {/* Subtle glow at top */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-24 opacity-30"
        style={{
          background: "linear-gradient(180deg, rgba(249,200,51,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <Link href="/" className="flex items-center gap-3 outline-none group">
                <div className="relative h-14 w-14 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Silken Trading"
                    fill
                    className="object-contain object-left transition duration-300 group-hover:drop-shadow-[0_0_16px_rgba(249,200,51,0.35)]"
                    sizes="56px"
                  />
                </div>
                <span className="font-display text-2xl tracking-wide text-gold-primary transition-colors group-hover:text-yellow-glow">
                  Silken Trading
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-yellow-pastel/70">
                Premium automotive interior products and professional installation. Transform your
                car with quality seat covers, mats, and accessories.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-yellow-pastel/80 transition-colors hover:text-gold-primary"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <Phone size={16} />
                  </span>
                  +1 (234) 567-890
                </motion.a>
                <motion.a
                  href="mailto:info@silkenrading.com"
                  className="flex items-center gap-3 text-yellow-pastel/80 transition-colors hover:text-gold-primary"
                  whileHover={{ x: 4 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <Mail size={16} />
                  </span>
                  info@silkenrading.com
                </motion.a>
                <span className="flex items-center gap-3 text-yellow-pastel/80">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-primary/15 text-gold-primary">
                    <MapPin size={16} />
                  </span>
                  Your City, State
                </span>
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-7 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display text-lg font-medium text-gold-primary">Shop</h3>
              <ul className="mt-5 space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-yellow-pastel/70 transition-colors hover:text-gold-primary"
                    >
                      <span className="opacity-0 transition-all group-hover:opacity-100">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h3 className="font-display text-lg font-medium text-gold-primary">Company</h3>
              <ul className="mt-5 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-yellow-pastel/70 transition-colors hover:text-gold-primary"
                    >
                      <span className="opacity-0 transition-all group-hover:opacity-100">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-display text-lg font-medium text-gold-primary">Support</h3>
              <ul className="mt-5 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-yellow-pastel/70 transition-colors hover:text-gold-primary"
                    >
                      <span className="opacity-0 transition-all group-hover:opacity-100">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
        >
          <p className="text-sm text-yellow-pastel/50">
            © {new Date().getFullYear()} Silken Trading. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-primary transition-colors hover:text-yellow-glow"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
