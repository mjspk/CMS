import { AppDataSource } from "../DataSource";
import { EmailMessage } from "../../entities/EmailMessage";
import { Like } from "typeorm";

// the ContactRepository class is responsible for all database operations involving the Contact entity
export class EmailMessageRepository {

    async getAllEmailMessages( limit: number, offset: number) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const emailMessages = await emailMessageRepository.find({
            take: limit,
            skip: offset,
        });
        return emailMessages;
    }

    async searchEmailMessages(searchTerm: string , limit: number, offset: number) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const emailMessages = await emailMessageRepository.find({
            take: limit,
            skip: offset,
            where: [
                { subject: Like(`%${searchTerm}%`) },
                { from_email: Like(`%${searchTerm}%`) },
                { to_email: Like(`%${searchTerm}%`) },
                { message: Like(`%${searchTerm}%`) },
            ]

        });
        return emailMessages;
    }

    async getEmailMessageById(id: number) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const emailMessage = await emailMessageRepository.findOneBy({ id: id });
        return emailMessage;
    }

    async createEmailMessage(emailMessage: EmailMessage) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const newEmailMessage = emailMessageRepository.create(emailMessage);
        const savedEmailMessage = await emailMessageRepository.save(newEmailMessage);
        return savedEmailMessage;
    }

    async updateEmailMessage(emailMessage: EmailMessage) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const emailMessageToUpdate = await emailMessageRepository.findOneBy({ id: emailMessage.id });
        if (!emailMessageToUpdate) {
            return null;
        }
        emailMessageRepository.merge(emailMessageToUpdate, emailMessage);
        const updatedEmailMessage = await emailMessageRepository.save(emailMessageToUpdate);
        return updatedEmailMessage;
    }

    async deleteEmailMessage(id: number) {
        const emailMessageRepository = AppDataSource.getRepository(EmailMessage);
        const emailMessage = await emailMessageRepository.findOneBy({ id: id });
        if (!emailMessage) {
            return null;
        }
        const deletedEmailMessage = await emailMessageRepository.remove(emailMessage);
        return deletedEmailMessage;
    }

   
}