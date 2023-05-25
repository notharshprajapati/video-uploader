import React, { useState } from "react";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import "./VideoUploader.css";

const VideoUploader = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const videoUrl = URL.createObjectURL(file);
    setUploadedVideo(videoUrl);
  };

  return (
    <div className="video-uploader">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag and drop a video file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>

      {uploadedVideo && (
        <div className="video-container">
          <h2>Uploaded Video:</h2>
          <ReactPlayer url={uploadedVideo} controls />
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
