import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllPost: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, set } = args;
      return prisma.posts({
        where: {
          secret: false
        },
        orderBy: "createdAt_DESC",
        skip: page * set,
        first: set
      });
    }
  }
};
