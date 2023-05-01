import axios from "../../../api/axios";

export const postDownload = async ({ startByte }) =>
  await axios.post("/videos/download/1", null, {
    headers: {
      "Content-Type": "video/mp4",
      Range: `bytes=${startByte}-`,
    },
  });
