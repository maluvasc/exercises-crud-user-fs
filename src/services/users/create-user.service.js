const {loadUsersRepository,createUserRepository} = require("../../repositories/user-repository");
const {encryptPassword} = require("../../utils/encrypt-password");

async function createUser({ name, email, password, phone }) {
  if (!name || !email || !password) {
    throw new Error("Name, Email, Password are required");
  }

  const users = loadUsersRepository();
  const emailCheck = users.map((user) => {
    if (user.email === email) {
      return true;
    }
  });
  if (emailCheck.includes(true)) {
    throw new Error("User already exists");
  }

  const id = Date.now();
  const pass = encryptPassword(password);

  const newUser = {
    id: id,
    name: name,
    email: email,
    password: pass,
    phone: phone,
    status: true,
  };
  createUserRepository(newUser);
  return newUser;
}

module.exports = { createUser };
