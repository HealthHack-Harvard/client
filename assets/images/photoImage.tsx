import * as React from "react"
import Svg, { Circle, Ellipse } from "react-native-svg"

function PhotoImg(props) {
  return (
    <Svg
      width={140}
      height={140}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={70} cy={70} r={70} fill="#DC6B72" />
      <Circle cx={70} cy={63} r={28} fill="#E7969B" />
      <Ellipse cx={70} cy={119.35} rx={39.2} ry={20.65} fill="#E7969B" />
    </Svg>
  )
}

export default PhotoImg
