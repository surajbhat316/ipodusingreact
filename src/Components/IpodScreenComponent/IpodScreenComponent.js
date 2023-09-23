import React from 'react'

export default function IpodScreenComponent(props) {
  console.log(props);
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        {props.selectedItem.item}
      </div>
    </div>
  )
}
