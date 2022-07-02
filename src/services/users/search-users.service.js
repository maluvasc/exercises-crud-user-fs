const {loadUsersRepository} = require("../../repositories/user-repository");

async function searchUsers(name) {
  const users = loadUsersRepository();

  const findUser = users.filter((user) => {
    if (user.name === name) {
      return user;
    }
  });
  if (!findUser) {
    return users;
  }
  return findUser;
}
  
module.exports = { searchUsers };
