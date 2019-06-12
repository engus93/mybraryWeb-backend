// Import module
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";

// My files list
import "./env";
import schema from "./schema";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  schema,
  // request에 logged user info and function 넣기
  context: ({ request }) => ({ request, isAuthenticated })
});

// morgan dev mode => log check module
server.express.use(logger("dev"));

server.start({ port: PORT }, () => {
  console.log(`✅　Server running on port http://localhost:${PORT}`);
});
