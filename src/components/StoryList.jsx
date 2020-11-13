import React from "react";
import "../index.css";

// Component imports
import Story from "./Story";

const StoryList = ({ stories }) => {
  // Display one story component for each object in the storys prop
  return (
    <div className="stories">
      {stories?.map((story, idx) => {
        return <Story data={{ ...story, idx }} key={idx} />;
      })}
    </div>
  );
};

export default StoryList;
