const crypto = require('crypto');

function encryptPassword(password) {
  if (!password) {
    throw new Error("Password is required");
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const salt = "this is a sentence designed to be mixed with the password for the purpose of extra protection of sensitive data that is very nice dont you think";
  const iterations = 1000;
  const keylen = 64;
  const digest = "sha512";

  const buffer = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);

  const hash = buffer.toString(`hex`);

  return hash;
}
module.exports = { encryptPassword };
