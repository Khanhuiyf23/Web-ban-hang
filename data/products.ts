import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    slug: 'neo-oversize-tee',
    name: 'Neo Oversize Tee',
    category: 'Tops',
    price: 490000,
    originalPrice: 620000,
    colors: ['Black', 'White', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Hot',
    rating: 4.8,
    reviews: 152,
    description: 'Áo thun form rộng, chất cotton compact premium, mềm và đứng form.',
    details: 'Chất liệu 100% cotton compact 260gsm. In lụa phản quang nhẹ. Thiết kế drop shoulder cho vibe streetwear hiện đại.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f'
    ]
  },
  {
    id: 2,
    slug: 'pulse-cargo-pants',
    name: 'Pulse Cargo Pants',
    category: 'Bottoms',
    price: 890000,
    colors: ['Khaki', 'Black'],
    sizes: ['M', 'L', 'XL'],
    badge: 'Hot',
    rating: 4.9,
    reviews: 99,
    description: 'Quần cargo techwear với túi hộp tối ưu chuyển động.',
    details: 'Poly-spandex co giãn 4 chiều, xử lý chống nhăn. Form regular fit dễ phối.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a',
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126'
    ]
  },
  {
    id: 3,
    slug: 'flux-bomber-jacket',
    name: 'Flux Bomber Jacket',
    category: 'Outerwear',
    price: 1290000,
    badge: 'New',
    colors: ['Navy', 'Black'],
    sizes: ['M', 'L'],
    rating: 4.7,
    reviews: 64,
    description: 'Bomber nhẹ, giữ ấm vừa đủ cho thời tiết đô thị.',
    details: 'Vải dù cao cấp, lót lưới thoáng khí. Khóa kéo YKK bền bỉ.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      'https://images.unsplash.com/photo-1542272604-787c3835535d'
    ]
  },
  {
    id: 4,
    slug: 'glow-mini-bag',
    name: 'Glow Mini Bag',
    category: 'Accessories',
    price: 590000,
    badge: 'Sale',
    originalPrice: 760000,
    colors: ['Silver', 'Black'],
    sizes: ['Free'],
    rating: 4.6,
    reviews: 121,
    description: 'Túi đeo chéo mini unisex, gọn nhẹ và nổi bật.',
    details: 'Vải ripstop chống nước nhẹ, khoang chính + ngăn phụ tiện lợi.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa'
    ]
  },
  {
    id: 5,
    slug: 'vibe-cap',
    name: 'VIBE Signature Cap',
    category: 'Accessories',
    price: 320000,
    colors: ['Cream', 'Black', 'Blue'],
    sizes: ['Free'],
    badge: 'New',
    rating: 4.7,
    reviews: 78,
    description: 'Nón lưỡi trai logo thêu nổi, dễ phối đồ hàng ngày.',
    details: 'Cotton twill dày vừa, khóa chỉnh kim loại.',
    images: [
      'https://images.unsplash.com/photo-1521369909029-2afed882baee',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'
    ]
  },
  {
    id: 6,
    slug: 'urban-hoodie',
    name: 'Urban Core Hoodie',
    category: 'Tops',
    price: 990000,
    colors: ['Ash Gray', 'Black'],
    sizes: ['S', 'M', 'L'],
    rating: 4.8,
    reviews: 183,
    description: 'Hoodie nỉ bông dày, form boxy trendy.',
    details: 'Nỉ 420gsm, mũ 2 lớp, bo tay co giãn tốt.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
      'https://images.unsplash.com/photo-1620799139834-6b8f844fbe67'
    ]
  },
  {
    id: 7,
    slug: 'wave-sneaker',
    name: 'Wave Runner Sneaker',
    category: 'Lifestyle',
    price: 1490000,
    colors: ['White', 'Graphite'],
    sizes: ['39', '40', '41', '42', '43'],
    badge: 'Hot',
    rating: 4.9,
    reviews: 207,
    description: 'Sneaker đế foam êm, thiết kế chunky trẻ trung.',
    details: 'Upper mesh + PU, đế EVA hấp thụ lực tốt.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111'
    ]
  },
  {
    id: 8,
    slug: 'studio-wide-jeans',
    name: 'Studio Wide Jeans',
    category: 'Bottoms',
    price: 850000,
    colors: ['Blue', 'Washed Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviews: 86,
    description: 'Quần jeans ống rộng, wash nhẹ và lên form cực tôn dáng.',
    details: 'Denim 12oz, xử lý wash enzyme, đường may tương phản.',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb'
    ]
  },
  {
    id: 9,
    slug: 'daily-tumbler',
    name: 'Daily Steel Tumbler',
    category: 'Lifestyle',
    price: 390000,
    colors: ['Matte Black', 'Ice White'],
    sizes: ['500ml'],
    rating: 4.5,
    reviews: 42,
    description: 'Bình giữ nhiệt tối giản cho lịch trình năng động cả ngày.',
    details: 'Inox 304 hai lớp, giữ lạnh 12h và giữ nóng 8h.',
    images: [
      'https://images.unsplash.com/photo-1616628182509-6f8d5f89e4d6',
      'https://images.unsplash.com/photo-1592417817038-d13fd7342605'
    ]
  },
  {
    id: 10,
    slug: 'aurora-sunglasses',
    name: 'Aurora Sunglasses',
    category: 'Accessories',
    price: 690000,
    colors: ['Black', 'Brown'],
    sizes: ['Free'],
    badge: 'New',
    rating: 4.7,
    reviews: 70,
    description: 'Kính mát gọng vuông cá tính, hoàn thiện cao cấp.',
    details: 'Tròng UV400, bản lề thép không gỉ, nhẹ và chắc chắn.',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f'
    ]
  }
];

export const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Lifestyle'] as const;
