import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Remove = ({ character, com_id }) => {
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "none";
  };
  return (
    <Paper elevation={3}>
      <div
        id={com_id}
        className="text-center bg-purple-600 text-white text-sm p-2 my-3"
        onClick={() => handleDisplay()}
      >
        Remove Sprite
      </div>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Remove);
