import { unsplash } from "./unsplash";

export const fetchUnsplash = async ({ query = "", per_page = 10 }) => {
  const response = await unsplash.get("/search/photos", {
    params: {
      query,
      per_page
    }
  });
  return response.data.results;
};
