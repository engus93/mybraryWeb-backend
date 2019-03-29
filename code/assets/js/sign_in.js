function sign_in_check() {
  let user_id = document.getElementById("user_id").value;
  let user_pw = document.getElementById("user_pw").value;

  fetch("/sign_in_process", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `user_id=${user_id}&user_pw=${user_pw}`
  })
    .then(response => response.json())
    .then(json => {
      if (json.result == true) {
        alert("로그인 성공");
      } else {
        alert("로그인 실패");
      }
    })
    .catch(err => console.log(err));
}
