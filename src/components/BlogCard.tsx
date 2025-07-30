import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'featured' | 'recent';
}

const BlogCard = ({ post, variant = 'featured' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-600">{post.date}</p>
              </div>
            </div>
            <Link 
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
            >
              Read More →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Recent post variant
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-48 md:h-auto">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-600">{post.date}</p>
              </div>
            </div>
            <Link 
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 