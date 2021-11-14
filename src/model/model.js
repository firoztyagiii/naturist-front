export const RAZORPAY_KEY = "rzp_test_iQXxC9LBZRPfH9";
// export const _DOMAIN = "https://api.softdownloads.net";
export const _DOMAIN = "http://localhost:1000";
export const HOSTING = "https://naturist.sgp1.digitaloceanspaces.com/";

export let isUserLoggedIn = false;
export let userData = {};

export const callAPI = async (url, type, payload) => {
  const fetchConfig = {
    method: type,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  };

  if (payload) {
    fetchConfig.body = JSON.stringify(payload);
  }

  try {
    const res = await fetch(`${_DOMAIN}${url}`, fetchConfig);
    const response = await res.json();
    return response;
  } catch (err) {
    throw err;
  }
};
