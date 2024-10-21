const GAME_API_ENDPOINT = "http://localhost:8000/api/game/";
const SUBMIT_API_ENDPOINT = "http://localhost:8000/api/submit/";
const PROBLEM_API_ENDPOINT = "http://localhost:3001/problems";

export const fetchGameData = async (id: number) => {
  const response = await fetch(`${GAME_API_ENDPOINT}${id}/`);
  const data = await response.json();
  return data;
};

export const updateGameData = async (id: number, data: any) => {
  const response = await fetch(`${GAME_API_ENDPOINT}${id}/`, {
    // todo: check method
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};

export const sendSubmission = async (data: any) => {
  const response = await fetch(`${SUBMIT_API_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};

export const getProblem = async (tags: string[] = []) => {
  const response = await fetch(
    `${PROBLEM_API_ENDPOINT}?${tags.map((tag) => `tags=${tag}`).join("+")}`
  );
  const data = await response.json();
  return data;
};
