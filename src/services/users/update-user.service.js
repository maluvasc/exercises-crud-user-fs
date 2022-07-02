const {loadUsersRepository,updateUserRepository} = require("../../repositories/user-repository");

async function updateUser(id, { name, email, phone }) {
  if (!id) {
    throw new Error("User ID is required");
  }

  const users = loadUsersRepository();

  const idCheck = users.map((user) => {
    if (user.id === id) {
      return true;
    }
    return false;
  });

  if (!idCheck.includes(true)) {
    throw new Error("User not exists");
  }

  updateUserRepository(name, email, phone);
  return true;
}

module.exports = { updateUser };
