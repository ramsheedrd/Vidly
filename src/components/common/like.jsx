import React from "react";

export default function Like(props) {
  let heart = "fa-heart ";
  if (props.liked) {
    heart += "fas";
  } else {
    heart += "far";
  }

  return (
    <i
      className={heart}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
}
