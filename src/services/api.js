import axios from "axios";

export const searchImages = async (query = "", page = 1, per_page = 12) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID I5cy8gNN-fndWthaj8KhCdQf3oVaoSs6cicXUnybAjA",
    },
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};
