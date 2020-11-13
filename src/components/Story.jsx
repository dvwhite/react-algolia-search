import React from "react";

// Utility imports
import ReactHtmlParser from "react-html-parser";
import { replaceStoryText } from "../utils/utils";

const Story = ({ data }) => {
  return (
    <div className="story">
      <div className="story-number">{data.idx + 1}.</div>
      <div className="story-content">
        <p className="story-title">
          <a href={data?.url}>{data?.title}</a>
        </p>
        <div className="story-meta">
          <p>{data?.points} points</p>
          <p>by {data?.author}</p>
          <p>on {new Date(data?.created_at).toLocaleString("en-us")}</p>
        </div>
        <div>
          {data.story_text ? (
            <div className={"story-text"}>
              {ReactHtmlParser(replaceStoryText(data?.story_text))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Story;
