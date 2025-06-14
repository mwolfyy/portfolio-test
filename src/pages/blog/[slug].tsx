import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, Clock, User, Tag, Edit } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import CyberCard from '@/components/UI/CyberCard';
import { useBlogStore } from '@/store/blogStore';
import { formatDate } from '@/utils/formatters';
import { useAuth } from '@/context/AuthContext';
import ReactMarkdown from 'react-markdown';
import { Post } from '@/types/blog';

interface BlogPostPageProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogPostPage({ post, relatedPosts }: BlogPostPageProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Публикацията не е намерена</h1>
          <p className="text-gray-400 mb-8">Страницата, която търсите, не съществува или е преместена.</p>
          <Link href="/blog" className="btn-primary">
            Върнете се към блога
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
        {post.seoKeywords && <meta name="keywords" content={post.seoKeywords} />}
        <link rel="canonical" href={`https://stanchev.bg/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seoTitle || post.title} />
        <meta property="og:description" content={post.seoDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://stanchev.bg/blog/${post.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle || post.title} />
        <meta name="twitter:description" content={post.seoDescription || post.excerpt} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "keywords": post.tags.join(", "),
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.publishedAt,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://stanchev.bg/blog/${post.slug}`
              }
            })
          }}
        />
      </Head>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to blog */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Назад към блога
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              {isAuthenticated && (
                <button 
                  onClick={() => router.push(`/admin/blog/${post.id}`)}
                  className="flex items-center text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  <Edit size={18} className="mr-2" />
                  <span>Редактирай</span>
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index} 
                  href={`/blog?tag=${tag}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-gray text-cyber-blue hover:bg-cyber-gray/80 transition-colors"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <CyberCard glowColor="purple" className="article-content">
                <article className="prose prose-lg prose-invert max-w-none">
                  <ReactMarkdown>
                    {post.content}
                  </ReactMarkdown>
                </article>
              </CyberCard>
            </div>
            
            <div className="lg:col-span-1">
              {/* Author Info */}
              <CyberCard glowColor="blue" className="mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">За автора</h3>
                  <p className="text-gray-300 mb-4">
                    Станчев е SEO експерт с над 5 години опит в оптимизацията за търсачки за българския пазар.
                  </p>
                  <Link href="/за-мен" className="text-cyber-blue hover:text-cyber-purple transition-colors">
                    Научете повече
                  </Link>
                </div>
              </CyberCard>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <CyberCard glowColor="teal">
                  <h3 className="text-xl font-bold mb-4">Свързани статии</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="border-b border-cyber-gray pb-4 last:border-0 last:pb-0">
                        <Link 
                          href={`/blog/${relatedPost.slug}`}
                          className="block font-medium hover:text-cyber-purple transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="text-sm text-gray-400 mt-1">
                          {formatDate(relatedPost.publishedAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CyberCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = useBlogStore.getState();
  const publishedPosts = posts.filter(post => post.status === 'published');
  
  const paths = publishedPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = useBlogStore.getState();
  const post = posts.find(p => p.slug === params?.slug && p.status === 'published');
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts based on tags
  const relatedPosts = posts
    .filter(p => 
      p.id !== post.id && 
      p.status === 'published' && 
      p.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600,
  };
};