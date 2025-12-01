import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { BlogPost } from "@/types/content";
import "./Blog.css";

type BlogProps = {
  post?: BlogPost | null;
  posts: BlogPost[];
};

const markdownPlugins = [remarkGfm];
const rehypePlugins = [rehypeRaw, rehypeSanitize];

const Blog: React.FC<BlogProps> = ({ post, posts }) => {
  return (
    <div className="blog-layout">
      <aside className="blog-sidebar">
        <h2 className="sidebar-title">Latest posts</h2>
        <div className="space-y-3">
          {posts.map((p) => (
            <Link key={p.path} href={p.path} className="sidebar-link">
              <p className="font-semibold text-white">{p.title}</p>
              {p.publishAt && (
                <p className="text-xs text-slate-300">
                  {new Date(p.publishAt).toLocaleDateString()}
                </p>
              )}
            </Link>
          ))}
        </div>
      </aside>
      <article className="blog-article">
        {post ? (
          <>
            <h1 className="article-title">{post.title}</h1>
            {post.publishAt && (
              <p className="text-sm text-slate-300">
                Published {new Date(post.publishAt).toLocaleDateString()}
              </p>
            )}
            <ReactMarkdown
              remarkPlugins={markdownPlugins}
              rehypePlugins={rehypePlugins}
              className="prose prose-invert max-w-none mt-6"
            >
              {post.body}
            </ReactMarkdown>
          </>
        ) : (
          <div className="prose prose-invert max-w-none">
            <h1 className="article-title">Blog</h1>
            <p>Select a post to read.</p>
          </div>
        )}
      </article>
    </div>
  );
};

export default Blog;
