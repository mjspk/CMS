import { Request, Response } from "express";
import { EmailMessageRepository } from "../dao/repos/EmailMessageRepository";
import { EmailService } from "../services/EmailService";

// EmailMessageController contains all the methods for handling requests to the /emailMessages and /emailMessage endpoints
export class EmailMessageController {
    async getAllEmailMessages(req: Request, res: Response) {
        try {
            const emailMessageRepository = new EmailMessageRepository();
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const offset = req.query.offset ? Number(req.query.offset) : 0;
            const emailMessages = await emailMessageRepository.getAllEmailMessages(limit, offset);
            res.send(emailMessages);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching emailMessages.' });
        }

    }

    async searchEmailMessages(req: Request, res: Response) {
        try {
            const emailMessageRepository = new EmailMessageRepository();
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const offset = req.query.offset ? Number(req.query.offset) : 0;
            const searchTerm = req.query.searchTerm ? String(req.query.searchTerm) : "";
            const emailMessages = await emailMessageRepository.searchEmailMessages(searchTerm, limit, offset);
            res.send(emailMessages);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching emailMessages.' });
        }
    }

    async getEmailMessageById(req: Request, res: Response) {
        try {
            const emailMessageRepository = new EmailMessageRepository();
            const emailMessage = await emailMessageRepository.getEmailMessageById(Number(req.query.id));
            res.send(emailMessage);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching emailMessages.' });
        }
    }

    // method to send email message
    async createEmailMessage(req: Request, res: Response) {
        try {
            const isSent = await EmailService.getInstance().sendEmail(req.body);
            res.send(isSent);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching emailMessages.' });
        }
    }


    async deleteEmailMessage(req: Request, res: Response) {
        try {
            const emailMessageRepository = new EmailMessageRepository();
            const emailMessage = await emailMessageRepository.deleteEmailMessage(Number(req.query.id));
            res.send(emailMessage);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching emailMessages.' });
        }
    }

}


