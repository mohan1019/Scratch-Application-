import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import UndoIcon from "@material-ui/icons/Undo";
import Paper from "@material-ui/core/Paper";

const TurnAntiClockWise = ({ character, characterAngle, com_id }) => {
  const [angle, setAngle] = useState(0);

  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="text-center bg-blue-600 text-black text-sm p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Rotate By:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={angle}
            onChange={(e) => {
              setAngle(parseInt(e.target.value));
            }}
          />
        </div>
        <div
          id={com_id}
          className="text-center bg-blue-600 text-white text-sm p-2 my-3"
          onClick={() => handleClick()}
        >
          <div className="flex mx-auto">
            Turn
            <UndoIcon className="mx-2" />
            {angle} degrees
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
