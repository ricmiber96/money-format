import { EmailSenderNodemailer } from "./EmailSenderNodemailer"
import { UserRepositoryMySql } from "./UserRepositoryMySql"
import { UserService } from "./UserService"

const USER_THAT_EXISTS_ID = 3

class UserRepositoryMySqlFake extends UserRepositoryMySql {
  constructor() {
    super()
    this.user = { name: "Paco", money: 10 }
  }

  async findUserById(userId) {
    if (userId === USER_THAT_EXISTS_ID) {
      return this.user
    }
    return null
  }

  async save(user) {
    this.user = user
  }
}

class EmailSenderNodemailerFake extends EmailSenderNodemailer {
  async send() {}
}

describe("UserService", () => {
  it("returns the money if the user exists", async () => {
    const userService = new UserService(
      new UserRepositoryMySqlFake(),
      new EmailSenderNodemailerFake(),
    )

    const money = await userService.getUserMoney(USER_THAT_EXISTS_ID)

    expect(money).toEqual(10)
  })

  it("thows an error if the user does not exists", async () => {
    const userService = new UserService(
      new UserRepositoryMySqlFake(),
      new EmailSenderNodemailerFake(),
    )

    const promiseError = userService.getUserMoney(10)

    await expect(promiseError).rejects.toEqual(
      new Error("the user with id 10 could not be found"),
    )
  })

  it("updates the money of a user", async () => {
    const userService = new UserService(
      new UserRepositoryMySqlFake(),
      new EmailSenderNodemailerFake(),
    )

    await userService.updateUserMoney(USER_THAT_EXISTS_ID, 20)

    const money = await userService.getUserMoney(USER_THAT_EXISTS_ID)
    expect(money).toEqual(20)
  })

  it("sends an email when the money is updated", async () => {
    const emailSender = new EmailSenderNodemailerFake()
    jest.spyOn(emailSender, "send")
    const userService = new UserService(
      new UserRepositoryMySqlFake(),
      emailSender,
    )

    await userService.updateUserMoney(USER_THAT_EXISTS_ID, 20)

    // tenemos que saber que se ha llamado al emailSender
    expect(emailSender.send).toHaveBeenCalled()
  })
})
