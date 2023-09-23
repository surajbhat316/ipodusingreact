import React, { useEffect, useState } from 'react'

import "./IpodMenuComponent.css";


export default function IpodMenuComponent(props) {

  useEffect(()=>{
    if(props.angle >=0 && props.angle <= 120){
      const activeElement = document.getElementsByClassName("active")[0];
      const song1 = document.getElementsByClassName("song1")[0];
      if(activeElement && song1){
        activeElement.classList.remove("active");
        song1.classList.add("active");
      }

    }
    else if(props.angle >=121 && props.angle <= 240){
      const activeElement = document.getElementsByClassName("active")[0];
      const song2 = document.getElementsByClassName("song2")[0];
      if(activeElement && song2){
        activeElement.classList.remove("active");
        song2.classList.add("active");
      }
      
    }
    else if(props.angle >=241 && props.angle <= 360){
      const activeElement = document.getElementsByClassName("active")[0];
      const song3 = document.getElementsByClassName("song3")[0];
      if(activeElement && song3){
        activeElement.classList.remove("active");
        song3.classList.add("active");
      }
    }
  }, [props.angle])
  return (
    <div>
      <ul id='menuList' style={{listStyle: "none"}}>
        {props.visibleList === "menuList" ?
        <div>
          <h2>Menu</h2>
          <li className='list_item songs'>Songs</li>
          <li className='list_item albums'>Albums</li>
          <li className='list_item artists active'>Artists</li>
          <li className='list_item playlists'>Playlists</li>
        </div>
        :
        <div>
          <h2>Songs</h2>
            <li className='song1 active'>Song1</li>
            <li className='song2'>Song2</li>
            <li className='song3'>Song3</li>
        </div>
        }
      </ul>
    </div>
  )
}
