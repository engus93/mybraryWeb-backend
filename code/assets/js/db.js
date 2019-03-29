// mysql 계정
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'mydb.culskowdevtz.ap-northeast-2.rds.amazonaws.com',
    user: 'duhyeon',
    password: 'Reg016260!!',
    database: 'mybraryWeb',
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
});

db.connect();

module.exports = db;