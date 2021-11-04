export const RAZORPAY_KEY = "rzp_test_iQXxC9LBZRPfH9";
export const _DOMAIN = "https://naturist.herokuapp.com";
// export const _DOMAIN = "http://127.0.0.1:9090";

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
