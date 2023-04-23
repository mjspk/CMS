

import axios from 'axios';
import { Contact } from '../models/contact';

export class ContactService {

    async getAllContacts(limit: number, offset: number): Promise<Contact[]> {

        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contacts?limit=${limit}&offset=${offset}`);
        return response.data;
    }

    // search contacts
    async searchContacts(searchTerm: string, limit: number, offset: number): Promise<Contact[]> {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contacts/search?searchTerm=${searchTerm}&limit=${limit}&offset=${offset}`);
        return response.data;
    }

    // get contact by id
    async getContactById(id: number): Promise<Contact> {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/contact?id=${id}`);
        return response.data;
    }

    // create contact
    async createContact(contact: Contact): Promise<Contact> {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/contact`, contact);
        return response.data;
    }

    // update contact
    async updateContact(contact: Contact): Promise<Contact> {
        const response = await axios.put(`${process.env.VUE_APP_API_URL}/contact`, contact);
        return response.data;
    }

    // delete contact
    async deleteContact(id: number): Promise<Contact> {
        const response = await axios.delete(`${process.env.VUE_APP_API_URL}/contact?id=${id}`);
        return response.data;
    }
}