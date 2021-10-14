const _DOMAIN = "https://naturist.herokuapp.com";

export const callAPI = async (url, type, payload) => {
  const fetchConfig = {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (payload) {
    fetchConfig.body = JSON.stringify(payload);
  }

  try {
    const res = await fetch(`${_DOMAIN}${url}`, fetchConfig);
    const response = await res.json();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
