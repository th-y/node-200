require('dotenv').config({ path: `${__dirname}/.env` });

const nodemailer = require('nodemailer');

const { SERVICE: service,
        FROM_USER: fromUser, 
        FROM_PASSWORD: fromPassword,
        TO_USER: toUser
    } = process.env;

const transporter = nodemailer.createTransport({
    service: service,
    auth: {
        user: fromUser,
        pass: fromPassword,
    }
});

// setup email data with unicode symbols
const mailOptions = {
    from: fromUser, // sender address
    to: toUser, // list of receivers
    subject: 'Hello2 ✔', // Subject line
    text: 'Hello world?', // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Message sent: ${info.response}`);
    }
    transporter.close();
});