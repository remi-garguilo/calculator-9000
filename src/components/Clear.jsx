import React from 'react'

export default function Clear(props) {

  return (
    <div className="reduceBox">
      <button className={props.classe} value={props.value} onClick= { props.ClearButton}>{props.operator}</button>
    </div>
  )
}
