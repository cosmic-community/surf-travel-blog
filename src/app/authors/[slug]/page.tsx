// src/app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAuthor, getPostsByAuthor } from '@/lib/cosmic';
import AuthorCard from '@/components/AuthorCard';
import PostCard from '@/components/PostCard';

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  
  if (!author) {
    notFound();
  }
  
  const posts = await getPostsByAuthor(author.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AuthorCard author={author} detailed />
          </div>
        </div>
      </div>
      
      {/* Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {posts.length} {posts.length === 1 ? 'Post' : 'Posts'} by {author.metadata.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No posts found by {author.metadata.name}
            </h2>
            <p className="text-gray-600">
              Check back later for new content from this author.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}