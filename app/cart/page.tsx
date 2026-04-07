'use client';

import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/providers/cart-provider';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function CartPage() {
  const { items, updateQty, removeItem } = useCart();
  const [coupon, setCoupon] = useState('');

  const subtotal = useMemo(
    () => items.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return sum + (product?.price || 0) * item.quantity;
    }, 0),
    [items]
  );

  const discount = coupon.toUpperCase() === 'VIBE10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
        <h1 className="text-4xl font-black">Giỏ hàng trống</h1>
        <p className="mt-3 text-slate-500">Bạn chưa thêm sản phẩm nào. Khám phá ngay để săn item hợp vibe!</p>
        <Link href="/products" className="mt-6 inline-block rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white">Khám phá sản phẩm</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
      <section className="md:col-span-2">
        <h1 className="mb-6 text-4xl font-black">Giỏ hàng</h1>
        <div className="space-y-4">
          {items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;
            return (
              <article key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <img src={product.images[0]} alt={product.name} className="h-24 w-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-slate-500">{item.color} / {item.size}</p>
                  <p className="mt-1 font-bold">{formatPrice(product.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="rounded-lg border px-2 py-1" onClick={() => updateQty(item, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="rounded-lg border px-2 py-1" onClick={() => updateQty(item, item.quantity + 1)}>+</button>
                    <button className="ml-4 text-sm text-rose-500" onClick={() => removeItem(item)}>Xóa</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <aside className="h-fit rounded-3xl border border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-xl font-bold">Thanh toán</h2>
        <div className="mt-4 flex gap-2">
          <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Mã giảm giá (VIBE10)" className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700" />
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><span>Tạm tính</span><span>{formatPrice(subtotal)}</span></div>
          <div className="flex justify-between"><span>Giảm giá</span><span>-{formatPrice(discount)}</span></div>
          <div className="flex justify-between border-t pt-2 text-base font-bold"><span>Tổng</span><span>{formatPrice(total)}</span></div>
        </div>
        <button className="mt-4 w-full rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white">Thanh toán ngay</button>
      </aside>
    </main>
  );
}
