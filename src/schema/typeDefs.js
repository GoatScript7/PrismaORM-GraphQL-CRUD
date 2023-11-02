export const typeDefs = `#graphql
    type Query {
        user: [User]
        posts: [Post]
        comments: [Comment]
    }

    type Mutation { 
        createUser(email: String!, name: String): User
        updateUser(id: Int!, name: String!): User
        deleteUser(id: Int!): User
        createPost(title: String!, content: String, authorId: Int!): Post
        updatePost(id: Int!, title: String, content: String, authorId: Int): Post
        deletePost(id: Int!): Post
        createComment(text: String!, postId: Int!, userId: Int!): Comment
        updateComment(id: Int!, text: String, postId: Int, userId: Int): Comment
        deleteComment(id: Int!): Comment
    }

    type User {
        id: Int
        email: String
        name: String
        posts: [Post]
        comments: [Comment]  # Add comments field to the User type
    }

    type Post {
        id: Int
        title: String
        content: String
        published: Boolean
        author: User
        comments: [Comment]  # Add comments field to the Post type
    }

    type Comment {
        id: Int
        text: String
        post: Post           # Add a reference to the Post the comment belongs to
        user: User           # Add a reference to the User who wrote the comment
    }
`;
