import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-fuchsia-500/20" />
        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="relative z-10">
            <p className="mb-3 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">New Drop • Free Shipping 299K+</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Wear Your <span className="gradient-text">VIBE</span>
            </h1>
            <p className="mt-5 max-w-lg text-slate-600 dark:text-slate-300">Local brand dành cho thế hệ trẻ tự tin thể hiện cá tính: tối giản, premium và cực kỳ dễ phối.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-glow">Mua ngay</Link>
              <Link href="/collections" className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold dark:border-slate-700">Xem bộ sưu tập</Link>
            </div>
          </div>
          <div className="relative h-[440px] overflow-hidden rounded-[2.5rem]">
            <Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b" alt="Hero banner" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-3xl font-black">Best Seller</h2>
          <Link href="/products" className="text-sm font-semibold text-indigo-600">Xem tất cả</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-3 md:px-6">
        {['Thiết kế độc quyền', 'Đổi trả 14 ngày', 'Giao nhanh nội thành'].map((reason) => (
          <div key={reason} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
            <p className="font-bold">{reason}</p>
            <p className="mt-2 text-sm text-slate-500">Từng sản phẩm được chọn chất liệu kỹ, hoàn thiện chuẩn local brand cao cấp.</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="rounded-[2rem] bg-slate-900 p-10 text-white">
          <p className="text-sm">LOOKBOOK</p>
          <h3 className="mt-2 text-4xl font-black">City Motion Collection</h3>
          <p className="mt-3 max-w-xl text-slate-300">Cho những ngày chạy deadline, cafe meetup và những buổi tối chill cùng hội bạn.</p>
        </div>
      </section>
    </main>
  );
}
