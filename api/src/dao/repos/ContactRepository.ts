import { AppDataSource } from "../DataSource";
import { Contact } from "../../entities/Contact";
import { Like } from "typeorm";

// the ContactRepository class is responsible for all database operations involving the Contact entity
export class ContactRepository {

    async getAllContacts( limit: number, offset: number) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contacts = await contactRepository.find({
            take: limit,
            skip: offset,
        });
        return contacts;
    }

    async searchContacts(searchTerm: string , limit: number, offset: number) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contacts = await contactRepository.find({
            take: limit,
            skip: offset,
            where: [
                { name: Like(`%${searchTerm}%`) },
                { email: Like(`%${searchTerm}%`) },
                { phone: Like(`%${searchTerm}%`) },
            ]

        });
        return contacts;
    }

    async getContactById(id: number) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contact = await contactRepository.findOneBy({ id: id });
        return contact;
    }

    async createContact(contact: Contact) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const newContact = contactRepository.create(contact);
        const savedContact = await contactRepository.save(newContact);
        return savedContact;
    }

    async updateContact(contact: Contact) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contactToUpdate = await contactRepository.findOneBy({ id: contact.id });
        if (!contactToUpdate) {
            return null;
        }
        contactRepository.merge(contactToUpdate, contact);
        const updatedContact = await contactRepository.save(contactToUpdate);
        return updatedContact;
    }

    async deleteContact(id: number) {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contact = await contactRepository.findOneBy({ id: id });
        if (!contact) {
            return null;
        }
        await contactRepository.delete(contact);
        return contact;
    }

}
