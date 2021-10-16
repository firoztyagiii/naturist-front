import { callAPI } from "../model/model";

export const fetchTours = async (tourView) => {
  const response = await callAPI("/api/tour", "GET");
  response.data.tours.forEach((tour) => {
    tourView.generateMarkup(tour);
  });
};
