"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export interface ProductData {
  brand: string;
  name: string;
  size: string;
  price: string;
  description: string;
  heroImage: string;
  images: string[];
  story: string;
  sourcing: string;
  ritual: string;
  certifications: string[];
}

export default function ProductClientWrapper({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState<"story" | "sourcing" | "ritual">("story");

  return (
    <>
      <Navbar showReturn={true} />

      {/* Hero Product View */}
      <section className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* Left: Imagery */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative overflow-hidden bg-white"
          >
            <img 
              src={product.heroImage} 
              alt={product.name}
              className="w-full h-full object-cover object-center grayscale-[15%]"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-8">
              {product.images.map((img: string, i: number) => (
                <div key={i} className="aspect-square relative overflow-hidden bg-white">
                  <img src={img} className="w-full h-full object-cover grayscale-[15%]" alt="Detail" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Editorial */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:py-24 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-stone mb-4">{product.brand}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-6 leading-tight">{product.name}</h1>
            <p className="text-sm tracking-[0.2em] uppercase text-taupe mb-12">{product.size}</p>
            
            <p className="text-body text-taupe leading-relaxed max-w-md mb-12">
              {product.description}
            </p>

            {/* Certifications / Trust Signals */}
            <div className="flex flex-wrap gap-6 mb-16 pb-16 border-b border-stone/20">
              {product.certifications.map((cert: string) => (
                <div key={cert} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-stone rounded-full" />
                  <span className="text-label text-ink">{cert}</span>
                </div>
              ))}
            </div>

            {/* Editorial Tabs */}
            <div className="mb-12">
              <div className="flex gap-8 border-b border-stone/20 mb-8">
                {(["story", "sourcing", "ritual"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-label transition-colors relative ${
                      activeTab === tab ? "text-ink" : "text-stone hover:text-taupe"
                    }`}
                  >
                    {tab === "story" ? "The Story" : tab === "sourcing" ? "Provenance" : "The Ritual"}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1px] bg-ink" />
                    )}
                  </button>
                ))}
              </div>
              
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-body text-taupe max-w-md min-h-[120px]"
              >
                {product[activeTab]}
              </motion.div>
            </div>

            {/* Inquire Action */}
            <div className="mt-auto pt-8">
              <button className="w-full md:w-auto px-12 py-5 bg-ink text-bone text-label hover:bg-ink/90 transition-colors">
                Inquire for Availability
              </button>
              <p className="text-caption text-stone mt-6 italic">This item is currently held in our Prishtina atelier. Private viewings available upon request.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
