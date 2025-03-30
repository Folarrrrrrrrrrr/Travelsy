import React, { useState } from "react";
import "./GalleryCard.css"
const GalleryCard = ({ title, isSelected, spanProps,  imageUrl, onclick, gridItem, divReponsiveness }) => {
  return (
    <>
      <div
        className={`galleryCard ${divReponsiveness} ${isSelected ? "selected" : ""}`}
        style={{ ...gridItem, backgroundImage: `url(${imageUrl})`, cursor:"pointer" }}
        onClick={onclick}
      >
        {/* <img src={imageUrl} alt="title" /> */}
        <h3>{title}</h3>
        <span>{spanProps}</span>
      </div>
    </>
  );
};

export default GalleryCard;
