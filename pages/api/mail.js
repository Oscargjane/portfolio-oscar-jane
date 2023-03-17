const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function Handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    You've got a new mail from ${body.fullName}, their email is: ✉️${body.emailAddress}\r\n
    Message: ${body.message}
  `;

  await sgMail.send({
    to: 'hello@oscar-jane.com',
    from: 'hello@oscar-jane.com',
    subject: `[Personal website]: ${body.subjectMessage}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}
