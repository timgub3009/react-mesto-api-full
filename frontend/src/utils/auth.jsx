export const BASE_URL = "https://auth.nomoreparties.co";

function sendRequest(url, method, body, token) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export function register(email, password) {
  return sendRequest("/signup", "POST", { email, password });
}

export function authorize(email, password) {
  return sendRequest("/signin", "POST", { email, password });
}

export function getContent(token) {
  return sendRequest("/users/me", "GET", undefined, token);
}
