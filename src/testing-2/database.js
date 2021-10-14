const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const paco = {
  name: "Paco",
  money: 10,
}

export const databaseMySQL = {
  findUserById: async (userId) => {
    await sleep(5000)

    if (userId === 3) {
      return paco
    }

    return null
  },

  save: async (user) => {
    paco.name = user.name
    paco.money = user.money
  },
}
