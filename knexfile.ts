// import path from 'path';
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true
  }
};
