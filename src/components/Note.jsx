import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  const [cross, setCross] = useState(false);
  function handleClick() {
    props.onDelete(props.id);
  }
  function mouseOver() {
    setCross(true);
  }
  function mouseOut() {
    setCross(false);
  }
  return (
    <div className="note">
      <h1 style={{ textDecoration: cross ? "line-through" : "none" }}>
        {props.title}
      </h1>
      <p style={{ textDecoration: cross ? "line-through" : "none" }}>
        {props.content}
      </p>
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
        style={{ backgroundColor: "#fff" }}
      >
        {cross ? <DeleteForeverIcon /> : <DeleteIcon />}
      </button>
    </div>
  );
}

export default Note;
