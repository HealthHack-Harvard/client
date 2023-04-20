import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Building(props) {
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
        d="M29.219 17.306v3.782l3.276-1.89 1.719 2.976-3.277 1.892 3.277 1.891-1.72 2.977-3.275-1.892v3.783H25.78v-3.783l-3.276 1.892-1.719-2.977 3.276-1.892-3.276-1.89 1.72-2.978 3.275 1.892v-3.783h3.438zM45.547 30.938a.86.86 0 00-.86.859v1.719c0 .474.385.859.86.859h1.719a.86.86 0 00.859-.86v-1.718a.86.86 0 00-.86-.86h-1.718zM44.688 38.672a.86.86 0 01.859-.86h1.719a.86.86 0 01.859.86v1.719a.86.86 0 01-.86.859h-1.718a.86.86 0 01-.86-.86v-1.718zM45.547 44.688a.86.86 0 00-.86.859v1.719c0 .474.385.859.86.859h1.719a.86.86 0 00.859-.86v-1.718a.86.86 0 00-.86-.86h-1.718zM7.734 30.938a.86.86 0 00-.859.859v1.719c0 .474.385.859.86.859h1.718a.86.86 0 00.86-.86v-1.718a.86.86 0 00-.86-.86H7.734zM7.734 37.813a.86.86 0 00-.859.859v1.719c0 .474.385.859.86.859h1.718a.86.86 0 00.86-.86v-1.718a.86.86 0 00-.86-.86H7.734zM6.875 45.547a.86.86 0 01.86-.86h1.718a.86.86 0 01.86.86v1.719a.86.86 0 01-.86.859H7.734a.86.86 0 01-.859-.86v-1.718z"
        fill="#3A8BEB"
      />
      <Path
        d="M17.188 3.438A3.437 3.437 0 0120.625 0h13.75a3.437 3.437 0 013.438 3.438v3.437a3.437 3.437 0 013.437 3.438v13.75h10.313A3.437 3.437 0 0155 27.5v24.063A3.437 3.437 0 0151.562 55H3.438A3.437 3.437 0 010 51.562V27.5a3.437 3.437 0 013.438-3.438H13.75v-13.75a3.437 3.437 0 013.438-3.437V3.437zm6.875 48.124h6.875V41.25h-6.875v10.313zm10.312 0h3.438v-41.25H17.186v41.25h3.438V41.25a3.437 3.437 0 013.438-3.438h6.875a3.437 3.437 0 013.437 3.438v10.313zm0-48.124h-13.75v3.437h13.75V3.437zM41.25 27.5v24.063h10.313V27.5H41.25zm-27.5 24.063V27.5H3.437v24.063H13.75z"
        fill="#3A8BEB"
      />
    </Svg>
  )
}

export default Building