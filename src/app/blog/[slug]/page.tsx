import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
      published: true,
    },
    include: {
      category: true,
      tags: true,
      author: true,
    },
  });

  if (!post) {
    return {
      title: "Post não encontrado",
      description: "O post que você está procurando não foi encontrado.",
    };
  }

  return {
    title: `${post.title} | Lucas Gonçalves`,
    description:
      post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
    keywords: post.tags.map((tag: { name: string }) => tag.name).join(", "),
    openGraph: {
      title: post.title,
      description:
        post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: post.author ? [post.author.name] : ["Lucas Gonçalves"],
      images: post.imageUrl
        ? [
            {
              url: post.imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt || `Leia sobre ${post.title} no blog de Lucas Gonçalves.`,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
      published: true,
    },
    include: {
      category: true,
      tags: true,
      author: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogPost post={post} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
