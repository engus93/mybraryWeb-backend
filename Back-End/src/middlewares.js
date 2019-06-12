// 로그인 한 계정인지 확인
export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
