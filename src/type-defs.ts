import { gql } from 'apollo-server';

export default gql`
  type Post {
      """
      Test Message. 
      """
      title: String!
      """
      Test Content. 
      """
      content: String!
  }


  type Page {
    title: String!
    url: String!
  }

  type Query {
    posts:  [Post!]
    Pages(offset: Int, limit: Int): [Page!]
  }
  
  type Mutation {
    createPost(title: String, content:String):  Post
  }

  type Subscription {
    postAdded: Post
  }
`;
