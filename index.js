import express from "express";
import { ApolloServer } from "apollo-server-express";
import sequelize from "./sequelize.js";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS for all routes

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await sequelize.sync({ force: false }); // Sync models to DB
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
