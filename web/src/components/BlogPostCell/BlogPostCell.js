import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostQuery($slug: String!) {
    post: postBySlug(slug: $slug) {
      id
      title
      slug
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return (
    <div className="-mt-10">
      <BlogPost post={post} />
    </div>
  )
}
