import React from 'react'
import axios from 'axios'

export default function Save(props) {
    return (
        <div className="reduceBox">
            <button className={props.classe} onClick= {props.SaveButton}>SAVE</button>
        </div>
      )
}
