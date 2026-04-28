"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowLeft } from "lucide-react";

import Logo from "@/components/Logo";

export default function Navbar({ showReturn = false }: { showReturn?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex justify-between items-center py-6 md:py-8 px-6 md:px-16 border-b border-stone/20 sticky top-0 bg-bone/90 backdrop-blur-md z-30">
        <div className="w-1/3 flex justify-start">
          {showReturn ? (
            <Link href="/" className="flex items-center gap-2 md:gap-4 text-label text-taupe hover:text-ink transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden md:inline">Return</span>
              <span className="md:hidden">Back</span>
            </Link>
          ) : (
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-label text-taupe hover:text-ink transition-colors"
            >
              The House
            </button>
          )}
        </div>
        
        <div className="w-1/3 flex justify-center">
          <Link href="/" className="group flex items-center justify-center">
            <Logo className="w-8 h-8 md:w-10 md:h-10 group-hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        
        <div className="w-1/3 flex justify-end">
          {showReturn ? (
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-label text-taupe hover:text-ink transition-colors"
            >
              The House
            </button>
          ) : (
            <button className="text-label text-taupe hover:text-ink transition-colors">
              <span className="hidden md:inline">Atelier</span>
              <span className="md:hidden">Visit</span>
            </button>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 bg-bone z-50 flex flex-col h-[100dvh]"
          >
            <div className="flex justify-between items-center py-6 md:py-8 px-6 md:px-16 border-b border-stone/20">
              <div className="w-1/3">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-taupe hover:text-ink transition-colors flex items-center gap-2"
                >
                  <X size={20} strokeWidth={1.5} />
                  <span className="text-label hidden md:inline">Close</span>
                </button>
              </div>
              <div className="w-1/3 flex justify-center">
                <Logo className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="w-1/3"></div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center gap-8 md:gap-12 px-6">
              {["Atelier Selections", "Rituals", "Sourcing Stories", "Connection"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-3xl md:text-5xl lg:text-6xl text-ink hover:text-taupe transition-colors text-center block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="py-8 md:py-12 flex flex-col items-center justify-center border-t border-stone/20">
                <p className="text-label text-stone mb-4">Prishtina ✦ Kosova</p>
                <div className="flex gap-8">
                    <Link href="/" className="text-label text-taupe hover:text-ink">Instagram</Link>
                    <Link href="/" className="text-label text-taupe hover:text-ink">WhatsApp</Link>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}