import { useState, useRef } from "react";

// Video-sektion: viser et thumbnail med play-knap, og starter videoen ved klik
function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Vent til videoen er i DOM'en, og afspil den derefter
    setTimeout(() => videoRef.current?.play(), 0);
  };

  return (
    <section className="section video-showcase">
      <div className="container">
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Se os i aktion
        </p>
        <h2 className="section-title section-title--center">
          Sådan er det at træne hos os
        </h2>

        <div className="video-showcase__frame">
          {isPlaying ? (
            <video
              ref={videoRef}
              src="/assets/videos/aboutVideo.mp4"
              controls
              className="video-showcase__video"
            />
          ) : (
            <button
              className="video-showcase__poster"
              onClick={handlePlay}
              aria-label="Afspil video"
            >
              <img
                src="/assets/images/video_img.jpg"
                alt="Forhåndsvisning af video"
              />
              <img
                className="video-showcase__play-icon"
                src="/assets/icons/video_img_icon.png"
                alt=""
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
