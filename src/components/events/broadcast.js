import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";

const BroadcastMessage = ({ com_id }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    message: "",
  });
  const handleClick = () => {
    enqueueSnackbar(state.message, { variant: "info" });
  };

  return (
    <Paper elevation={3}>
      <div className="text-center bg-yellow-600 text-black text-sm p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ message: e.target.value });
            }}
          />
        </div>
        <div
          id={com_id}
          className="text-center bg-yellow-600 text-white text-sm p-2 my-3"
          onClick={() => handleClick()}
        >
          {`Broadcast ${state.message}`}
        </div>
      </div>
    </Paper>
  );
};

export default BroadcastMessage;
