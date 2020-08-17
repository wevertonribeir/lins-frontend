export const API_URL = 'http://localhost/lins/backend/public/api';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/me',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function CLIENTE_GET(id) {
  return {
    url: API_URL + '/cliente/' + id,
    options: {
      method: 'POST',
    },
  };
}
