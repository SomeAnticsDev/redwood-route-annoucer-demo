export const schema = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    postById(id: Int!): Post
    postBySlug(slug: String!): Post
  }

  input CreatePostInput {
    title: String!
    slug: String
    body: String!
  }

  input UpdatePostInput {
    title: String
    slug: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
