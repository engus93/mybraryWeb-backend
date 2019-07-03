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
        let asdasd;
        // 로그인 확인
        if (loggingUser !== null) {
          const pwCheck = await bcrypt.compare(pw, loggingUser.pw);
          if (pwCheck) {
            return generateToken(loggingUser.id);
          } else {
            return "비밀번호가 일치하지 않습니다.";
          }
        } else {
          return "존재하지 않는 아이디입니다.";
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
};
