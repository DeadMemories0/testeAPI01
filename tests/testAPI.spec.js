const { test, expect } = require('@playwright/test');

test('Cadastre um novo usuário', async ({ request }) => {
  const registerUser = await request.post(`/api/users`, {
    data: {
      "name": "jean",
      "job": "qa"
    }
  });
  expect(registerUser.ok()).toBeTruthy();
  expect(registerUser.status()).toEqual(201);
  console.log(registerUser.status());
});

test('Busque pelo ID do usuário cadastrado', async ({ request }) => {
  const searchUser = await request.get(`/api/users/2`, {
  });
  expect(searchUser.ok()).toBeTruthy();
  expect(searchUser.status()).toEqual(200);
  console.log(searchUser.status());
  // const user = (JSON.stringify(searchUser));
  // console.log(JSON.parse(user));
});

test('Atualize os dados do usuário', async ({ request }) => {
  const updateUser = await request.put(`/api/users/2`, {
    data: {
      "name": "jean",
      "job": "qa"
    }
  });
  expect(updateUser.ok()).toBeTruthy();
  expect(updateUser.status()).toEqual(200);
  console.log(updateUser.status());
});

test('Delete o usuário', async ({ request }) => {
  const deleteUser = await request.delete(`/api/users/2`, {
  });
  expect(deleteUser.ok()).toBeTruthy();
  expect(deleteUser.status()).toEqual(204);
  console.log(deleteUser.status());
});

test('Busque pelo ID do usuário que foi deletado', async ({ request }) => {
  const deletedsearchUser = await request.get(`/api/users/2`, {
  });
  expect(deletedsearchUser.ok()).toBeTruthy();
  expect(deletedsearchUser.status()).toEqual(200);
  console.log(deletedsearchUser.status());
  // const user = (JSON.stringify(deletedsearchUser));
  // console.log(JSON.parse(user));
});