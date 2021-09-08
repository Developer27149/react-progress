import { Box } from '@chakra-ui/layout'
import React, { useState } from 'react'
import './style.scss'

export default function ProgressA(props) {  
  const {size = "40px", progress, stokenW, circleOneStroke, circleTwoStroke} = props
  
  return (
    <Box>
      <svg className="svg" width={size} height={size}>
        <circle className="svg-circle-bg" stroke={} cx={} cy={} r={} strokeWidth={stokenW}/>
        <circle className="svg-circle" stroke={} cx={} cy={} r={} strokeWidth={stokenW}/>
        <text className="svg-circle-text" x={} y={}>{`${progress}%`}</text>
      </svg>
    </Box>
  )
}
