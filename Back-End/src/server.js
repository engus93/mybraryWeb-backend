// Import module
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";

// My files list
import "./env";
import schema from "./schema";

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema });

// morgan dev mode => log check module
server.express.use(logger("dev"));

server.start({ port: PORT }, () => {
  console.log(`✅　Server running on port http://localhost:${PORT}`);
});
