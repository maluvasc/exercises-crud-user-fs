const path = require("path");
const fs = require("fs");
const returnList = path.join(__dirname, "..", "data", "users.json");

function isKey(obj, key) {
  return Object.keys(obj).includes(key);
}

function loadUsersRepository() {
  const users = fs.readFileSync(returnList, "utf-8");
  return JSON.parse(users);
}

async function createUserRepository(user) {
  if (!user) {
    return Promise.reject(new Error("User is required"));
  }
  const users = loadUsersRepository();
  users.push(user);
  fs.writeFileSync(returnList, JSON.stringify(users));
}

async function updateUserRepository(id, data) {
  if (!id) {
    return Promise.reject(new Error("User Id is required"));
  }

  const users = loadUsersRepository();

  users.map((user) => {
    if (user.id === id) {
      Object.keys(user).map((key) => {
        if (isKey(data, key)) {
          user[key] = data[key];
        }
      });
    }
  });
  fs.writeFileSync(returnList, JSON.stringify(users));
  return true;
}

async function deleteUserRepository(id) {
  if (!id) {
    return Promise.reject(new Error("User Id is required"));
  }

  const users = loadUsersRepository();
  const user = users.find((user) => user.id === id);

  users.splice(users.indexOf(user), 1);
  fs.writeFileSync(returnList, JSON.stringify(users));
  return true;
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};