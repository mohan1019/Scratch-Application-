import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const DeleteMsg = ({ character, com_id }) => {
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <div
        id={com_id}
        onClick={() => displayMessage()}
        className="text-center bg-purple-600 text-white text-sm p-2 my-3"
      >
        Remove Message
      </div>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(DeleteMsg);
