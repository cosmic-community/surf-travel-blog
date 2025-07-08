// src/app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { getPost } from '@/lib/cosmic';
import AuthorCard from '@/components/AuthorCard';
import CategoryBadge from '@/components/CategoryBadge';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }
  
  const { metadata } = post;
  const { title, content, featured_image, author, category, tags, location } = metadata;
  
  const htmlContent = DOMPurify.sanitize(await marked(content));
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              {category && <CategoryBadge category={category} />}
              {location && (
                <span className="text-gray-600">📍 {location}</span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <AuthorCard author={author} />
              {tags && (
                <div className="flex flex-wrap gap-2">
                  {tags.split(',').map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {featured_image && (
              <img
                src={`${featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-wave p-8">
            <div 
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}