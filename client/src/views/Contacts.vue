<template>
  <div class="container mt-4">
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
                  <button class="btn btn-primary" @click.stop="editContact(contact)"><i class="bi bi-pencil"></i></button>
                  <button class="btn btn-danger" @click.stop="deleteContact(contact)"> <i
                      class="bi bi-trash"></i></button>
                  <button class="btn btn-primary" @click.stop="composeEmail(contact)"><i class="bi bi-envelope"></i></button>
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
import { Contact } from '@/models/Contact';
import { ContactHelper } from '@/helpers/ContactHelper';

export default class Contacts extends Vue {

  private contactHelper: ContactHelper = ContactHelper.getInstance();
  public contactsList: Contact[] = [];
  public searchTxt!: string;
  public isLoading!: boolean;
  mounted(): void {
    this.getContacts();
    this.searchTxt = '';
    this.isLoading = false;
  }

  async getContacts(): Promise<void> {
    this.isLoading = true;
    const response = await this.contactHelper.getAllContacts(12, 0);
    this.contactsList = response;
    this.isLoading = false;
  }

  async searchContact(): Promise<void> {
    if (this.searchTxt.length === 0) {
      this.getContacts();
      return;
    }
    this.isLoading = true;
    const response = await this.contactHelper.searchContacts(this.searchTxt, 12, 0);
    this.contactsList = response;
    this.isLoading = false;


  }

  async addContact(): Promise<void> {
    await this.contactHelper.addContact();
    this.getContacts();

  }

  async editContact(contact: Contact): Promise<void> {
    await this.contactHelper.editContact(contact);
    this.getContacts();

  }

  async deleteContact(contact: Contact): Promise<void> {
    await this.contactHelper.deleteContact(contact);
    this.getContacts();
  }

  async composeEmail(contact: Contact): Promise<void> {
    await this.contactHelper.composeEmail(contact);
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
  margin-bottom: 20px;
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
