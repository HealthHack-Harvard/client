import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Medication = (props) => (
  <Svg
    width={props.width || 30}
    height={props.width || 30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.3321 16.4075L16.4075 2.3321C19.517 -0.777366 24.5584 -0.777365 27.6679 2.3321C30.7774 5.44156 30.7774 10.483 27.6679 13.5925L13.5925 27.6679C10.483 30.7774 5.44156 30.7774 2.3321 27.6679C-0.777365 24.5584 -0.777366 19.517 2.3321 16.4075ZM20.5016 17.9437L26.2604 12.1849C28.5925 9.85281 28.5925 6.07174 26.2604 3.73964C23.9283 1.40754 20.1472 1.40754 17.8151 3.73964L12.0563 9.49839L20.5016 17.9437Z"
      fill="#FDC535"
    />
  </Svg>
);
export default Medication;