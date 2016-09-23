import React from 'react';
const staticUrl = './static/';

const Photo = (props) => {
  const classProp = props.class || "";
  const fullURl = staticUrl + props.url;
  return (
    <img alt="avatar" className={`photo ${classProp}`} src={require(fullURl)} onClick={props.onSelect}/>
  );
};

export default Photo;
