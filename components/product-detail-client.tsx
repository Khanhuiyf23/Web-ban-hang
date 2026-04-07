'use client';

import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/providers/cart-provider';
import { useState } from 'react';
import { ProductCard } from './product-card';

export function ProductDetailClient({ product, related }: { product: Product; related: Product[] }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
            <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {product.images.map((img, idx) => (
              <button key={img} onClick={() => setActiveImage(idx)} className={`overflow-hidden rounded-2xl border ${idx === activeImage ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-700'}`}>
                <img src={img} alt={`${product.name}-${idx}`} className="h-28 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-slate-500">{product.category}</p>
          <h1 className="mt-2 text-4xl font-black">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
            {product.originalPrice && <p className="text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>}
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{product.description}</p>
          <p className="mt-3 rounded-2xl bg-slate-100 p-4 text-sm dark:bg-slate-900">{product.details}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold">Màu sắc</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`rounded-xl border px-3 py-2 text-sm ${color === c ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-300 dark:border-slate-700'}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold">Kích thước</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-xl border px-3 py-2 text-sm ${size === s ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-300 dark:border-slate-700'}`}>{s}</button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addItem({ productId: product.id, color, size, quantity: 1 })}
            className="mt-8 w-full rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-glow"
          >
            Thêm vào giỏ hàng
          </button>

          <div className="mt-6 grid gap-2 text-sm text-slate-500">
            <p>🚚 Giao nhanh 2-4 ngày toàn quốc</p>
            <p>🔁 Đổi trả trong 14 ngày</p>
            <p>⭐ {product.rating}/5 từ {product.reviews} đánh giá</p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-black">Sản phẩm liên quan</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
