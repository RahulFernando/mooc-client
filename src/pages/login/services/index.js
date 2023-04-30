import axios from "../../../api/axios";

export const postLogin = async (payload) =>
  await axios.post("/login/", payload);
