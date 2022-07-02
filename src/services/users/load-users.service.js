const {loadUsersRepository} = require("../../repositories/user-repository");

function loadAllUsers() {
  const users = loadUsersRepository();

  const addStatus = users.map(() => {
    users.push(users.status = true);
    return users;
  });
  return addStatus;
}

module.exports = { loadAllUsers };
