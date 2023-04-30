import axios from "../../../api/axios";

export const postRegister = async (payload) =>
  await axios.post("/register/", payload);
