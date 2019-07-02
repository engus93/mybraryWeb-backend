import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllPost: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { year, month, isBest } = args;
      // Paging 갯수
      const set = 5;
      try {
        if (isBest) {
          return prisma.posts({
            where: {
              AND: [
                {
                  secret: false
                },
                {
                  createdAt_gt: new Date(year, month - 1)
                },
                {
                  createdAt_lte: new Date(year, month)
                }
              ]
            },
            orderBy: "likeCount_DESC",
            first: set
          });
        }
        return prisma.posts({
          where: {
            secret: false
          },
          orderBy: "createdAt_DESC",
          first: set
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  Mutation: {
    seeAllPostPaging: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, year, month, isBest } = args;

      // Paging 갯수
      const set = 5;
      try {
        if (isBest) {
          return prisma.posts({
            where: {
              AND: [
                {
                  secret: false
                },
                {
                  createdAt_gt: new Date(year, month - 1)
                },
                {
                  createdAt_lte: new Date(year, month)
                }
              ]
            },
            orderBy: "likeCount_DESC",
            skip: page * set,
            first: set
          });
        }
        return prisma.posts({
          where: {
            secret: false
          },
          orderBy: "createdAt_DESC",
          skip: page * set,
          first: set
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
