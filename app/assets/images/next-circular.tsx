import React from "react"
import Svg, { Circle, G, Polygon } from 'react-native-svg';

const NextCircular = (props) => (
    <Svg width="40px" height="40px" viewBox="0 0 40 40" {...props}>
    <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G id="Page-2---Main-1-feed" transform="translate(-287.000000, -1104.000000)">
            <G id="Group-Copy" transform="translate(16.000000, 766.000000)">
                <G id="Group-5" transform="translate(16.000000, 306.000000)">
                    <G id="icn-next-circular" transform="translate(255.000000, 32.000000)">
                        <Circle id="Oval" fill={props.backgroundColor || "#FFFFFF"} cx="20" cy="20" r="20"></Circle>
                        <Polygon id="Path" fill={props.color || "#999999"} fill-rule="nonzero" points="17 24.59 21.3265857 20 17 15.41 18.3319838 14 24 20 18.3319838 26"></Polygon>
                    </G>
                </G>
            </G>
        </G>
    </G>
    </Svg>
)

export default NextCircular;