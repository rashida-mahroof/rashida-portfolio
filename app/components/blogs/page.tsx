import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Excited to try out Project IDX',
    image: '/path/to/email-list-image.jpg',
    category: 'AI Technology'
  },
  {
    title: 'Top 10 Toolkits for Deep Learning in 2020',
    image: '/path/to/deep-learning-image.jpg',
    category: 'Technology'
  },
  {
    title: 'Everything You Need to Know About Web Accessibility',
    image: '/path/to/web-accessibility-image.jpg',
    category: 'Web Development'
  },
  {
    title: 'How to Inject Humor & Comedy Into Your Brand',
    image: '/path/to/humor-brand-image.jpg',
    category: 'Branding'
  },
  {
    title: 'Women in Web Design: How To Achieve Success',
    image: '/path/to/women-web-design-image.jpg',
    category: 'Design'
  },
  {
    title: 'Evergreen versus topical content: An overview',
    image: '/path/to/content-types-image.jpg',
    category: 'Content Strategy'
  }
];

const BlogGrid = () => {
  return (
    <div className=" p-8" id='blog'>
      <h1 className="text-4xl font-bold mb-8 text-white">
        MY <span className="text-yellow-500">BLOG</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${index}`} key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-sm font-semibold mb-2">{post.category}</p>
                <h2 className="text-lg font-bold">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;