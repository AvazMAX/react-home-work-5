import React from 'react'

export function Button(props) {
  return (
    <div>
        <button onClick={props.onClick} style={{ background: props.color}} >{props.child}</button>
    </div>
  )
}
