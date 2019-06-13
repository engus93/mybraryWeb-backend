import { prisma } from "./../../../generated/prisma-client";

export default {
  Post: {
    user: ({ id }) => prisma.post({ id }).user(),
    files: ({ id }) => prisma.post({ id }).files(),
    isLiked: ({ id }, _, { request: { user } }) =>
      prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id
            },
            post: {
              id
            }
          }
        ]
      }),
    likeCount: ({ id }) =>
      prisma
        .likesConnection({
          where: {
            post: {
              id
            }
          }
        })
        .aggregate()
        .count()
  }
};
