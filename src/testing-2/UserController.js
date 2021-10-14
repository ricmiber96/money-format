import { EmailSenderNodemailer } from "./EmailSenderNodemailer.js"
import { UserRepositoryMySql } from "./UserRepositoryMySql.js"
import { UserService } from "./UserService.js"

export class UserController {
  constructor() {
    this.userService = new UserService(
      new UserRepositoryMySql(),
      new EmailSenderNodemailer(),
    )
  }

  async getUserMoney() {
    const userId = parseInt(process.argv[2])

    try {
      const money = await this.userService.getUserMoney(userId)

      console.log(`the user with id ${userId} has ${money}€`)
    } catch (error) {
      console.error(error.message)
    }
  }
}
