import { callAPI } from "../model/model";
import { TourDetailView } from "../view/tourDetailView";

const call = async (id) => {
  const response = await callAPI(`/api/tour/${id}`, "GET");
  const tourDetailView = new TourDetailView();
  tourDetailView.generateMarkup(response.data.tour);
};

export const tourDetailController = async () => {
  if (window.location.pathname == "/tour-detail.html") {
    const id = window.location.search.split("=")[1];
    if (!id) {
      return (window.location.href = "/tours.html");
    }
    await call(id);
  }
};
