import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deletePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      try {
        await prisma.deletePost({ id });
        return true;
      } catch (error) {
        return false;
      }
    }
  }
};
