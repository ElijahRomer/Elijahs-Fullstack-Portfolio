import React from 'react';

function Image(props) {
  return (
    <div className="col-sm-10 col-lg-4 mx-auto">
      <figure>
        <img
          src={props.src}
          alt={props.alt}
          className="m-auto my-3 rounded-circle img-thumbnail"
        />
        <figcaption className="mx-auto">{props.caption}</figcaption>
      </figure>
    </div>
  );
}

export default Image;
