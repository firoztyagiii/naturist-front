import { callAPI } from "../model/model";
import { TourView } from "../view/tourView";

const tourView = new TourView();

export const fetchTours = async () => {
  const response = await callAPI("/api/tour", "GET");
  response.data.tours.forEach((tour) => {
    tourView.generateMarkup(tour);
  });
};
