export const sendError = (err) => {
  window.location.href = `/error.html?msg=${err.message ? err.message : "Something went wrong!"}`;
};
