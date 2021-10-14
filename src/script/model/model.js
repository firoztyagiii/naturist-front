const _DOMAIN = "https://naturist.herokuapp.com";

export const callAPI = async (url, type, payload = "") => {
  try {
    const res = await fetch(`${_DOMAIN}${url}`, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
