import { createBucketClient } from '@cosmicjs/sdk';
import { Post, Author, Category, CosmicObjectsResponse, CosmicObjectResponse } from '@/types';

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
  writeKey: process.env.COSMIC_WRITE_KEY,
  apiEnvironment: 'staging' as const,
});

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return (response as CosmicObjectsResponse<Post>).objects;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .depth(1);
    return (response as CosmicObjectResponse<Post>).object;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    return (response as CosmicObjectsResponse<Category>).objects;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug });
    return (response as CosmicObjectResponse<Category>).object;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata']);
    return (response as CosmicObjectsResponse<Author>).objects;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export async function getAuthor(slug: string): Promise<Author | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'authors', slug });
    return (response as CosmicObjectResponse<Author>).object;
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return (response as CosmicObjectsResponse<Post>).objects;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.author': authorId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return (response as CosmicObjectsResponse<Post>).objects;
  } catch (error) {
    console.error('Error fetching posts by author:', error);
    return [];
  }
}

export { cosmic };