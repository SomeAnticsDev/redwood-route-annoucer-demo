import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ slug }) => {
  return (
    <BlogLayout>
      <BlogPostCell slug={slug} />
    </BlogLayout>
  )
}

export default BlogPostPage
