// 로그인 아이디 비밀번호 체크

function sign_in_check() {

  fetch("/sign_in_process", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `user_id=${signIn_form.user_id}&user_pw=${signIn_form.user_pw}`
  })
    .then(response => response.json())
    .then(json => {
      if (json.to_sign_in === "user_id") {
        alert("아이디를 확인 해주세요.");
        signIn_form.user_id.focus();
      } else if (json.to_sign_in === "user_pw") {
        alert("비밀번호가 일치하지 않습니다.");
        signIn_form.user_pw.focus();
      } else if (json.to_sign_in === "sign_in") {
        window.location = "/";
      }
    })
    .catch(err => console.log(err));
}

