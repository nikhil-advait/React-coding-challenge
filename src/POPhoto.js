import React from 'react';
import Photo from './Photo';

const POPhoto = React.createClass({
  isSelected: false,

  onClick() {
    this.isSelected = true;
    this.props.onSelect(this.props.img.id).then(()=> {this.isSelected = false});
  },
  render(){
    const props = this.props;
    const selectedClass = props.selected ? "selected-avatar" : "";
    const animateClass = this.isSelected && props.async ? "animation" : "";
    const img = props.img;

    return (
      <Photo url={img.src} class={`po-photo ${selectedClass} ${animateClass}`} onSelect={this.onClick}/>
    );
  }
});

export default POPhoto;
