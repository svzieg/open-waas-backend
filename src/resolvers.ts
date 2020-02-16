export default {
  Query: {
    posts: () => { return [
      {
        title: (): string => 'Hello World!',
        content: (): string => 'Hello World! x100',
      },
      {
        title: (): string => 'Hello World!',
        content: (): string => 'Hello World! x100',
      }
    ]}
  }
  
};
