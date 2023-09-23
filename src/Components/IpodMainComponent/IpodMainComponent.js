import React, { useEffect, useReducer } from 'react'
import './IpodMainComponent.css';
import IpodScreenComponent from '../IpodScreenComponent/IpodScreenComponent';
import IpodMenuComponent from '../IpodMenuComponent/IpodMenuComponent';
import IpodDialComponent from '../IpodDialComponent/IpodDialComponent';
import ZingTouch from "zingtouch";

function reducer(state, action) {
  if (action.type === 'increment') {
    if(action.payload.flag){
      return {
        rotationAngle: action.payload.angle,
        counter: (state.counter + 1),
        flag: true
      }
    }
    else{
      return {
        rotationAngle: action.payload.angle,
        counter: (state.counter - 1),
        flag: false
      }
    }
  }
  throw Error('Unknown action.');
}


export default function IpodMainComponent() {

  // const [rotationAngle , setRotationAngle] = useState(0);
  // const [flag , setFlag] = useState(false);

  const [state, dispatch] = useReducer(reducer, { rotationAngle: 0, counter: 0, flag: false });


  const printAngle = (angle) =>{
    if(angle >=0 && angle <= 90){
      console.log("Songs");
    }
    else if(angle >=91 && angle <= 180){
      console.log("Albums");
    }
    else if(angle >=181 && angle <= 270){
      console.log("Artists");
    }
    else if(angle >=271 && angle <= 360){
      console.log("Playlists");
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
  return (
    <div>
        <div id='main'>
            <div id='menuAndScreen'>
                <IpodMenuComponent flag={state.flag} />
                <IpodScreenComponent />
            </div>
            <div id='dialComponent'>
                <IpodDialComponent printAngle={printAngle} />
                <div id="wrapper">
                  <div id="rotate-container">
                    <div id="rotatable">
                      <div>Rotate me</div>
                    </div>
                  </div>
                  <div id="output"></div>
                </div>
                <div style={{marginLeft: "-400px"}} id="interaction"></div>
            </div>
        </div>
    </div>

  )
}
