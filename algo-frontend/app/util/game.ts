const USER_API_ENDPOINT = "http://localhost:8000/api/users/";

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
