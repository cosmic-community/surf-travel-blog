import Link from 'next/link';
import { getCategories } from '@/lib/cosmic';
import { Category } from '@/types';

export default async function Header() {
  const categories = await getCategories();
  
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            🏄‍♂️ Surf Travel Blog
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            {categories.slice(0, 4).map((category: Category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {category.metadata.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}