import React from 'react';
import POPhoto from './POPhoto';

const Popover = React.createClass({
  render(){
    const props = this.props;
    const imagesObj = props.images;
    return (
      <div className="popover" ref="popover" id="pop-over">
        <span className="po-text">Choose your avatar</span>
        <div>
          {
            Object.keys(imagesObj).map((key)=> {
              const img = imagesObj[key];
              return <POPhoto img={img} key={key} selected={img.id === props.selectedImageId}
                              onSelect={props.onSelect} async={props.async}/>
            })
          }
        </div>
      </div>
    )
  }
});

export default Popover;
