import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-xl font-black">VIBE.LOCAL</p>
          <p className="mt-3 text-sm text-slate-500">Streetwear & lifestyle dành cho thế hệ luôn chuyển động.</p>
        </div>
        <div>
          <h4 className="font-semibold">Link nhanh</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/products">Sản phẩm</Link></li>
            <li><Link href="/collections">Bộ sưu tập</Link></li>
            <li><Link href="/promo">Khuyến mãi</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Chính sách</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>Đổi trả 14 ngày</li>
            <li>Bảo mật thông tin</li>
            <li>Vận chuyển toàn quốc</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Nhận tin mới</h4>
          <div className="mt-3 flex gap-2">
            <input className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm dark:border-slate-700" placeholder="Email của bạn" />
            <button className="rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">Đăng ký</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
