import React from 'react';
import '../css/Calculator.css';

export default function GreatOperationButton(props) {
  const operator = ['/','*','-','+','%']
  var handleClick = (e) => {
    props.handleClickParent(e);
  }
  return (
    <div className="ContentOperators">
      {operator.map((ope) => (
          <button key={ope}  className="buttonsOperator" value={ope} onClick={(e)=> handleClick(e)}>
            {
              ope == "*" ? "x" : ope == "/" ?  "÷" : ope
            }
          </button>
        ))}
    </div>
  )
}
