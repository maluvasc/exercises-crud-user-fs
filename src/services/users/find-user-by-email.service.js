const {loadUsersRepository} = require("../../repositories/user-repository");

async function findUserByEmail(email) {
  const users = loadUsersRepository();

  const emailCheck = users.find((user) => {
    if (user.email === email) {
      return user;
    }
  });
  if (!emailCheck) {
    return false;
  }
  return emailCheck;
}

module.exports = { findUserByEmail };
