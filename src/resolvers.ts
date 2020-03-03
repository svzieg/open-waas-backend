import { PostModel } from './model/Post'
import { PageModel } from './model/Page'
const { PubSub } = require('apollo-server');

const pubsub = new PubSub();


const POST_ADDED = 'POST_ADDED';

export default {
  Query: {
    posts: () => PostModel.find({}),
    Pages: (root: any, args: any, context: any) => {
      console.log(root, args, context)
      return PageModel.find({})
    }
  },
  Mutation: {
    createPost: (root: any, args: any, context: any) => {
      return PostModel.create(args).then(post => {
        pubsub.publish(POST_ADDED, { postAdded: post });
        return post;
      }) 
    }
  },
  Subscription: {
    postAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([POST_ADDED]),
    },
  },
};
