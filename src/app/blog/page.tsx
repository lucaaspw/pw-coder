import { prisma } from "@/lib/prisma";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      category: true,
      tags: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          posts: true,
        },
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHeader />
          <BlogList posts={posts} categories={categories} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
