import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Size = ({ character, com_id }) => {
  const [state, setState] = useState({
    scale: 1,
  });
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <Paper elevation={3}>
      <div className="text-center bg-purple-600 text-black text-sm p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Size:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.scale}
            onChange={(e) =>
              setState({ ...state, scale: parseInt(e.target.value) })
            }
          />
        </div>
        <div
          id={com_id}
          className="text-center bg-purple-600 text-white text-sm p-2 my-3"
          onClick={() => changeSize()}
        >
          Size {state.scale}
        </div>
      </div>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Size);
