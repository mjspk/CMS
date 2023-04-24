import { EmailMessage } from "../entities/EmailMessage";
import { EmailMessageRepository } from "../dao/repos/EmailMessageRepository";
import nodemailer from 'nodemailer';
import serverConfig from "../config/ServerConfig";

// EmailService is a singleton class that contains the sendEmail method
export class EmailService {

    private static instance: EmailService;
    static getInstance(): EmailService {
        if (!EmailService.instance) {
            EmailService.instance = new EmailService();
        }
        return EmailService.instance;
    }


    async sendEmail(email: EmailMessage): Promise<boolean> {
        try {
            // Create a transporter object using Nodemailer
            let transporter = nodemailer.createTransport({
                host: serverConfig.EMAIL_HOST,
                port: serverConfig.EMAIL_PORT,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: serverConfig.EMAIL_USER, // your gmail account
                    pass: serverConfig.EMAIL_PASSWORD, // your gmail password
                },
            });

            let mailOptions = {
                from: email.from_email,
                to: email.to_email,
                subject: email.subject,
                text: email.message,
            };

            // Send the email using the transporter object
            let info = await transporter.sendMail(mailOptions);

            // Save the email to the database
            const emailMessageRepository = new EmailMessageRepository();
            await emailMessageRepository.createEmailMessage(email);
            console.log('Message sent: %s', info.messageId);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
