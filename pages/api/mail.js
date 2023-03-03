const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
        Name: ${body.fullName}rn
        Email: ${body.emailAddress}rn
        Subject: ${body.subject}rn
        Message: ${body.message}rn
    `;

  (async () => {
    try {
      await sgMail
        .send({
          to: 'hello@oscar-jane.com',
          from: 'hello@oscar-jane.com',
          subject: 'New Message!',
          text: message,
          html: message.replace(/rn/g, '<br>'),
        })
        .then(() => {
          res
            .status(200)
            .json({ status: 'Message has been sent successfully :)' });
        });
    } catch (error) {
      console.log(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
}
