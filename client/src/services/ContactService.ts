import axios from 'axios';
import { Contact } from '../models/Contact';
import { EmailMessage } from '../models/EmailMessage';
export class ContactService {

    private static instance: ContactService;

    static getInstance(): ContactService {
        if (!ContactService.instance) {
            ContactService.instance = new ContactService();
        }
        return ContactService.instance;
    }


    async getAllContacts(limit: number, offset: number): Promise<Contact[]> {

        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contacts?limit=${limit}&offset=${offset}`);
        return response.data;
    }

    async searchContacts(searchTerm: string, limit: number, offset: number): Promise<Contact[]> {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contacts/search?searchTerm=${searchTerm}&limit=${limit}&offset=${offset}`);
        return response.data;
    }

    async getContactById(id: number): Promise<Contact> {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contact?id=${id}`);
        return response.data;
    }

    async createContact(contact: Contact): Promise<Contact> {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/contact`, contact);
        return response.data;
    }

    async updateContact(contact: Contact): Promise<Contact> {
        const response = await axios.put(`${process.env.VUE_APP_API_URL}/contact`, contact);
        return response.data;
    }

    async deleteContact(id: number): Promise<Contact> {
        const response = await axios.delete(`${process.env.VUE_APP_API_URL}/contact?id=${id}`);
        return response.data;
    }

    async sendEmail(emailMessage: EmailMessage): Promise<boolean> {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/contact/email`, emailMessage);
        return response.data;
    }

}