import React, { useReducer } from 'react'
import './IpodMainComponent.css';
import IpodScreenComponent from '../IpodScreenComponent/IpodScreenComponent';
import IpodMenuComponent from '../IpodMenuComponent/IpodMenuComponent';
import IpodDialComponent from '../IpodDialComponent/IpodDialComponent';

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
    if(angle >= state.rotationAngle){
      dispatch({type: "increment", payload: {flag: true, angle}});
    }
    else{
      dispatch({type: "increment", payload: {flag: false, angle}});
    }
    // console.log(state);
  }
  return (
    <div id='main'>
        <div id='menuAndScreen'>
            <IpodMenuComponent flag={state.flag} />
            <IpodScreenComponent />
        </div>
        <div id='dialComponent'>
            <IpodDialComponent printAngle={printAngle} />
        </div>
        
    </div>
  )
}
