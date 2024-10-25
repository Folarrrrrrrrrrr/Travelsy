import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import Button from "./Button";
import { useApiContext } from "../state/ApiContext";
import "../styles/gallery.css";
import "../styles/galleryResponsiveness.css";
import cloud from "../src/assets/images/cloud.png";
import lagoon from "../src/assets/images/lagoon.png";
import bridge from "../src/assets/images/bridge.png";
import cookies from "../src/assets/images/cookies.png";
import food from "../src/assets/images/Food.png";
import grass from "../src/assets/images/grass.png";
import lake from "../src/assets/images/lake.png";
import waterfall from "../src/assets/images/waterfall.png";
import forest from "../src/assets/images/forest.png";
import { useActivityContext } from "../state/formContext";
const Gallery = () => {
  const { state } = useApiContext();

  const { photos, loading, error } = state;

  if (loading) {
    return <> Loading data...</>;
  }
  if (error) {
    return <> {error} </>;
  }

  // Defining styles using JavaScript objects
  const itemStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    fontSize: "1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    minHeight: "300px",
  };

  const largeStyle = {
    ...itemStyle,
    gridColumn: "span 2",
    gridRow: "span 2",
  };

  const mediumStyle = {
    ...itemStyle,
    gridColumn: "span 1",
    gridRow: "span 1",
  };

  const smallStyle = {
    ...itemStyle,
    // gridColumn: 'span 1',
    gridRow: "span 2",
    minHeight: "100px",
  };

  const wideStyle = {
    ...itemStyle,
    gridColumn: "span 3",
  };

  const sortedData = [
    {
      title: photos[0].title,
      imageUrl: cloud,
      customerStyle: largeStyle,
    },
    {
      title: photos[1].title,
      imageUrl: lagoon,
      customerStyle: smallStyle,
    },
    {
      title: photos[2].title,
      imageUrl: forest,
      customerStyle: mediumStyle,
    },
    {
      title: photos[3].title,
      imageUrl: grass,
      customerStyle: mediumStyle,
    },
    {
      title: photos[4].title,
      imageUrl: cookies,
      customerStyle: mediumStyle,
    },
    {
      title: photos[5].title,
      imageUrl: food,
      customerStyle: smallStyle,
    },
    {
      title: photos[6].title,
      imageUrl: waterfall,
      customerStyle: largeStyle,
    },
    {
      title: photos[7].title,
      imageUrl: lake,
      customerStyle: largeStyle,
    },
    {
      title: photos[8].title,
      imageUrl: bridge,
      customerStyle: smallStyle,
    },
  ];
  // const sortedData = [
  //   {
  //     title: photos[0].title,
  //     imageUrl: photos[0].url,
  //     customerStyle: largeStyle,
  //   },
  //   {
  //     title: photos[1].title,
  //     imageUrl: photos[1].url,
  //     customerStyle: smallStyle,
  //   },
  //   {
  //     title: photos[2].title,
  //     imageUrl: photos[2].url,
  //     customerStyle: mediumStyle,
  //   },
  //   {
  //     title: photos[3].title,
  //     imageUrl: photos[3].url,
  //     customerStyle: mediumStyle,
  //   },
  //   {
  //     title: photos[4].title,
  //     imageUrl: photos[4].url,
  //     customerStyle: mediumStyle,
  //   },
  //   {
  //     title: photos[5].title,
  //     imageUrl: photos[5].url,
  //     customerStyle: smallStyle,
  //   },
  //   {
  //     title: photos[6].title,
  //     imageUrl: photos[6].url,
  //     customerStyle: largeStyle,
  //   },
  //   {
  //     title: photos[7].title,
  //     imageUrl: photos[7].url,
  //     customerStyle: largeStyle,
  //   },
  //   {
  //     title: photos[8].title,
  //     imageUrl: photos[8].url,
  //     customerStyle: smallStyle,
  //   },
  // ];

  const { selectedActivities, setSelectedActivities, time, setTime } =
    useActivityContext();

  // Toggle activity selection
  const toggleActivity = (activity) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((act) => act !== activity)
        : [...prev, activity]
    );
  };
  // Handle the selection of time duration
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Handle the change in interests input
  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the logic to use the selected preferences
    console.log("Time selected:", selectedTime);
    console.log("Interests:", interests);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label className="question-label">How much time do you have?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="radio"
                value="weekend"
                checked={time === "weekend"}
                onChange={(e) => setTime(e.target.value)}
              />
              A weekend
            </label>
            <label>
              <input
                type="radio"
                value="week"
                checked={time === "week"}
                onChange={(e) => setTime(e.target.value)}
              />
              A week
            </label>
            <label>
              <input
                type="radio"
                value="month"
                checked={time === "month"}
                onChange={(e) => setTime(e.target.value)}
              />
              A month
            </label>
            <label>
              <input
                type="radio"
                value="fewDays"
                checked={time === "fewDays"}
                onChange={(e) => setTime(e.target.value)}
              />
              A few days, specify.
            </label>
          </div>
        </div>
        <p className="custom-padding">What are your interests?</p>
        <div className="galleryContainer">
          {sortedData.map((item, index) => (
            <GalleryCard
              divReponsiveness="divResponsiveness"
              className={`${
                selectedActivities.includes(sortedData.title) ? "selected" : ""
              }`}
              gridItem={item.customerStyle}
              key={sortedData.title}
              title={item.title}
              imageUrl={item.imageUrl}
              onclick={() => toggleActivity(sortedData.title)}
              spanProps={sortedData.title}
            />
          ))}
        </div>
        <Button btnStyle="formBtn">
          <h2 className="formBtnText"> Set</h2>{" "}
        </Button>
      </form>
    </>
  );
};

export default Gallery;
