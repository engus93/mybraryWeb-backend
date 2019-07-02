import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deletePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId } = args;
      try {
        await prisma.deletePost({ id: postId });
        return true;
      } catch (error) {
        return false;
      }
    }
  }
};
