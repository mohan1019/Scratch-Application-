import React from "react";
import MoveX from "./motion/MoveX";
import TurnAngle from "./motion/TurnAngle";
import TurnAngleClockwise from "./motion/TurnAngleClockwise";
import GotoXY from "./motion/Goto";
import DisplayMsg from "./looks/DisplayMsg";
import DisplayMsgWithTimer from "./looks/DisplayMsgWithTimer";
import Size from "./looks/Size";
import Display from "./looks/Display";
import Remove from "./looks/Remove";
import Wait from "./control/Wait";
import Loop from "./control/Loop";
import RemoveMsg from "./looks/RemoveMsg";
import MoveY from "./motion/MoveY";
import BroadcastMessage from "./events/broadcast";
import Think from "./looks/Think";
import DisplayWithTimer from "./looks/DisplayWithTimer";

export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY com_id={id} />;
    case "MOVE":
      return <MoveX com_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnAngleClockwise com_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAngle com_id={id} />;

    case "GOTO_XY":
      return <GotoXY com_id={id} />;

    case "SAY_MESSAGE":
      return <DisplayMsg com_id={id} />;

    case "SAY_MESSAGE_WITH_TIMER":
      return <DisplayMsgWithTimer com_id={id} />;

    case "SIZE":
      return <Size com_id={id} />;

    case "SHOW":
      return <Display com_id={id} />;

    case "HIDE":
      return <Remove com_id={id} />;

    case "BROADCAST":
      return <BroadcastMessage com_id={id} />;

    case "WAIT":
      return <Wait com_id={id} />;

    case "REPEAT":
      return <Loop com_id={id} />;

    case "HIDE_MESSAGE":
      return <RemoveMsg com_id={id} />;

    case "THINK":
      return <Think com_id={id} />;

    case "THINK_TIMER":
      return <DisplayWithTimer com_id={id} />;

    default:
      return React.null;
  }
};
