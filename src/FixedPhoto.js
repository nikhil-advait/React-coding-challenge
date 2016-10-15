import React from 'react';
import Photo from './Photo';

const FixedPhoto = (props)=>{
    return (
      <div id="fixed-photo">
        <Photo url={props.url} class={`fixed-photo ${props.class || ""}`} onSelect={props.onClick}/>
      </div>
    );
  };

export default FixedPhoto;
