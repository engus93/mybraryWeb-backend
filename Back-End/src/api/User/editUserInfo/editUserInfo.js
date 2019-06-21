import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUserInfo: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { username, pw } = args;
      const {
        user: { id }
      } = request;

      let reqPw;

      if (pw !== undefined) {
        reqPw = await bcrypt.hash(pw, process.env.BCRYPT_OPTION);
      } else {
        reqPw = pw;
      }

      try {
        return prisma.updateUser({
          where: {
            id
          },
          data: {
            pw: reqPw,
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
