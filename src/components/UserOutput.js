import React from "react";

const userOutput = props => {
  return (
    <React.Fragment>
      <p>Username: {props.username}</p>
      <p>Second Paragraph</p>
    </React.Fragment>
  );
};

export default userOutput;
