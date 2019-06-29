import { prisma } from "./../../../../generated/prisma-client";

export default {
  Query: {
    seeMyPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { year, month } = args;
      const {
        user: { id }
      } = request;
      // Paging 갯수
      const set = 5;

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
        first: set
      });
    }
  },
  Mutation: {
    seeMyPostPaging: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, year, month } = args;
      const {
        user: { id }
      } = request;
      // Paging 갯수
      const set = 5;

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
