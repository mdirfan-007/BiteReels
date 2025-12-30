import React, { use, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const containerRef = useRef(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (!video) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { root: container, threshold: [0.6] }
    );

    const items = container.querySelectorAll(".reel-item");
    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, [videos]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food/getAll", {
        withCredentials: true,
      })
      .then((response) => {
        setVideos(response.data.foodItems);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {videos.map((v) => (
        <div
          key={v._id}
          className="reel-item snap-start h-screen w-full relative flex items-end justify-center"
        >
          {/* video fills the screen */}
          <video
            className="reel-video absolute inset-0"
            src={v.video}
            muted
            playsInline
            preload="metadata"
            loop
          />

          {/* gradient to make overlay text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* content container */}
          <div className="relative z-10 w-full px-6 pb-8 flex flex-col items-start">
            <p className="reel-description text-white text-sm mb-4 text-start">
              {v.description}
            </p>

            <Link
              to={"/food-partner/" + v.foodPartner}
              className="inline-block bg-cyan-400 text-white font-semibold px-6 py-2 rounded-md"
            >
              Visit store
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
