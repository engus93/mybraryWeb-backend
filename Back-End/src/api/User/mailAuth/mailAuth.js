import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    mailAuth: async (_, args) => {
      const { id } = args;
      try {
        await prisma.updateUser({
          where: {
            id
          },
          data: {
            authCheck: true
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
