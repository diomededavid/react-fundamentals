// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
import {orange} from '@kentcdodds/react-workshop-app/dist/styles/colors'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box box--small"
    style={{fontStyle: 'italic', background: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', background: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', background: 'orange'}}
  >
    large orange box
  </div>
)

function Box({size, color}) {
  return (
    <div
      className={'box box--' + size}
      style={{fontStyle: 'italic', background: color}}
    >
      {size} {color} box
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" color="lightblue" />
      <Box size="medium" color="pink" />
      <Box size="large" color="orange" />s
    </div>
  )
}

export default App
