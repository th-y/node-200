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

// Update 쿼리문 사용, 한 필드 수정(genre 변경)
connection.query(' update books set genre = \'action\' where number = 2 and name = \'Mygiant Nerd Boyfriend\'; '
  , (error, results, fields) => {
    if(error) throw error;
    console.log(results);
});

// Update 쿼리문 사용, 여러 필드 수정 (genre, writer 변경)
connection.query(' update books set genre = \'romance\', writer = \'JI\' where number = 2 ' +
    'and name = \'Mygiant Nerd Boyfriend\'; ', (error, results, fields) => {
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