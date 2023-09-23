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
            <div id='btnContainer'>
            </div>
        </div>

        
        
    )
}
