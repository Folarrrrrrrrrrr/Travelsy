import React, { useState } from "react";

const GalleryCard = ({ title, spanProps,  imageUrl, onclick, gridItem, divReponsiveness }) => {
  return (
    <>
      <div
        className={divReponsiveness}
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
