const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 25,
    auth: {
      user: "ff16806c5d122e",
      pass: "7c733e00786fc2"
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: "alibagheri <bagheri.danalab@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;