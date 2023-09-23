import React from 'react'
import "./IpodScreenComponent.css";

export default function IpodScreenComponent(props) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "larger"}}>
      <div>
        {props.selectedItem.item === "Songs"?"Click to view Song List" :
        (props.selectedItem.item ==="Song1" || props.selectedItem.item ==="Song2" || props.selectedItem.item ==="Song3" )?
        <>
          <figure>
            <figcaption>Listening to {props.selectedItem.item}:</figcaption>
            <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
              <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
            </audio>
          </figure>
        
        </>:props.selectedItem.item}
      </div>
    </div>
  )
}
