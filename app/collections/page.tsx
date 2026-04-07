import Link from 'next/link';

export default function InfoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">VIBE.LOCAL</p>
      <h1 className="mt-3 text-5xl font-black">Trang đang cập nhật</h1>
      <p className="mt-4 text-slate-500">Team đang hoàn thiện nội dung để mang đến trải nghiệm đồng bộ và chỉn chu nhất.</p>
      <Link href="/products" className="mt-8 inline-block rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white">Mua sắm ngay</Link>
    </main>
  );
}
