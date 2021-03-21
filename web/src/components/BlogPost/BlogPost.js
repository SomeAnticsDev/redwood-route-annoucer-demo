import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article>
      <header>
        <h1 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.blogPost({ slug: post.slug })}>{post.title}</Link>
        </h1>
      </header>
      <p className="mt-2 text-gray-900 font-light">{post.body}</p>
    </article>
  )
}

export default BlogPost
