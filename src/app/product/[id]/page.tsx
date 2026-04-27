import Link from "next/link";
import ProductClientWrapper from "./ProductClientWrapper";

// Mock database to match the homepage + extended detail data
const productsDetailData = {
  "1": {
    brand: "Augustinus Bader",
    name: "The Rich Cream",
    size: "50 ML",
    price: "€265",
    description: "An intensely luxurious, hydrating and nourishing daily moisturiser. Clinically proven to reduce the signs of aging including the appearance of fine lines, wrinkles, and hyperpigmentation.",
    heroImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615397323215-6202ea6895ce?auto=format&fit=crop&q=80&w=800"
    ],
    story: "Developed by Professor Augustinus Bader, a globally recognized biomedical scientist and physician, this formulation took thirty years of research. It works instinctively with the skin, supporting its natural trajectory of repair.",
    sourcing: "Formulated, tested, and poured in Germany. The cornerstone of the formula is TFC8® — a proprietary blend of natural amino acids, high-grade vitamins, and synthesized molecules naturally found in skin.",
    ritual: "Smooth two pumps over cleansed, dry face, neck and décolleté. In upward, sweeping motions, massage the cream along your jawline. Sweep from your nose to your ears and across your forehead.",
    certifications: ["Cruelty-Free", "Vegan", "Clean Formula"]
  },
  "2": {
    brand: "La Mer",
    name: "Crème de la Mer",
    size: "60 ML",
    price: "€345",
    description: "The original — sourced directly. A legend of hydration. This ultra-rich cream delivers healing moisture, daily protection, and energized natural renewal.",
    heroImage: "https://images.unsplash.com/photo-1608248593842-8021c6a15ceac?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1608248593842-8021c6a15ceac?auto=format&fit=crop&q=80&w=800",
    ],
    story: "Born from the sea, the legendary Crème de la Mer has the power to transform the skin. In a short time, firmness improves, lines, wrinkles and the look of pores become less visible, skin looks virtually ageless.",
    sourcing: "The secret to the Miracle Broth™ lies not just in the ingredients, but in the fermentation. Giant sea kelp is harvested by hand off the coast of Vancouver Island, flown fresh to the Max Huber Research Labs.",
    ritual: "The secret to activating the Miracle Broth™ lies in a soothing ritual. Warm it for a few seconds between the fingers until it becomes translucent, then press gently into the skin.",
    certifications: ["Cruelty-Free", "Paraben-Free"]
  }
};

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ]
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = productsDetailData[id as keyof typeof productsDetailData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bone">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Item not found in the atelier.</h1>
          <Link href="/" className="text-sm tracking-[0.2em] uppercase text-taupe hover:text-ink transition-colors underline underline-offset-4">
            Return to the Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bone">
      <ProductClientWrapper product={product} />
    </main>
  );
}