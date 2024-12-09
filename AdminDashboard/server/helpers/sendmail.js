import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for port 465, false for other ports
  
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendmail(to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.USER_MAIL, // sender address
    to,
    subject,
    text,
    html
  });

  console.log("Message sent: %s", info.messageId);
  return info.messageId;
}
export default sendmail;
