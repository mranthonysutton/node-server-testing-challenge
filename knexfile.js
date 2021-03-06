// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/books.db3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds',
    },
    migrations: {
      directory: './data/migrations',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing.db3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/testing/seeds',
    },
    migrations: {
      directory: './data/testing/migrations',
    },
  },

  production: {
    client: process.env.DATABASE_URL,
    connection: {
      filename: './data/books.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
