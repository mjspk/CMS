import express from "express";
import { EmailMessageController } from '../controllers/EmailMessageController';
import e from "express";
// routes for /emailMessages and /emailMessage endpoints
const emailMessageRouter = express.Router();
const emailMessageController = new EmailMessageController();

// routes for /contact/email endpoint
emailMessageRouter.post("/contact/email", emailMessageController.createEmailMessage);

export default emailMessageRouter;
