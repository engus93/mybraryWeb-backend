// Import module
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";
import http from "http";

// My files list
import "./env";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  // request에 logged user info and function 넣기
  context: ({ request }) => ({ request, isAuthenticated })
});

// morgan dev mode => log check module
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

/* Prevent Sleep in Heroku Server */
setInterval(() => {
  http.get("https://web-mybrary.herokuapp.com/");
}, 1200000); // every 20 minutes

server.start({ port: PORT }, () => {
  console.log(`✅　Server running on port http://localhost:${PORT}`);
});
