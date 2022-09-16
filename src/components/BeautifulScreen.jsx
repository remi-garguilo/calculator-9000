import React from 'react';
import '../css/Calculator.css';

export default function BeautifulScreen(props) {
  return (
    <div>
        <input className={props.class} type="text" value={props.numberValue} onChange={props.changeNumbers}/>
    </div>

  )
}