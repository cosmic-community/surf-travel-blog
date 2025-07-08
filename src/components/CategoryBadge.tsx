import Link from 'next/link';
import { Category } from '@/types';

interface CategoryBadgeProps {
  category: Category;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const { slug, metadata } = category;
  const { name, color } = metadata;
  
  return (
    <Link 
      href={`/categories/${slug}`}
      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
      style={{ backgroundColor: color }}
    >
      {name}
    </Link>
  );
}