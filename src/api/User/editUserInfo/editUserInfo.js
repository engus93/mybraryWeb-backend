import { prisma } from "../../../../generated/prisma-client";
import bcrypt from "bcrypt";

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
            pw:
              pw !== ""
                ? // 비밀번호 암호화
                  await bcrypt.hash(pw, Number(process.env.BCRYPT_OPTION))
                : undefined,
            username: username !== "" ? username : undefined
          }
        });
      } catch (error) {
        console.log(error);
        return;
      }
    }
  }
};
