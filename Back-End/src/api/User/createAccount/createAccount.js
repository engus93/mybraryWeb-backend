import { prisma } from "./../../../../generated/prisma-client";
import { sendMail } from "../../../utils";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email, pw, username } = args;
      try {
        const reqPw = await bcrypt.hash(pw, Number(process.env.BCRYPT_OPTION));

        const userInfo = await prisma.createUser({
          email,
          pw: reqPw,
          username
        });

        await sendMail(userInfo);

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
