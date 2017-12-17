import React from "react";
import ScreenRow from "./screenRow";

// functional screen component
// displays 2 screen rows, 1 for questions and the other for ansewrs
// The value is passed down from the parent component as a prop
const Screen = props => {
  return (
    <div className="screen">
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  );
};

// Define our props expected from the parent component
Screen.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired
};

// export our component
export default Screen;
