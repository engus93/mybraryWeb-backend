import { prisma } from "./../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { postId, action } = args;
      try {
        if (action === "likeOn") {
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        } else if (action === "likeOff") {
          await prisma.deleteManyLikes({
            AND: [
              {
                user: {
                  id: user.id
                },
                post: {
                  id: postId
                }
              }
            ]
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
