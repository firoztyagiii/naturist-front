const _DOMAIN = "https://naturist.herokuapp.com";

export const loginAPICall = async (input) => {
  const res = await fetch(`${_DOMAIN}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });
  const response = await res.json();
  return response;
};

export const isLoggedIn = async () => {
  const res = await fetch(`${_DOMAIN}/api/user/about-me`);
  const response = await res.json();
  return response;
};
