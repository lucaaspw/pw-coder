"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: string;
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
}

interface Category {
  id: string;
  name: string;
  slug: string;
  _count: {
    posts: number;
  };
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar com categorias */}
      <div className="lg:col-span-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Categorias</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50"
              >
                <span className="font-medium">{category.name}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
                  {category._count.posts}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lista de posts */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {post.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                {post.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {post.category.name}
                  </span>
                )}

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    {post.author && (
                      <>
                        <span className="font-medium">{post.author.name}</span>
                        <span>•</span>
                      </>
                    )}
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                    </span>
                  </div>

                  {post.tags.length > 0 && (
                    <div className="flex space-x-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.id}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 text-sm"
                  >
                    Ler mais →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nenhum post encontrado
            </h3>
            <p className="text-gray-600">
              Em breve teremos conteúdo interessante aqui!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
