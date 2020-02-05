import React from "react"
import Svg, { Path, G, Rect } from 'react-native-svg';
function GraduationHat(props) {
  return (
    <Svg height={16} width={20} viewBox="0 0 20 16" {...props}>
      <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Page-2---Main-1-feed" transform="translate(-102.000000, -3890.000000)">
          <G id="Group-3-Copy" transform="translate(0.000000, 3872.000000)">
            <G id="icn-main-menu-course" transform="translate(100.000000, 14.000000)">
              <Rect id="Rectangle-Copy-12" x="0" y="0" width="24" height="24"></Rect>
              <Path d="M5.63636364,13.0488889 L5.63636364,16.6044444 L12,20 L18.3636364,16.6044444 L18.3636364,13.0488889 L12,16.4444444 L5.63636364,13.0488889 Z M12,4 L2,9.33333333 L12,14.6666667 L20.1818182,10.3022222 L20.1818182,16.4444444 L22,16.4444444 L22,9.33333333 L12,4 Z" id="Shape" fill={props.color || "#999999"} fill-rule="nonzero"></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default GraduationHat