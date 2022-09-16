import React from 'react';
import '../css/Calculator.css';
export default function MagnificientEqualButton(props) {
  return (
    <div className="reduceBox">
        <button className="buttonsEqual" value={props.value} onClick={props.buttonClick}>{props.operator}</button>
    </div>
  )
}
