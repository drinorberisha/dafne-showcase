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
    textureImage: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800",
    textureDescription: "An ultra-rich, indulgent cream. It possesses a dense, buttery consistency that melts upon contact with the skin's warmth.",
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
    textureImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
    textureDescription: "Thick, balm-like, and substantial. It requires warming between the fingertips to activate the Miracle Broth™ before application.",
    certifications: ["Cruelty-Free", "Paraben-Free"]
  },
  "3": {
    brand: "Aesop",
    name: "Parsley Seed Anti-Oxidant Intense Serum",
    size: "60 ML",
    price: "€85",
    description: "A potent anti-oxidant serum tailored for city dwellers. This weightless film-forming serum provides daily protection against airborne pollutants.",
    heroImage: "https://images.unsplash.com/photo-1615397323215-6202ea6895ce?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1615397323215-6202ea6895ce?auto=format&fit=crop&q=80&w=800",
    ],
    story: "Formulated in Melbourne, Aesop has spent decades perfecting the art of the botanical extract. The Parsley Seed range was born from a desire to protect skin in urban environments without the weight of traditional creams.",
    sourcing: "Sourced and bottled in Australia. Each bottle represents a meticulous balance of botanical extracts and laboratory-stabilized antioxidants.",
    ritual: "Dispense three to five drops into the palms. Massage onto freshly cleansed and toned skin, from forehead to neck. Allow to set for a moment before proceeding with your day.",
    textureImage: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=800",
    textureDescription: "A medium-weight, golden serum. It glides effortlessly and is absorbed rapidly, leaving a breathable, matte finish on the skin.",
    certifications: ["Vegan", "Botanical", "City-Ready"]
  },
  "4": {
    brand: "Dr. Barbara Sturm",
    name: "Hyaluronic Serum",
    size: "30 ML",
    price: "€260",
    description: "Fundamental hydration. Formulated with a highly concentrated balance of low and high molecular weight Hyaluronic Acid.",
    heroImage: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800",
    ],
    story: "Dr. Barbara Sturm’s medical background in orthopedics led to the discovery of Molecular Cosmetics. This serum is the 'white T-shirt' of any skincare wardrobe — essential, perfectly cut, and foundational.",
    sourcing: "Scientifically developed in Dusseldorf, Germany. Pure, simple, and effective, it avoids the use of unnecessary fragrances or aggressive preservatives.",
    ritual: "Apply a full pipette into the palm of your hand and pat it gently into the face. Wait 30 seconds for the serum to be absorbed before applying the Face Cream.",
    textureImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
    textureDescription: "Crystal clear and water-light. It feels instantly cooling and provides an immediate surge of hydration without any residue.",
    certifications: ["Molecular Cosmetics", "Fragrance-Free", "German-Made"]
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