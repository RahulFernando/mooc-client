import axios from "../../../api/axios";

export const getRecommendations = async (id) =>
  await axios.post(`/videos/recommend/${id}`);
