const USER_API_ENDPOINT = "http://localhost:8000/api/users/";
const LOGIN_API_ENDPOINT = "http://localhost:8000/api/login/";
const SIGNUP_API_ENDPOINT = "http://localhost:8000/api/signup/";

export const fetchUserProfile = async (id: number) => {
  const response = await fetch(`${USER_API_ENDPOINT}${id}/`);
  const data = await response.json();
  return data;
};

export const createUser = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(USER_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  return data;
};

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await fetch(USER_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};

export const signup = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(USER_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  return data;
};
