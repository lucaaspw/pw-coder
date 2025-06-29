import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
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
