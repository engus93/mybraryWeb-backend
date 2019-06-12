import { prisma } from "./../../../../generated/prisma-client";

export default {
  Query: {
    authentication: async (_, args) => {
      const { email, pw } = args;
      try {
        const loggingUser = await prisma.user({
          email
        });
        if (loggingUser !== null) {
          if (loggingUser.pw === pw) {
            return "Hello World";
          }
          return "Don't match your password";
        }
        return "Don't find your email";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
