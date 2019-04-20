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

// Select 쿼리문 (* 사용)
connection.query(' select * from books ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (각각의 필드 명칭) 사용
connection.query(' select number, genre, name, writer, releasedate from books ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (where문 사용)
connection.query(' select * from books where genre = \'action\' ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (where문 사용 - or)
connection.query(' select * from books where genre = \'action\' or genre = \'comedy\' ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (like 사용)
connection.query(' select * from books where releasedate LIKE \'2017%\' ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (order by)
connection.query(' select number, genre, name, writer, releasedate from books order by releasedate; ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Select 쿼리문 (order by desc)
connection.query(' select number, genre, name, writer, releasedate from books order by releasedate desc; ', (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();