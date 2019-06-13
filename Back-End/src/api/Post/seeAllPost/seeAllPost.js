import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllPost: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return prisma.posts({
        where: {
          secret: true
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};
