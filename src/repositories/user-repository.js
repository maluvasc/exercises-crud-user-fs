/*
  IMPORTANTE! A responsabilidade do Repository é apenas a gerencia dos dados
  Não deve conter regras de negócio!
*/

async function loadUsersRepository() {
  /*
  - TODO 1 : Deve retornar uma lista de usuários a partir do caminho src/data/users.json;
  - TODO 2 : Deve ser usado um método de leitura do FS como readFile nessa implementação;  
  */
}

/*
  - TODO 3: Deve retornar uma exceção de erro "User is required" caso não seja passado os dados
  - TODO 4: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;   
  - TODO 5: Deve retornar o usuário após salvar no banco de dados;
*/

async function createUserRepository(user) {
  /*
  - TODO 6: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 7: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 8: Deve retornar TRUE após salvar no banco de dados;
  */
}

async function updateUserRepository(id, data) {
  /*
  - TODO 9: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 10: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 11: Deve retornar TRUE após remover um dado no banco de dados;
*/
}

async function deleteUserRepository(id) {
  /*
  - TODO 12: Deve retornar uma exceção de erro "User Id is required" caso não seja passado o ID
  - TODO 13: Deve ser usado um método de escrita do FS como writeFile, writeFileSync, etc;  
  - TODO 14: Deve retornar TRUE após remover um dado no banco de dados;
*/
}

module.exports = {
  loadUsersRepository,
  createUserRepository,
  deleteUserRepository,
  updateUserRepository,
};
