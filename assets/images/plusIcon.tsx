import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Plus(props) {
  return (
    <Svg
      width={props.width||17}
      height={props.width||15}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.125 0C.951 0 0 .84 0 1.875v11.25C0 14.161.951 15 2.125 15h12.75C16.049 15 17 14.16 17 13.125V1.875C17 .839 16.049 0 14.875 0H2.125zm6.906 4.219V7.03h3.188c.293 0 .531.21.531.469s-.238.469-.531.469H9.03v2.812c0 .26-.238.469-.531.469-.293 0-.531-.21-.531-.469V7.97H4.78c-.293 0-.531-.21-.531-.469s.238-.469.531-.469H7.97V4.22c0-.26.238-.469.531-.469.293 0 .531.21.531.469z"
        fill="#DC6B72"
      />
    </Svg>
  )
}

export default Plus
