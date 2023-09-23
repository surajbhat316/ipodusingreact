import React, { useEffect } from 'react'
import "./IpodDialComponent.css"
import ZingTouch from 'zingtouch';

export default function IpodDialComponent(props) {
    const {printAngle} = props;
    useEffect(()=>{ 
        // var target = document.body;
        // var region = new ZingTouch.Region(target);
        // region.bind(target, 'rotate', function(e) {
        //     // console.log(e.detail.angle+ "Rotate");
        //     printAngle(e.detail.angle);
        // }, []);

    });
  return (
    <div>
         {/* <button id='menuBtn'>
            Menu
        </button>
        <button id='forwardBtn'>
            Forward
        </button>
        <button id="selectBtn">
            Select
        </button>
        <button id='backwardBtn'>
            Back
        </button> */}
        <div id='btnContainer'>
        </div>
    </div>

    
    
  )
}
