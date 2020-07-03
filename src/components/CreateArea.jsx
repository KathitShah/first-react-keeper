import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [hide, setHide] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function hey(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("myBtn").click();
      document.getElementById("myText").select();
    }
  }
  function hey2(event) {
    if (event.keyCode === 13) {
      document.getElementById("myArea").select();
    }
  }
  function handleClick() {
    setHide(true);
  }
  return (
    <div className="create-note">
      <input
        id="myText"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder={hide ? "Title" : "Take a note..."}
        onClick={handleClick}
        onKeyUp={hey2}
      />
      <textarea
        style={{ display: hide ? "inline-block" : "none" }}
        id="myArea"
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
        onKeyUp={hey}
      />
      <Zoom in={hide ? true : false}>
        <Fab id="myBtn" onClick={submitNote} aria-label="add">
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default CreateArea;
