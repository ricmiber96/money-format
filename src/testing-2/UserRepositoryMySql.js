import { databaseMySQL } from "./database.js"

export class UserRepositoryMySql {
  async findUserById(userId) {
    return await databaseMySQL.findUserById(userId)
  }

  async save(user) {
    await databaseMySQL.save(user)
  }
}
