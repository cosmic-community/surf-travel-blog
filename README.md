# Surf Travel Blog

A modern Next.js surf travel blog featuring stories from wave riders around the world. Built with Cosmic CMS for content management and Tailwind CSS for beautiful, responsive styling.

![Surf Travel Blog](https://imgix.cosmicjs.com/0501d5b0-5c2f-11f0-a051-23c10f41277a-photo-1507525428034-b723cf961d3e-1752001745826.jpg?w=800&h=400&fit=crop&auto=format,compress)

## Features

- 📝 Beautiful blog post layouts with markdown support
- 👥 Author profiles with social media links
- 🏷️ Category-based content organization
- 📱 Fully responsive design
- 🌊 Ocean-inspired color scheme
- 🔍 SEO-optimized pages
- 🎨 Custom category colors and styling
- 📷 Optimized image handling with imgix
- 🚀 Built with Next.js 15 App Router
- 💨 Styled with Tailwind CSS

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=test-blog-production)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a surf travel blog with posts, authors, and categories."

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: "staging" in cosmic config"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Inter Font** - Modern typography
- **Imgix** - Image optimization and transformation

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the surf travel blog content model

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application

## Cosmic SDK Examples

### Fetching All Posts
```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a Single Post
```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .depth(1);
```

### Fetching Posts by Category
```typescript
const { objects: posts } = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.category': categoryId 
  })
  .depth(1);
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com) to manage:

- **Posts** - Blog articles with title, excerpt, content, featured image, author, category, tags, and location
- **Authors** - Writer profiles with name, bio, profile photo, Instagram, and website
- **Categories** - Content organization with name, description, and custom colors

For more information about the Cosmic SDK, visit the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard

### Environment Variables
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (optional, for mutations)

<!-- README_END -->