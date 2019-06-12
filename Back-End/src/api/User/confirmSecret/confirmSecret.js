import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email } = args;
      try {
        await prisma.updateUser({
          where: {
            email
          },
          data: {
            authCheck: true
          }
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
