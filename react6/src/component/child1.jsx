import React from 'react'
import Child2 from './child2'

export default function Child1({stdata}) {
  return (
    <div>
      <Child2 stdata={stdata}></Child2>
    </div>
  )
}
