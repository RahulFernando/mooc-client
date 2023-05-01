import axios from "../../../api/axios";

export const getCourses = async () => await axios.get("/videos/list");
