const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  port: number|string;
  mongo: {
    host: string,
    user: string,
    password: string | undefined
  }
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: process.env.PORT || defaultPort,
  mongo: {
    host: process.env.MONGO_HOST || "localhost",
    user: process.env.MONGO_USER || "root",
    password: process.env.MONGO_PASSWORD
  }
};
