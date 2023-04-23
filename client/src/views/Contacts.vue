<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">Contacts</h1>
        <div class="search-add-container">
          <div class="search-box">
            <input type="text" placeholder="Search Contacts" v-model="searchTxt" @keyup="searchContact" />
            <i class="bi bi-search"></i>
          </div>
          <button class="btn btn-success" @click="addContact"><i class="bi bi-plus"></i></button>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="contact in contactsList" :key="contact.id">
            <div class="card" @click="contactClicked(contact)">
              <div class="card-body">
                <h5 class="card-title">{{ contact.name }}</h5>
                <p class="card-text">{{ contact.email }}</p>
                <p class="card-text">{{ contact.phone }}</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-primary" @click="editContact(contact)"><i class="bi bi-pencil"></i></button>
                  <button class="btn btn-danger" @click="deleteContact(contact)"> <i class="bi bi-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12" v-if="contactsList.length === 0 && !isLoading">
            <h3 class="text-center">No contacts found, please add a contact.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { ContactService } from '@/services/cotactsService';
import { Contact } from '@/models/contact';
import Swal from 'sweetalert2'

export default class Contacts extends Vue {

  private contactService: ContactService = new ContactService();
  public contactsList: Contact[] = [];
  public searchTxt!: string;
  public isLoading!: boolean;
  mounted(): void {
    this.getContacts();
    this.searchTxt = '';
    this.isLoading = false;
  }

  getContacts(): void {
    this.isLoading = true;
    this.contactService.getAllContacts(12, 0).then((contactsListresponse: Contact[]) => {
      this.contactsList = contactsListresponse;
      this.isLoading = false;
    });
  }

  searchContact(): void {
    if (this.searchTxt.length === 0) {
      this.getContacts();
      return;
    }
    this.isLoading = true;
    this.contactService.searchContacts(this.searchTxt, 12, 0).then((contactsListresponse: Contact[]) => {
      this.contactsList = contactsListresponse;
      this.isLoading = false;
    });
  }

  addContact(): void {
    Swal.fire({
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
    }).then((result) => {
      if (result.value) {
        const contact: Contact = {
          id: 0,
          name: result.value[0],
          email: result.value[1],
          phone: result.value[2]
        };
        this.contactService.createContact(contact).then((response: any) => {
          this.getContacts();
        });
      }
    });

  }

  editContact(contact: Contact): void {
    Swal.fire({
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
    }).then((result) => {
      if (result.value) {
        const newContact: Contact = {
          id: contact.id,
          name: result.value[0],
          email: result.value[1],
          phone: result.value[2]
        };
        this.contactService.updateContact(newContact).then((response: any) => {
          this.getContacts();
        });
      }
    });
  }

  deleteContact(contact: Contact): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.deleteContact(contact.id).then((response: any) => {
          this.getContacts();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }


  contactClicked(contact: Contact): void {
    this.$router.push({ name: 'ContactDetails', params: { id: contact.id } });
  }


}
</script>

<style scoped>

.search-add-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.search-add-container .btn {
  margin-left: 10px;
}


.search-box {
  margin-top: 0px;

  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 6px 12px 6px 12px;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-box input[type=text] {
  border: 0;
  box-shadow: none;
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
  width: 100%;
}

.search-box input[type=text]:focus {
  outline: 0;
}

.search-box i {
  color: #ccc;
  font-size: 18px;
  padding-right: 5px;
  vertical-align: middle;
}

.search-box i:hover {
  color: #333;
}

.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, .2);
  cursor: pointer;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}
.card .card-img-left {
  width: 50%;
  height: 100%;
  font-size: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  border-radius: 5px 0 0 5px;
}


</style>
