require('dotenv').config()
const nodemailer = require(`nodemailer`);
const { google } = require(`googleapis`);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
})

const sendMail = async (senderName, senderEmail, message) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'elijaharomer@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'PORTFOLIO CONTACT FORM <elijaharomer@gmail.com>',
      to: 'elijaharomer@gmail.com',
      subject: `${senderName} has reached out via your Portfolio Contact Form.`,
      text: `An individual has reached out via the contact form on your portfolio. Details as follows:
        name: ${senderName}
        email: ${senderEmail}
        message: ${message}

        They are awaiting your reply at the contact email above.
      `,
      html: `<h2>An individual has reached out via the contact form on your portfolio. Details as follows:</h2>
      <ul>
        <li>Name: ${senderName}</li>
        <li>Email: ${senderEmail}</li>
        <li>Message: ${message}</li>
      </ul>

      <p>They are awaiting your reply at the contact email above.<p>
    `
    };

    const result = await transport.sendMail(mailOptions)

    return result;

  } catch (err) {
    return err;
  }
};

module.exports = sendMail;