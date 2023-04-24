import { Request, Response } from "express";
import { ContactRepository } from "../dao/repos/ContactRepository";

// ContactController contains all the methods for handling requests to the /contacts and /contact endpoints
export class ContactController {
    async getAllContacts(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const offset = req.query.offset ? Number(req.query.offset) : 0;
            const contacts = await contactRepository.getAllContacts(limit, offset);
            res.send(contacts);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }

    }

    async searchContacts(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const offset = req.query.offset ? Number(req.query.offset) : 0;
            const searchTerm = req.query.searchTerm ? String(req.query.searchTerm) : "";
            const contacts = await contactRepository.searchContacts(searchTerm, limit, offset);
            res.send(contacts);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }
    }

    async getContactById(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const contact = await contactRepository.getContactById(Number(req.query.id));
            res.send(contact);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }
    }

    async createContact(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const contact = await contactRepository.createContact(req.body);
            res.send(contact);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }
    }

    async updateContact(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const contact = await contactRepository.updateContact(req.body);
            res.send(contact);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }
    }


    async deleteContact(req: Request, res: Response) {
        try {
            const contactRepository = new ContactRepository();
            const contact = await contactRepository.deleteContact(Number(req.query.id));
            res.send(contact);
        }
        catch (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while fetching contacts.' });
        }
    }

}
