import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-72 overflow-hidden">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
          {product.badge && <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">{product.badge}</span>}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-slate-500">{product.category}</p>
        <h3 className="mt-1 font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-bold">{formatPrice(product.price)}</p>
          {product.originalPrice && <p className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>}
        </div>
        <Link href={`/products/${product.slug}`} className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900">
          Xem nhanh
        </Link>
      </div>
    </article>
  );
}
