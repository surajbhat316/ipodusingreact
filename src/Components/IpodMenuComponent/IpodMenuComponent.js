import React from 'react'

import "./IpodMenuComponent.css";


export default function IpodMenuComponent(props) {
  // const flag = props.flag;
  return (
    <div>
      <ul id='menuList' style={{listStyle: "none"}}>
        <li className='list_item songs active'>Songs</li>
        <li className='list_item albums'>Albums</li>
        <li className='list_item artists'>Artists</li>
        <li className='list_item playlists'>Playlists</li>
      </ul>
    </div>
  )
}
