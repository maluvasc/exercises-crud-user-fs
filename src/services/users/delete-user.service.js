const {loadUsersRepository,deleteUserRepository} = require("../../repositories/user-repository");

async function deleteUser(id) {
  const users = loadUsersRepository();

  if (!id) {
    throw new Error("User ID is required");
  }

  const idCheck = users.map((user) => {
    if (user.id === id) {
      return true;
    }
    return false;
  });

  if (!idCheck.includes(true)) {
    throw new Error("User not exists");
  }

  deleteUserRepository(id);
  return true;
}

module.exports = { deleteUser };
