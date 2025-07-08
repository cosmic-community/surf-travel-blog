import { getPosts, getCategories } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';
import CategoryBadge from '@/components/CategoryBadge';
import { Post, Category } from '@/types';

export default async function HomePage() {
  const posts = await getPosts();
  const categories = await getCategories();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-ocean text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Surf Travel Blog
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Stories from wave riders around the world
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category: Category) => (
                <CategoryBadge key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Latest Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}