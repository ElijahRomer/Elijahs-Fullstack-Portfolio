import React from 'react';

function WorkRow(props) {
  return (
    <div className="row col-11 my-4 mx-auto justify-content-around">
      {props.children}
    </div>
  );
}

export default WorkRow;
