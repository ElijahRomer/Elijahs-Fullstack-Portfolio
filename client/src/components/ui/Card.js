import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="my-4 mx-auto p-4 text-light container rounded-3" id="card">
      {props.children}
    </div>
  );
}

export default Card;
