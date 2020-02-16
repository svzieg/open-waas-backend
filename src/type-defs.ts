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
`;
