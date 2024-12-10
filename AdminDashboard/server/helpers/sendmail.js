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

async function sendmail(to, name, image) {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.USER_MAIL, // sender address
      to,
      subject: `Hi, ${name} Welcome to SPARK!`,
      text: "You have successfully registered as a user. Please login to continue.",
      html: `<h1 style="color: #2d89ef; text-align: center;">Welcome to SPARK, ${name}!</h1>
            <p style="font-size: 16px; line-height: 1.5; color: #444;">
            Congratulations on taking the first step toward revolutionizing your parking experience! Your account has been successfully registered with SPARK, the ultimate smart parking solution.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #444;">
            With SPARK, you can easily find and book parking slots, track your parking history, and manage your parking preferences. We're excited to have you on board!</p>
            <img src="${image}" alt="SPARK Logo" style="display: block; margin: 20px auto; width: 200px; height: auto;">
            <p style="text-align: center; font-size: 14px; color: #888; margin-top: 20px;">
            Together, we're sparking innovation, reducing carbon footprints, and making parking smarter and easier!</p>
            <br>
            <br>
            If this wasn't you, <a href="https://boulderbugle.com/07Ezyp7M" style="color: #ff4500; text-decoration: none; font-weight: bold;">click here to report</a>. We're here to keep your account safe and secure.</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (err) {
    console.error("Error sending email:", err.message);
    throw err; 
  }
}

export default sendmail;
