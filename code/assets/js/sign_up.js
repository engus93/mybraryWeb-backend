function validate() {
    
    // 아이디가 적합한지 검사할 정규식
    const re = /^[a-zA-Z0-9]{6,12}$/
    
    // 비밀번호가 적합한지 검사할 정규식
    const re2 = /^[a-zA-Z0-9]{8,16}$/ 
    
    // 이메일이 적합한지 검사할 정규식
    const re3 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (signUp_form.user_id == "") {
        alert("아이디를 입력해 주세요.");
        signUp_form.user_id.focus();
        return false;
    }

    if (!check(re, signUp_form.user_id, "아이디를 입력 해주세요.")) {
        return false;
    }

    if (signUp_form.user_pw == "") {
        alert("비밀번호를 입력해 주세요.");
        signUp_form.user_pw.focus();
        return false;
    }

    if (!check(re2, signUp_form.user_pw, "비밀번호를 입력 해주세요.")) {
        return false;
    }

    if (signUp_form.user_re_pw == "") {
        alert("비밀번호를 입력해 주세요.");
        signUp_form.user_re_pw.focus();
        return false;
    }

    if (signUp_form.user_pw.value != signUp_form.user_re_pw.value) {
        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        signUp_form.user_re_pw.value = "";
        signUp_form.user_re_pw.focus();
        return false;
    }

    if (signUp_form.user_name.value == "") {
        alert("이름을 입력해 주세요");
        signUp_form.user_name.focus();
        return false;
    }

    if (signUp_form.user_email.value == "") {
        alert("이메일을 입력해 주세요");
        signUp_form.user_email.focus();
        return false;
    }

    if (!check(re3, signUp_form.user_email, "적합하지 않은 이메일 형식입니다.")) {
        return false;
    }

    function check(re, what, message) {
        if (re.test(what.value)) {
            return true;
        }
        alert(message);
        what.focus();
        //return false;
    }
}