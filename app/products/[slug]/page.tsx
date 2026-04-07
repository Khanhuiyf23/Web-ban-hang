import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '@/components/product-detail-client';

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
