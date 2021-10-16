const _DOMAIN = "https://naturist.herokuapp.com";

export const userData = window.localStorage.getItem("userData");
export const userLoggedIn = window.localStorage.getItem("userLoggedIn");

export const callAPI = async (url, type, payload) => {
  const fetchConfig = {
    method: type,
    credentials: "include",
  };

  if (payload) {
    fetchConfig.body = JSON.stringify(payload);
  }

  try {
    const res = await fetch(`${_DOMAIN}${url}`, fetchConfig);
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
