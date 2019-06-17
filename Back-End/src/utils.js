// Import modules
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

// 가입 인증 Email 보내기

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = userInfo => {
  const msg = {
    to: userInfo.email,
    from: "mybrary_company@gmail.com",
    subject: `Hi ${userInfo.username}, Welcome MyBrary`,
    html: `
    <div
    style="background: url(https://png.pngtree.com/thumb_back/fw800/back_pic/04/02/60/075804ca16db769.jpg) no-repeat center center;
          background-size: cover;
          height: 100vh;"
  >
    <div
      style="display: flex; align-items: center; justify-content: center; height: 100%;"
    >
      <div style="text-align: center">
        <h1 style="color: white; font-size: 40px">Welcome</h1>
        <h3 style="color: white;">
          ${
            userInfo.username
          }님 반갑습니다.<br />아래 인증 버튼을 누르시면 회원가입이 완료되며<br />
          저희 사이트로 이동하게 됩니다. :)
        </h3>
        <form action="http://www.naver.com" method="post">
          <input type="hidden" value="${userInfo.id}" />
          <input
            type="submit"
            style="font-size: 18px; padding: 0 10px; border-radius: 10px; border: none; background-color: white; cursor: pointer;"
            value="Confrim"
          />
        </form>
      </div>
    </div>
  </div>
  `
  };
  sgMail.send(msg);
};

// JWT 발급
export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);

// 오늘 날짜부터 내일까지 날짜 알아내기
export const getToday = () => {
  const getDate = new Date();
  // 연도 월 일 순서로 배열에 담기
  const toDay = [
    getDate.getFullYear(),
    getDate.getMonth() + 1,
    getDate.getDate()
  ];

  const tomorrow = [
    getDate.getFullYear(),
    getDate.getMonth() + 1,
    getDate.getDate() + 1
  ];

  return {
    startTime: new Date([...toDay]),
    endTime: new Date([...tomorrow])
  };
};
