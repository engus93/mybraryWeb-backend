import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteSavePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { postId } = args;
      try {
        await prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            savePostList: {
              disconnect: {
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
