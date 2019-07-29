import axios from "axios";

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e599e4b6f47802595e13f3360ac2383ea25c3606a1ffdceb054838a34a7a77cb"
  }
});
