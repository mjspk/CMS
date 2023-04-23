import express from "express";
import { ContactController } from '../controllers/ContactController';

const contactRouter = express.Router();
const contactController = new ContactController();

contactRouter.get("/contacts", contactController.getAllContacts);
contactRouter.get("/contacts/search", contactController.searchContacts);
contactRouter.get("/contact", contactController.getContactById);
contactRouter.post("/contact", contactController.createContact);
contactRouter.put("/contact", contactController.updateContact);
contactRouter.delete("/contact", contactController.deleteContact);

export default contactRouter;
