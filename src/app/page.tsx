"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    brand: "Augustinus Bader",
    name: "The Rich Cream",
    description: "An intensely luxurious, hydrating and nourishing daily moisturiser.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", // Placeholder minimal beauty
  },
  {
    id: 2,
    brand: "La Mer",
    name: "Crème de la Mer",
    description: "The original — sourced directly. A legend of hydration.",
    image: "https://images.unsplash.com/photo-1608248593842-8021c6a15ceac?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
  {
    id: 3,
    brand: "Aesop",
    name: "Parsley Seed Anti-Oxidant Intense Serum",
    description: "A potent anti-oxidant serum tailored for city dwellers.",
    image: "https://images.unsplash.com/photo-1615397323215-6202ea6895ce?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
  {
    id: 4,
    brand: "Dr. Barbara Sturm",
    name: "Hyaluronic Serum",
    description: "Fundamental hydration. Formulated with a highly concentrated balance.",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800", // Placeholder
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation (Minimal) */}
      <nav className="flex justify-between items-center py-8 px-8 md:px-16 border-b border-stone/20">
        <div className="w-1/3">
          <button className="text-sm font-medium tracking-[0.2em] uppercase text-taupe hover:text-ink transition-colors">
            Menu
          </button>
        </div>
        <div className="w-1/3 flex justify-center">
          <h1 className="font-serif text-3xl tracking-widest uppercase">Dafne</h1>
        </div>
        <div className="w-1/3 flex justify-end">
          <button className="text-sm font-medium tracking-[0.2em] uppercase text-taupe hover:text-ink transition-colors">
            Atelier
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-16 py-32 md:py-48 flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm tracking-[0.25em] uppercase text-taupe mb-8"
        >
          Prishtina ✦ Kosova
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight max-w-4xl text-ink"
        >
          An atelier of <br className="hidden md:block"/> rare beauty.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-lg md:text-xl text-taupe max-w-xl font-light italic font-serif"
        >
          Curation is the art of saying no to ninety-nine things so that one may shine.
        </motion.p>
      </section>

      {/* Product Grid Section */}
      <section className="px-8 md:px-16 py-24 bg-white">
        <div className="flex justify-between items-end mb-16">
          <h3 className="font-serif text-3xl md:text-4xl">The Selection</h3>
          <button className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-taupe hover:text-ink transition-colors group">
            <SlidersHorizontal size={16} className="group-hover:stroke-ink transition-colors" />
            <span className="hidden md:inline">Refine</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone mb-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[20%]"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="text-xs tracking-[0.2em] uppercase text-stone mb-3">{product.brand}</p>
                <h4 className="font-serif text-2xl md:text-3xl mb-4 text-ink">{product.name}</h4>
                <p className="text-sm text-taupe leading-relaxed max-w-sm mb-8">{product.description}</p>
                <div className="mt-auto pt-4 border-t border-stone/20">
                  <button className="text-xs tracking-[0.2em] uppercase text-ink hover:text-stone transition-colors font-medium">
                    Inquire for Availability →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 md:px-16 flex flex-col items-center text-center bg-ink text-bone">
        <h2 className="font-serif text-4xl tracking-widest uppercase mb-12">Dafne</h2>
        <p className="text-sm tracking-[0.2em] uppercase text-stone mb-12">Quiet luxury is not achieved through expensive materials. <br/> It is achieved through consistent restraint.</p>
        <button className="text-xs uppercase tracking-[0.2em] text-white hover:text-stone transition-colors underline underline-offset-8">
          Contact the Atelier
        </button>
      </footer>
    </main>
  );
}