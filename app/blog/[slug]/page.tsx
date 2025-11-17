import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | HKS Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | HKS Blog`,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-yellow-700 hover:text-yellow-800">← Back to Home</Link>
            <p className="text-sm text-gray-500">{post.displayDate}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{post.title}</h1>
        </div>
      </section>

      {post.image && (
        <div className="relative w-full h-[240px] md:h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
            quality={70}
          />
        </div>
      )}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 prose prose-lg max-w-3xl">
          {post.content.map((para, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">{para}</p>
          ))}
        </div>
      </section>
    </>
  );
}
