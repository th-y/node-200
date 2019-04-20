require('dotenv').config({ path: `${__dirname}/.env` });

// mysql 모듈 사용
const mysql = require('mysql');

const { MYSQL_HOST: host,
        MYSQL_USER: user,
        MYSQL_PASSWORD: password,
        MYSQL_DATABASE: database,
        MYSQL_PORT: port
    } = process.env;

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port,
});

// 데이터베이스 연결
connection.connect();

// Delete 쿼리문 사용
connection.query(' delete from books where number = 2 and writer = \'JI\'; ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 사용
connection.query(' SELECT * from books ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();