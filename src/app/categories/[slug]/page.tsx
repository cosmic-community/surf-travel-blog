// src/app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getCategory, getPostsByCategory } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import { Post } from '@/types';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategory(slug);
  
  if (!category) {
    notFound();
  }
  
  const posts = await getPostsByCategory(category.id);
  const { metadata } = category;
  const { name, description, color } = metadata;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-16 text-white" style={{ backgroundColor: color }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <p className="text-xl opacity-90">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {posts.length} {posts.length === 1 ? 'Post' : 'Posts'} in {name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No posts found in {name}
            </h2>
            <p className="text-gray-600">
              Check back later for new content in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}