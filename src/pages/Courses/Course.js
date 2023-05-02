import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Webcam from "react-webcam";
import { useMutation } from "@tanstack/react-query";

import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

import AuthContext from "../../context/AuthProvider";

import { postRate } from "./services";

import "./style.css";

const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};

const Course = () => {
  const { user } = useContext(AuthContext);
  const videoRef = useRef();
  const webcamRef = useRef(null);
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { mutate: rateAsync } = useMutation({ mutationFn: postRate });

  const [isMuted, setIsMuted] = useState(false);
  const [imgSrc, setImgSrc] = useState([]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) setImgSrc((prev) => [...prev, imageSrc]);
  }, [webcamRef]);

  // capture a photo every 20 sec
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      capture();
    }, 20000); // TODO: change this value

    return () => {
      clearInterval(timer);
    };
  }, [capture]);

  // send captured photos every 1min
  useEffect(() => {
    setInterval(() => {
      if (imgSrc.length > 0) {
        const faces = imgSrc.map((img) => dataURIToBlob(img));
        const formData = new FormData();
        formData.append("faces", faces);
        formData.append("user_id", user.id);
        formData.append("video_id", params.id);
        rateAsync(formData);
        setImgSrc([]);
      }
    }, 60000); // TODO: change this value
  }, [imgSrc, params.id, rateAsync, user.id]);

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
    <>
      <Webcam
        style={{
          opacity: 0,
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
        }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
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
    </>
  );
};

export default Course;
