import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const ThinkMessage = ({ character, com_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";

    el2.style.display = "block";
    el2.style.position = "relative";

    window.clearTimeout();
    el.innerHTML = state.message;
  };

  return (
    <Paper elevation={3}>
      <div className="text-center bg-purple-600 text-black text-sm p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </div>
        <div
          id={com_id}
          className="text-center bg-purple-600 text-white text-sm p-2 my-3"
          onClick={() => displayMessage()}
        >
          {`Think ${state.message}`}
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

export default connect(mapStateToProps)(ThinkMessage);
