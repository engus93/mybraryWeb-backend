import { prisma } from "./../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email, pw, username } = args;
      try {
        await prisma.createUser({
          email,
          pw,
          username
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
