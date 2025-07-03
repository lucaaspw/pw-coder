"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt?: string | null;
    imageUrl?: string | null;
    createdAt: Date;
    category?: {
      id: string;
      name: string;
      slug: string;
    } | null;
    tags: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
    author?: {
      id: string;
      name: string;
      email: string;
    } | null;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      {post.imageUrl && (
        <div className="aspect-video overflow-hidden">
          <OptimizedImage
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <header className="mb-8">
          {post.category && (
            <Link
              href={`/blog/category/${post.category.slug}`}
              className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6 hover:bg-blue-200 transition-colors duration-200"
            >
              {post.category.name}
            </Link>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              {post.author && (
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    {post.author.name}
                  </span>
                </div>
              )}
              <time
                dateTime={post.createdAt.toISOString()}
                className="text-gray-600"
              >
                {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </footer>
        )}
      </div>
    </motion.article>
  );
}
