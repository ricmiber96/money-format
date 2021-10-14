export class UserService {
  constructor(userRepository, emailSender) {
    this.userRepository = userRepository
    this.emailSender = emailSender
  }

  async getUserMoney(userId) {
    const user = await this.userRepository.findUserById(userId)

    if (!user) {
      throw new Error(`the user with id ${userId} could not be found`)
    }

    const money = user.money

    return money
  }

  async updateUserMoney(userId, newMoney) {
    const user = await this.userRepository.findUserById(userId)

    user.money = newMoney

    await this.userRepository.save(user)

    await this.emailSender.send("pepito@gmail.com", "se ha actualizado el")
  }
}
