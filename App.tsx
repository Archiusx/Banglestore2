/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, ShoppingBag, Heart, Star, Gem, Layers, Eye } from 'lucide-react';

const PRODUCT = {
  name: "Noor Kashmiri Bangle Set",
  collection: "Ethereal Heritage Collection",
  price: 1499,
  oldPrice: 2999,
  rating: 4.8,
  reviewCount: 124,
  viewers: 32,
  description: "Inspired by the soft moonlit nights of the Dal Lake, the Noor Bangle Set is a celebration of Kashmiri craftsmanship. Each piece is meticulously hand-finished with gold-toned motifs that evoke the timeless elegance of Srinagar's heritage.",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6CvHCM7LKLaBmAQA3tpuHXS62nIQ7sJM3-M0Lv7_AOrCXpXArlZih2IOs8qGWyNrt6lanQSFMU5FOi8mdplUhyUNB9pMz724JJycNeVhwOGknCnmhgaHqZshol_MuTWTOtJvMWE3htAs8p-Vh6nUPLekm6Q9fe_JolDq5W2RCIPzJpJH4_vdUyLirBgcBBhGNvKobNnSTRQ8it3BRjt4huTjz1SnyowfS_39v2S1hvMVPNYd9eF1Bk1LPW6_-FbE2SlatK5eM3w",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBStZ5MXabOFiii_FvHtjvquGgnlZ0O-3dhnAsXPJeXyKug42vRdu0qylrb7aYwR6szNedwJmsJ9yq0mp2w2EtUKSUC_Tg1SNJ3XAqIJT7POYWLGSqp8cOJzneDgSLtKMmQZxDyJVM8ZUfzy0kJhBT2P8hqO3e_j3F59IQ-F7X8I3hOSOD0OxcFPQ9XJKHU7q_fiPdITiqWG-OyVb6uoNszR7rIKBoTccMEMFdwYlgpcry8S1SUd9Fjkut8P_rZd8HtEqF9U65nogk"
  ]
};

export default function App() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-[#fef8f8] text-[#1d1b1b] font-body">
      <header className="fixed top-0 w-full bg-[#fef8f8]/80 backdrop-blur-md flex justify-between items-center px-5 h-16 z-50">
        <button><Menu size={24} /></button>
        <h1 className="font-headline text-2xl uppercase tracking-widest text-[#1d1b1b]">संग</h1>
        <button><ShoppingBag size={24} /></button>
      </header>

      <main className="pt-16 pb-32">
        <section className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
          <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory">
            {PRODUCT.images.map((img, idx) => (
              <img key={idx} src={img} className="min-w-full h-full object-cover snap-center" alt={PRODUCT.name} />
            ))}
          </div>
          <button className="absolute top-4 right-5 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center">
            <Heart size={20} className="text-gray-600" />
          </button>
        </section>

        <section className="px-5 mt-8 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-headline text-3xl">{PRODUCT.name}</h2>
              <p className="font-body text-sm text-purple-800 mt-1">{PRODUCT.collection}</p>
            </div>
            <div className="text-right">
              <p className="font-body text-xl font-semibold">₹{PRODUCT.price}</p>
              <p className="text-xs text-gray-500 line-through">₹{PRODUCT.oldPrice}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 py-2">
            <div className="flex text-amber-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />)}
            </div>
            <span className="text-sm text-gray-600">{PRODUCT.rating} ({PRODUCT.reviewCount} reviews)</span>
          </div>

          <div className="bg-purple-100/50 p-3 rounded-lg flex items-center gap-2">
            <Eye size={18} className="text-purple-800"/>
            <p className="text-sm text-purple-900">{PRODUCT.viewers} people viewing this live</p>
          </div>
        </section>

        <section className="px-5 mt-8">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">The Narrative</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{PRODUCT.description}</p>
        </section>

        <section className="px-5 mt-8 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between aspect-square">
            <Gem className="text-purple-800" />
            <div>
              <p className="font-semibold text-sm">Kundan Stones</p>
              <p className="text-xs text-gray-500">Premium grade</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between aspect-square">
            <Layers className="text-purple-800" />
            <div>
              <p className="font-semibold text-sm">Gold Plated</p>
              <p className="text-xs text-gray-500">22kt Brass base</p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 p-5 z-[100] flex gap-4">
        <button className="flex-1 border-2 border-[#1d1b1b] py-3 rounded-full hover:bg-gray-100 transition-colors">Add to Cart</button>
        <button className="flex-1 bg-[#1d1b1b] text-white py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity">Buy Now</button>
      </div>
    </div>
  );
}

