export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Author {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    bio: string;
    profile_photo?: CosmicFile;
    instagram?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    description: string;
    color: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  metadata: {
    title: string;
    excerpt: string;
    content: string;
    featured_image?: CosmicFile;
    author: Author;
    category?: Category;
    tags?: string;
    location?: string;
  };
}

export interface CosmicObjectsResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
}

export interface CosmicObjectResponse<T> {
  object: T;
}