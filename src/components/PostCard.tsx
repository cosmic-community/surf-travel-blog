import Link from 'next/link';
import { Post } from '@/types';
import AuthorCard from './AuthorCard';
import CategoryBadge from './CategoryBadge';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, metadata } = post;
  const { title, excerpt, featured_image, author, category, location } = metadata;
  
  return (
    <article className="bg-white rounded-lg shadow-wave overflow-hidden hover:shadow-lg transition-shadow">
      {featured_image && (
        <Link href={`/posts/${slug}`}>
          <img
            src={`${featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {category && <CategoryBadge category={category} />}
          {location && (
            <span className="text-sm text-gray-500">📍 {location}</span>
          )}
        </div>
        
        <Link href={`/posts/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <AuthorCard author={author} />
          <Link 
            href={`/posts/${slug}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}