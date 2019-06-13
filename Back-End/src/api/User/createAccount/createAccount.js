import { prisma } from "./../../../../generated/prisma-client";
import { sendMail } from "../../../utils";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email, pw, username } = args;
      try {
        const userInfo = await prisma.createUser({
          email,
          pw,
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
