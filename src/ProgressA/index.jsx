import { Box, Text } from '@chakra-ui/layout';
import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

export default function ProgressA(props) {
  const {
    size = 300,
    progress = 0,
    stokenW = 12,
    circleOneStroke = '#eee',
    circleTwoStroke = 'purple',
  } = props;
  const center = size / 2;
  const radiu = center - stokenW / 2;
  const circumference = 2 * Math.PI * radiu;
  const [offset, setOffset] = useState(0);
  const svgRef = useRef();
  const oldProgress = useRef(progress);
  const [time, setTime] = useState(1);

  useEffect(() => {
    const newTime = Math.abs(oldProgress.current - progress);
    oldProgress.current = progress;
    setTime(12 * (100 - newTime));
  }, [progress]);
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference; // 百分比乘以圆周，等于当前百分比对应的显示部分值
    setOffset(progressOffset);
    svgRef.current.style = `transition: stroke-dashoffset ${time}ms ease-in-out;`;
  }, [setOffset, circumference, progress, offset]);

  return (
    <Box>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radiu}
          strokeWidth={stokenW}
        />
        <circle
          className="svg-circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radiu}
          strokeWidth={stokenW}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          ref={svgRef}
        />
        <text
          className="svg-circle-text"
          x={center}
          y={center}
          dominantBaseline="middle"
        >
          {progress}%
        </text>
      </svg>
    </Box>
  );
}
