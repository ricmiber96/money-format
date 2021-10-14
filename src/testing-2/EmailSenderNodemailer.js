import { nodemailer } from "./email.js"

export class EmailSenderNodemailer {
  async send(to, content) {
    console.log("Enviando correo de verdad!!!")
    await nodemailer.send(to, content)
  }
}
