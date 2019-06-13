import { prisma } from "./../../../../generated/prisma-client";

export default {
  Query: {
    seeMyPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, set } = args;
      const {
        user: { id }
      } = request;
      console.log(id);
      return prisma.posts({
        where: {
          user: {
            id
          }
        },
        orderBy: "createdAt_DESC",
        skip: page * set,
        first: set
      });
    }
  }
};
