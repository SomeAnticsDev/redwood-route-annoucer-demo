import BlogPost from 'src/components/BlogPost'
import { queryClient } from 'src/ReactQueryProvider'

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

export const beforeQuery = (variables) => {
  return {
    variables,
    placeholderData: () => {
      const post = queryClient
        .getQueryData(['BlogPostsQuery', {}])
        ?.posts.find((d) => d.slug === variables.slug)
      return { post }
    },
  }
}

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
