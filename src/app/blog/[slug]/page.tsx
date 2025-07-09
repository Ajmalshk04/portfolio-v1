import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

  return {
    title: `${title} | ${DATA.name}`,
    description,
    authors: [{ name: DATA.name }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: DATA.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: DATA.contact.social.X ? `@${DATA.contact.social.X.url.split('/').pop()}` : undefined,
    },
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
  };
}

// Function to estimate reading time
function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.source);

  return (
    <section id="blog" className="max-w-4xl mx-auto px-4 py-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
            publisher: {
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${DATA.url}/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* Back to Blog Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-3xl">
          {post.metadata.title}
        </h1>
        
        {post.metadata.summary && (
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
            {post.metadata.summary}
          </p>
        )}

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <Suspense fallback={<span className="h-4 w-16 bg-muted animate-pulse rounded" />}>
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt)}
              </time>
            </Suspense>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>

          <div className="flex items-center gap-1">
            <span>By</span>
            <Link
              href={DATA.url}
              className="text-foreground hover:underline font-medium"
            >
              {DATA.name}
            </Link>
          </div>
        </div>

        <Separator className="mt-6" />
      </header>

      {/* Article Content */}
      <article
        className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-muted prose-pre:border prose-img:rounded-lg prose-img:shadow-sm"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              Published on{" "}
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt)}
              </time>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Share:</span>
            <div className="flex gap-2">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.metadata.title)}&url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}