import { prisma } from "./../../../../generated/prisma-client";

export default {
  Query: {
    seeMyPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, set, year, month } = args;
      const {
        user: { id }
      } = request;
      return prisma.posts({
        where: {
          AND: [
            {
              user: {
                id
              }
            },
            {
              createdAt_gt: new Date(year, month - 1)
            },
            {
              createdAt_lte: new Date(year, month)
            }
          ]
        },
        orderBy: "createdAt_DESC",
        skip: page * set,
        first: set
      });
    }
  }
};
