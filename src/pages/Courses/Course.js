import { useRef, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

import "./style.css";

const Course = () => {
  const videoRef = useRef();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const [isMuted, setIsMuted] = useState(false);

  // const loadChunks = useCallback(
  //   async (start = 0) => {
  //     try {
  //       const response = await axios.post(
  //         `http://localhost:5000/videos/download/${params.id}`,
  //         null,
  //         {
  //           responseType: "blob",
  //           headers: {
  //             "Content-Type": "video/mp4",
  //             Range: start,
  //           },
  //         }
  //       );

  //       setChunks((prev) => [...prev, response.data]);
  //       const range = response.headers["content-range"];
  //       const totalSize = range.split("/")[1];
  //       const endByte = range.split("-")[1].split("/")[0];

  //       if (Number(endByte) !== totalSize - 1) await loadChunks(endByte);
  //     } catch (error) {}
  //   },
  //   [params.id]
  // );

  const playHandler = async () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMuteHandler = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const volumeHandler = (value) => {
    videoRef.current.volume = value;
  };

  return (
    <MDBContainer className="full-page">
      <MDBRow className="m-0">
        <MDBCol className="p-0">
          <MDBCard style={{ background: "black", borderRadius: "0px" }}>
            <div className="video-container">
              <video ref={videoRef} controls>
                <source
                  src={`http://localhost:5000/videos/download/${params.id}`}
                  type="video/mp4"
                ></source>
              </video>
            </div>
            <div className="video-info">
              <h5>{searchParams.get("tite")}</h5>
              <div className="video-actions">
                <MDBIcon color="white" icon="play" onClick={playHandler} />
                <MDBIcon color="white" icon="pause" onClick={playHandler} />
                <MDBIcon
                  color="white"
                  icon={isMuted ? "volume-mute" : "volume-up"}
                  onClick={toggleMuteHandler}
                />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={(e) => volumeHandler(e.target.value)}
                />
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Course;
