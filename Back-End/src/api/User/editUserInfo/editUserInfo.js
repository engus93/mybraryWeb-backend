import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUserInfo: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { username, pw } = args;
      const {
        user: { id }
      } = request;
      try {
        return prisma.updateUser({
          where: {
            id
          },
          data: {
            pw,
            username
          }
        });
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
