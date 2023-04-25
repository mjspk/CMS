import { Contact } from "@/models/Contact";
import { EmailMessage } from "@/models/EmailMessage";
import { ContactService } from "@/services/ContactService";
import Swal from 'sweetalert2'


// the ContactHelper class is responsible for all operations involving the Contact entity
export class ContactHelper {
    // singleton pattern
    private static instance: ContactHelper;

    static getInstance(): ContactHelper {
        if (!ContactHelper.instance) {
            ContactHelper.instance = new ContactHelper();
        }
        return ContactHelper.instance;
    }

    contactService: ContactService = ContactService.getInstance();


    async getAllContacts(limit: number, offset: number): Promise<Contact[]> {
        return await this.contactService.getAllContacts(limit, offset);
    }

    async searchContacts(searchTerm: string, limit: number, offset: number): Promise<Contact[]> {
        return await this.contactService.searchContacts(searchTerm, limit, offset);
    }

    async getContactById(id: number): Promise<Contact> {
        return await this.contactService.getContactById(id);
    }

    async addContact(): Promise<void> {
        await Swal.fire({
            title: 'Add Contact',
            html: '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Email">' +
                '<input id="swal-input3" class="swal2-input" placeholder="Phone">',
            focusConfirm: false,
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Add',
            preConfirm: () => {
                return [
                    (document.getElementById('swal-input1') as HTMLInputElement).value,
                    (document.getElementById('swal-input2') as HTMLInputElement).value,
                    (document.getElementById('swal-input3') as HTMLInputElement).value
                ]
            }
        }).then(async (result) => {
            if (result.value) {
                const contact: Contact = {
                    id: 0,
                    name: result.value[0],
                    email: result.value[1],
                    phone: result.value[2]
                };
                await this.contactService.createContact(contact);
            }
        });
    }


    async editContact(contact: Contact): Promise<boolean> {
        await Swal.fire({
            title: 'Edit Contact',
            html: '<input id="swal-input1" class="swal2-input" placeholder="Name" value="' + contact.name + '">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Email" value="' + contact.email + '">' +
                '<input id="swal-input3" class="swal2-input" placeholder="Phone" value="' + contact.phone + '">',
            focusConfirm: false,
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Update',
            preConfirm: () => {
                return [
                    (document.getElementById('swal-input1') as HTMLInputElement).value,
                    (document.getElementById('swal-input2') as HTMLInputElement).value,
                    (document.getElementById('swal-input3') as HTMLInputElement).value
                ]
            }
        }).then(async (result) => {
            if (result.value) {
                const newContact: Contact = {
                    id: contact.id,
                    name: result.value[0],
                    email: result.value[1],
                    phone: result.value[2]
                };
                await this.contactService.updateContact(newContact);
                return true;
            }
        });
        return false;
    }

    async deleteContact(contact: Contact): Promise<boolean> {
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await this.contactService.deleteContact(contact.id);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                return true;
            }
        });
        return false;
    }

    // compose an email
    async composeEmail(contact: Contact): Promise<void> {
        await Swal.fire({
            title: 'Compose Email',
            html: '<input id="swal-input1" class="swal2-input" placeholder="Subject">' +
                '<textarea id="swal-input2" class="swal2-textarea" placeholder="Message"></textarea>',
            focusConfirm: false,
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonText: 'Send',
            preConfirm: () => {
                return [
                    (document.getElementById('swal-input1') as HTMLInputElement).value,
                    (document.getElementById('swal-input2') as HTMLInputElement).value
                ]
            }
        }).then(async (result) => {
            if (result.value) {
                const emailMessage: EmailMessage = {
                    id: 0,
                    from_email: process.env.VUE_APP_EMAIL,
                    to_email: contact.email,
                    subject: result.value[0],
                    message: result.value[1]
                };
                const isSent = await this.contactService.sendEmail(emailMessage);

                if (isSent) {
                    Swal.fire(
                        'Sent!',
                        'Your email has been sent.',
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Error!',
                        'Your email has not been sent.',
                        'error'
                    )
                }


            }
        });
    }


}