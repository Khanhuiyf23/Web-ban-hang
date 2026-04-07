import { ProductsClient } from '@/components/products-client';

export default function ProductsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <h1 className="text-4xl font-black md:text-5xl">Sản phẩm</h1>
        <p className="mt-2 text-slate-500">Chọn item hợp vibe của bạn ngay hôm nay.</p>
      </section>
      <ProductsClient />
    </main>
  );
}
