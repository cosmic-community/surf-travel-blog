import Link from 'next/link';
import { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
  detailed?: boolean;
}

export default function AuthorCard({ author, detailed = false }: AuthorCardProps) {
  const { slug, metadata } = author;
  const { name, bio, profile_photo, instagram, website } = metadata;
  
  if (detailed) {
    return (
      <div className="bg-white rounded-lg shadow-wave p-6">
        <div className="flex items-center space-x-4 mb-4">
          {profile_photo && (
            <img
              src={`${profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex space-x-3 mt-2">
              {instagram && (
                <a 
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700"
                >
                  @{instagram}
                </a>
              )}
              {website && (
                <a 
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
        {bio && (
          <p className="text-gray-600 leading-relaxed">{bio}</p>
        )}
      </div>
    );
  }
  
  return (
    <Link href={`/authors/${slug}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      {profile_photo && (
        <img
          src={`${profile_photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
      <span className="text-sm text-gray-700 font-medium">{name}</span>
    </Link>
  );
}