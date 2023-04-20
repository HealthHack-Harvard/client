import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Medical(props) {
  return (
    <Svg
      width={55}
      height={55}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.276 30.08L30.08 4.277c5.7-5.701 14.943-5.701 20.643 0 5.701 5.7 5.701 14.943 0 20.643L24.92 50.724c-5.701 5.701-14.944 5.701-20.644 0-5.701-5.7-5.701-14.943 0-20.643zm33.31 2.817l10.558-10.558c4.276-4.275 4.276-11.207 0-15.483s-11.207-4.276-15.483 0L22.103 17.414l15.483 15.483z"
        fill="#FDC535"
      />
    </Svg>
  )
}

export default Medical