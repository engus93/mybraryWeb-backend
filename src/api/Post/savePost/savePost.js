import { prisma } from "./../../../../generated/prisma-client";

export default {
  Mutation: {
    savePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      try {
        await prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            savePostList: {
              connect: {
                id: postId
              }
            }
          }
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
