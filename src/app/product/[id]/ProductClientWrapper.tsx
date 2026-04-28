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
  textureImage: string;
  textureDescription: string;
  certifications: string[];
}

export default function ProductClientWrapper({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState<"story" | "sourcing" | "ritual">("story");

  return (
    <>
      <Navbar showReturn={true} />

      {/* Hero Product View */}
      <section className="flex flex-col lg:flex-row min-h-[90vh] bg-bone">
        {/* Left: Imagery */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="aspect-[4/5] relative overflow-hidden bg-white p-12 md:p-24 flex items-center justify-center"
          >
            <img 
              src={product.heroImage} 
              alt={product.name}
              className="w-[85%] h-[85%] object-cover object-center grayscale-[15%] shadow-md transform -translate-x-4 -translate-y-4"
            />
            {/* Minimal Shadow/Depth Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-ink/5" />
          </motion.div>
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-12">
              {product.images.map((img: string, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i }}
                  className={`aspect-square relative overflow-hidden bg-white p-6 ${i % 2 === 1 ? "mt-12" : ""}`}
                >
                  <img src={img} className="w-full h-full object-cover grayscale-[15%] shadow-sm" alt="Detail" />
                </motion.div>
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

            {/* Sensory Swatch Module */}
            <div className="mb-16 p-8 bg-white/50 border border-stone/10">
              <h4 className="text-label text-stone mb-6">Sensory Experience</h4>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-square relative overflow-hidden bg-bone">
                  <img 
                    src={product.textureImage} 
                    alt="Texture Detail" 
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-caption text-taupe italic leading-relaxed">
                    &quot;{product.textureDescription}&quot;
                  </p>
                </div>
              </div>
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
