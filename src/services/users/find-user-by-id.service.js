const {loadUsersRepository} = require("../../repositories/user-repository");

async function findUserById(id) {
  const users = loadUsersRepository();

  const idCheck = users.find((user) => {
    if (user.id === id) {
      return user;
    }
  });
  if (!idCheck) {
    return null;
  }
  return idCheck;
}
module.exports = { findUserById };
