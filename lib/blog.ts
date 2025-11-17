export type BlogPost = {
  slug: string;
  title: string;
  displayDate: string;
  dateISO: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "history-of-egg-waffles",
    title: "The History of Hong Kong Egg Waffles",
    displayDate: "November 10, 2025",
    dateISO: "2025-11-10",
    excerpt:
      "Discover the fascinating origins of this beloved street food and how it became a cultural icon...",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    content: [
      "Hong Kong egg waffles, also known as gai daan jai, originated in the 1950s as a creative way for street vendors to use broken eggs. The batter was poured into a unique honeycomb mold, creating the signature texture: crisp on the outside and soft, airy bubbles inside.",
      "Over the decades, egg waffles evolved from a humble street snack into a cultural icon, beloved by locals and visitors alike. Modern variations now include charcoal, matcha, chocolate, and cheese batters, as well as fillings that push the boundaries of tradition.",
      "At HKS, we honor this heritage while introducing thoughtful twists, pairing our waffles with premium gelato to create a perfect harmony of textures and flavors.",
    ],
  },
  {
    slug: "gelato-waffle-pairings",
    title: "5 Perfect Gelato & Waffle Pairings",
    displayDate: "November 5, 2025",
    dateISO: "2025-11-05",
    excerpt:
      "Learn which gelato flavors complement our egg waffles best. Our expert recommendations...",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd",
    content: [
      "Finding the perfect gelato pairing elevates the egg waffle experience. Here are five tried-and-true combinations our team loves:",
      "1) Classic Vanilla + Original Waffle: A timeless duo that lets textures shine.",
      "2) Matcha Gelato + Chocolate Waffle: Earthy, bittersweet, and utterly satisfying.",
      "3) Strawberry Gelato + Charcoal Waffle: Bright fruit with a dramatic, photogenic base.",
      "4) Pistachio Gelato + Original Waffle: Nutty elegance with a creamy finish.",
      "5) Salted Caramel Gelato + Chocolate Waffle: Sweet-salty balance with caramel ribbons.",
      "Pro tip: add fresh fruit and a light drizzle of condensed milk to round out flavor and mouthfeel.",
    ],
  },
  {
    slug: "behind-the-scenes-hks",
    title: "Behind the Scenes: A Day at HKS",
    displayDate: "October 28, 2025",
    dateISO: "2025-10-28",
    excerpt:
      "Follow our team as we prepare fresh waffles and gelato from dawn to dusk...",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    content: [
      "Our day starts early with ingredient prep and equipment checks. Batter is mixed to precise ratios, and our gelato base is churned in small batches for optimal texture.",
      "Throughout the day, we monitor temperature and timing closely to ensure every waffle emerges crisp with soft, airy bubbles. Meanwhile, our gelato cabinet is rotated to keep flavors fresh and vibrant.",
      "Before closing, we review stock, clean meticulously, and plan the next day’s specials. Consistency and care are at the heart of everything we do.",
    ],
  },
];

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
