// require
const express = require('express')
const mysql = require('mysql');
const db = require('./assets/js/db.js');

const app = express()

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));


// 서버 처리
app.get("/", (req, res) =>  
    res.sendFile(__dirname + "/index.html")
)

app.get('/sign_up', (req, res) => 
    res.sendFile(__dirname + '/sign/sign_up.html')
)

app.post('/sign_up_process', (req, res) => {

    // db.connect();

    // db.query(`insert into user_info(id, pw, name, mail, sex) 
    // values('${req.body.user_id}', '${req.body.user_pw}', '${req.body.user_name}', '${req.body.user_email}', '${req.body.sex}');`, function (error, results, fields) {
    //     if (error) {
    //         console.log(error);

    //         res.send(`<script type="text/javascript">
    //             alert("가입 실패");
    //             window.history.back();
    //         </script>`);
    //     }else{
    //         console.log(results);

    //         res.send(`<script type="text/javascript">
    //             alert("가입 완료");
    //             window.location="/";
    //         </script>`);
    //     }
    // });

    // db.end();

    res.sendFile(__dirname + "/index.html")

})

app.get('/sign_in', (req, res) => 
    res.sendFile(__dirname + '/sign/sign_in.html')
)
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))