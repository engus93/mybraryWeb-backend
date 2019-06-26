import { prisma } from "../../../../generated/prisma-client";
import { getToday } from "../../../utils";

export default {
  Query: {
    seeAllPost: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { page, set, isBest } = args;
      const term = getToday();
      try {
        if (isBest) {
          return prisma.posts({
            where: {
              AND: [
                {
                  secret: false
                },
                {
                  createdAt_gte: term.startTime
                },
                {
                  createdAt_lte: term.endTime
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
