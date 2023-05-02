import axios from "../../../api/axios";

export const postRate = async (payload) =>
  await axios.post("/videos/rate", payload);
