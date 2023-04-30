import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

let firstTime = true;

const Course = () => {
  const videoRef = useRef();

  const [chunks, setChunks] = useState([]);

  const loadChunks = useCallback(async (start = 0) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/videos/download/1",
        null,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "video/mp4",
            Range: start,
          },
        }
      );

      setChunks((prev) => [...prev, response.data]);
      const range = response.headers["content-range"];
      const totalSize = range.split("/")[1];
      const endByte = range.split("-")[1].split("/")[0];

      if (Number(endByte) !== totalSize - 1) await loadChunks(endByte);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (firstTime) {
      loadChunks();
      firstTime = false;
    }
  }, [loadChunks]);

  const playHandler = async () => {
    const blob = new Blob(chunks, { type: "video/mp4" });
    videoRef.current.src = URL.createObjectURL(blob);
    videoRef.current.play();
  };

  return (
    <>
      <video ref={videoRef} controls width="640" height="480" />;
      <button onClick={playHandler}>Play Video</button>
    </>
  );
};

export default Course;
