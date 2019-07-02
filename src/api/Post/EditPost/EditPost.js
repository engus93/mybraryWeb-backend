import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    editPostBring: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId } = args;

      return prisma.post({ id: postId });
    }
  },
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId, title, contents, secret } = args;
      try {
        // File을 제외한 나머지 처리 부분
        await prisma.updatePost({
          where: {
            id: postId
          },
          data: {
            title,
            contents,
            secret
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
