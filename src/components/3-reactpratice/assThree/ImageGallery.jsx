import { useState } from "react";
import styles from "./imagegallery.module.css";
import BabyPix from "../../../assets/babypix.webp";
import GirlPic from "../../../assets/girlpic.webp";
import LiyaImg from "../../../assets/liyaimg.jpg";
import SamdImg from "../../../assets/samdimg.jpg";
import Icon from "../../../assets/icon.png";

const images = [BabyPix, GirlPic, LiyaImg, SamdImg, Icon];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div
      className={`styles.galleryContainer ${isFullscreen ? "fullscreen" : ""}`}
    >
      <h2>Image Gallery</h2>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex}`} />
      </div>
      <div className={styles.controls}>
        <button onClick={goToPrevious}>⬅️ Previous</button>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button onClick={goToNext}>Next ➡️</button>
      </div>
    </div>
  );
};

export default ImageGallery;
