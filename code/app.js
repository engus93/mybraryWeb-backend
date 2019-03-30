// require
const express = require('express')
const mysql = require('mysql');
const db = require('./assets/js/db.js');
const crypto = require('crypto');

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));


// 메인 페이지
app.get("/", (req, res) =>  {
    res.sendFile(__dirname + "/index.html")
})

// 회원가입 페이지
app.get('/sign_up', (req, res) => {
    res.sendFile(__dirname + '/sign/sign_up.html')
})

// 회원가입 처리
app.post('/sign_up_process', (req, res) => {

    // let post_user_id = req.body.user_id;
    // let post_user_pw = req.body.user_pw;
    // let post_user_name = req.body.user_name;
    // let post_user_email = req.body.user_email;
    // let post_user_sex = req.body.user_sex;

    // db.query(`insert into user_info(id, pw, name, mail, sex) 
    // values('${post_user_id}', '${post_user_pw}', '${post_user_name}', '${post_user_email}', '${post_user_sex}');`, function (error, results, fields) {
    //     if (error) {
    //         console.log(error);
    //         res.send({to_sign_up: false});
    //     }else{
    //         res.send({to_sign_up: true});
    //     }
    // });

})

// 로그인 페이지
app.get('/sign_in', (req, res) => {
    res.sendFile(__dirname + '/sign/sign_in.html')
})

// 로그인 처리
app.post('/sign_in_process', (req, res) => {

    console.log(req.body.user_pw);

    crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(req.body.user_pw, buf.toString('base64'), 162602, 64, 'sha512', (err, key) => {
            console.log(key.toString('base64'));
        });
    });

    crypto.pbkdf2('입력비밀번호', '기존salt', 100000, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64') === '기존 비밀번호');
    });

    // let post_user_id = req.body.user_id;
    // let post_user_pw = req.body.user_pw;

    // db.query(`select idx,id,pw from user_info where id = '${post_user_id}';`, function (error, results, fields) {
    //     if (error) {
    //         console.log(error);
    //     } else if(results == ""){
    //         res.send({to_sign_in: "user_id"})
    //         // 아이디가 존재하지 않습니다.
    //     } else if (post_user_pw != results[0].pw){
    //         res.send({to_sign_in: "user_pw"})
    //         // 비밀번호가 일치하지 않습니다.
    //     } else if (post_user_pw == results[0].pw){
    //         res.send({to_sign_in: "sign_in"})
    //         // 로그인 성공
    //     }
    // });

})
 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})