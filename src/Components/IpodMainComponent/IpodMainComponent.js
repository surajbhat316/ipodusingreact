import React, { useEffect, useReducer, useState } from 'react'
import './IpodMainComponent.css';
import IpodScreenComponent from '../IpodScreenComponent/IpodScreenComponent';
import IpodMenuComponent from '../IpodMenuComponent/IpodMenuComponent';
import IpodDialComponent from '../IpodDialComponent/IpodDialComponent';
import ZingTouch from "zingtouch";

// function reducer(state, action) {
//   if (action.type === 'changeSelectedItem') {
//     if(action.payload){
//       console.log(action.payload);
//       return {
//         selectedItem : action.payload.item
//       }
//     }
//   }
//   throw Error('Unknown action.');
// }


export default function IpodMainComponent() {

  // const [rotationAngle , setRotationAngle] = useState(0);
  // const [flag , setFlag] = useState(false);

  // const [state, dispatch] = useReducer(reducer, { selectedItemName:"songs" });

  const [seletedItem, setSelectedItem] = useState({item: "Songs"});
  const printAngle = (angle) =>{
    if(angle >=0 && angle <= 90){
      const activeItem = document.getElementsByClassName("active")[0];
      const songListItem = document.getElementsByClassName("songs")[0];
      if(songListItem && activeItem){
        activeItem.classList.remove("active");
        songListItem.classList.add("active");
      }
    }
    else if(angle >=91 && angle <= 180){
      const activeItem = document.getElementsByClassName("active")[0];
      const albumListItem = document.getElementsByClassName("albums")[0];
      if(albumListItem && activeItem){
        activeItem.classList.remove("active");
        albumListItem.classList.add("active"); 
      }
    }
    else if(angle >=181 && angle <= 270){
      const activeItem = document.getElementsByClassName("active")[0];
      const artistsListItem = document.getElementsByClassName("artists")[0];
      if(artistsListItem && activeItem){
        activeItem.classList.remove("active");
        artistsListItem.classList.add("active"); 
      }
    }
    else if(angle >=271 && angle <= 360){
      const activeItem = document.getElementsByClassName("active")[0];
      const playlistsListItem = document.getElementsByClassName("playlists")[0];
      if(playlistsListItem && activeItem){
        activeItem.classList.remove("active");
        playlistsListItem.classList.add("active"); 
      }
    }
    // if(angle >= state.rotationAngle){
    //   dispatch({type: "increment", payload: {flag: true, angle}});
    // }
    // else{
    //   dispatch({type: "increment", payload: {flag: false, angle}});
    // }
  }


  useEffect(()=>{
    var currentAngle = 15;
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    document.getElementById('rotatable').style.transform = 'rotate(15deg)';

    var target = document.getElementById('interaction');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function(e) {
      var rotatable = document.getElementById('rotatable');
      currentAngle += e.detail.distanceFromLast;
      rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
      printAngle(Math.floor(e.detail.angle));
    });
  });

  const handleClick = ()=>{
    const activeItem = document.getElementsByClassName("active")[0];
    setSelectedItem({item: activeItem.textContent});
  }
  return (
    <div>
        <div id='main'>
            <div id='menuAndScreen'>
                <IpodMenuComponent />
                <IpodScreenComponent selectedItem={seletedItem} />
            </div>
            <div id='dialComponent'>
                <IpodDialComponent printAngle={printAngle} />
                <div id="wrapper">
                  <div id="rotate-container">
                    <div id="rotatable">
                      <div></div>
                    </div>
                  </div>
                  <div id="output"></div>
                </div>
                <div style={{position: "relative", marginLeft: "-400px"}} id="interaction">
                  <button className='selectBtn' onClick={handleClick}>Select</button>
                </div>
            </div>
        </div>
    </div>

  )
}
