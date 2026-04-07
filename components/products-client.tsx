'use client';

import { categories, products } from '@/data/products';
import { ProductCard } from './product-card';
import { useMemo, useState } from 'react';

type Sort = 'latest' | 'best' | 'price-asc' | 'price-desc';

export function ProductsClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [sort, setSort] = useState<Sort>('latest');

  const filtered = useMemo(() => {
    let data = [...products].filter((p) =>
      `${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase()) && (category === 'All' || p.category === category)
    );

    if (sort === 'best') data = data.sort((a, b) => b.rating - a.rating);
    if (sort === 'price-asc') data = data.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') data = data.sort((a, b) => b.price - a.price);

    return data;
  }, [query, category, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-6 grid gap-3 md:grid-cols-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm sản phẩm..."
          className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 md:col-span-2 dark:border-slate-700"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value as (typeof categories)[number])} className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700">
          {categories.map((c) => (
            <option className="text-slate-900" key={c} value={c}>{c}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700">
          <option className="text-slate-900" value="latest">Mới nhất</option>
          <option className="text-slate-900" value="best">Bán chạy</option>
          <option className="text-slate-900" value="price-asc">Giá tăng dần</option>
          <option className="text-slate-900" value="price-desc">Giá giảm dần</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700">
          <p className="text-lg font-semibold">Không tìm thấy sản phẩm phù hợp.</p>
          <p className="mt-2 text-sm text-slate-500">Thử từ khóa khác hoặc đổi bộ lọc để khám phá thêm.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
