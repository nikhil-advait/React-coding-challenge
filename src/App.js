import React from 'react';
import FixedPhoto from './FixedPhoto';
import Popover from './Popover';
import './App.css';

const initialData = [
  { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
];

const normalize = (arrOfImages) => {
  const imageObj = {};
  arrOfImages.forEach((img)=> {
    imageObj[img.id] = img;
  });
  return imageObj;
};

const App = React.createClass({
  getInitialState(){
    return {
      images: normalize(initialData),
      selectedImageId: 1,
      showPopover: false,
      asyncActionInProgress: false
    };
  },
  componentDidMount(){
    document.addEventListener("click", (e) => {
      var level = 0;
      var popoverclicked = false;
      for (var element = e.target; element; element = element.parentNode) {
        if (element.id === 'pop-over') {
          popoverclicked = true;
          return;
        }
        level++;
      }
      if(e.target.parentElement.id !== "fixed-photo" && popoverclicked !== true){
        this.setState({showPopover: false})
      }
    });
  },

  setAvatar(id){
    //some async action here
    const p1 = new Promise((resolve, reject)=>{
      setTimeout(resolve, 1000);
    });
    this.setState({asyncActionInProgress: true});
    return p1.then(()=>{
      this.setState({selectedImageId: id, showPopover: false, asyncActionInProgress: false});
    });
  },

  displayPopover(){
    this.setState({showPopover: true});
  },

  render() {
    const {images, selectedImageId, showPopover, asyncActionInProgress} = this.state;
    return (
      <div className="app">
        <FixedPhoto url={images[selectedImageId].src} class={showPopover ? 'active' : ''} onClick={this.displayPopover}/>
        {showPopover ? <Popover images={images} selectedImageId={selectedImageId} onSelect={this.setAvatar} async={asyncActionInProgress}/> : ""}
      </div>
    )
  }
});

export default App;
