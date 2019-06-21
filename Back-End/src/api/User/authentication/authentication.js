import { prisma } from "./../../../../generated/prisma-client";
import { generateToken } from "./../../../utils";
import { authenticateJwt } from "../../../passport";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    authentication: async (_, args) => {
      const { email, pw } = args;
      try {
        const loggingUser = await prisma.user({
          email
        });
        if (loggingUser !== null) {
          // if (!loggingUser.authCheck) {
          //   throw "Sign up is not completed.";
          // }
          // Decryption
          if (bcrypt.compare(pw, loggingUser.pw)) {
            return generateToken(loggingUser.id);
          }
          throw "비밀번호가 일치하지 않습니다.";
        }
        throw "존재하지 않는 아이디입니다.";
      } catch (error) {
        console.log(`1` + error);
        return error;
      }
    }
  }
};
