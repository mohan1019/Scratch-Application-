import React, { useState } from "react";
import { connect } from "react-redux";
import { setWait } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";

const Wait = ({ events, com_id, set_wait }) => {
  const [wait, setStateWait] = useState(0);

  function handleChange(e) {
    let val = parseInt(e.target.value);
    setStateWait(val);
    let curr = events.wait;
    curr[com_id] = val;
    set_wait(curr);
  }
  return (
    <Paper elevation={3}>
      <div className="text-center bg-red-600 text-black text-sm p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Wait</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={wait}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          id={com_id}
          className="text-center bg-red-600 text-white text-sm p-2 my-3"
        >
          Wait {wait} seconds
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_wait: (value) => dispatch(setWait(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);
