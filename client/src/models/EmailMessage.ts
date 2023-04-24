export interface EmailMessage {
    id: number;
    from_email: string;
    to_email: string;
    subject: string;
    message: string;
}