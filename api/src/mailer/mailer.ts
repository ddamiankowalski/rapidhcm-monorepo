import nodemailer from 'nodemailer';

async function mainMailer() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'rapidhcm.service@gmail.com',
        pass: 't4jn3h4slo'
    }
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'rapidhcm.service@gmail.com', 
    to: "rapidhcm.service@gmail.com",
    subject: "Welcome to RapidHCM", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
}

export { mainMailer };  