import React from 'react'

import "./IpodMenuComponent.css";


export default function IpodMenuComponent(props) {
  // const flag = props.flag;
  return (
    <div>
      <ul id='menuList' style={{listStyle: "none"}}>
        <li className='active'>Songs</li>
        <li>Albums</li>
        <li>Artists</li>
        <li>Playlistss</li>
      </ul>
    </div>
  )
}
