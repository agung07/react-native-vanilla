import React from "react"
import Svg, { Path, G, Circle } from 'react-native-svg';

const PinMapCircular = (props) => (
<Svg width="20" height="20" viewBox="0 0 20 20" {...props}>
    <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Page-2---Main-1-feed" transform="translate(-32.000000, -1000.000000)">
            <G id="Group-Copy" transform="translate(16.000000, 766.000000)">
                <G id="icn-pin-map-circular" transform="translate(16.000000, 234.000000)">
                    <Circle id="Oval" stroke="#999999" fill="#FFFFFF" cx="10" cy="10" r="9.5"></Circle>
                    <Path d="M10,9.06242187 C9.297,9.06242187 8.728,8.47537295 8.728,7.75031253 C8.728,7.0252521 9.297,6.4372031 10,6.4372031 C10.703,6.4372031 11.272,7.0252521 11.272,7.75031253 C11.272,8.47537295 10.703,9.06242187 10,9.06242187 M10,4 C8.401,4 6,4.75006251 6,7.75031253 C6,9.24943745 9.199,14.499875 10,16 C10.801,14.499875 14,9.24943745 14,7.75031253 C14,4.75006251 11.601,4 10,4" id="Page-1" fill="#999999"></Path>
                </G>
            </G>
        </G>
    </G>
</Svg>
)

export default PinMapCircular;