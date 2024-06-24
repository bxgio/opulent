// pages/api/sendWelcomeEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      // Create a transporter object
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USERNAME, // your email user
          pass: process.env.MAIL_PASSWORD, // your email password
        },
      });

      // Email content
      const mailOptions = {
        from: `"NRG Phoenix Technology, India " <${process.env.MAIL_FROM_ADDRESS}>`,
        to: email,
        subject: 'Welcome to NRG Phoenix Technology!',
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
          <p>Best regards,</p>
          <p>NRG Phoenix Technology</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
