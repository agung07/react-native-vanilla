import React from "react"
import Svg, { Path, G, Polygon } from 'react-native-svg';
const Clock = (props) => (
    <Svg width="16px" height="16px" viewBox="0 0 16 16" {...props} >
        <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <G id="Page-2---Main-1-feed" transform="translate(-293.000000, -794.000000)" fill={props.color || "#999999"} fill-rule="nonzero">
                <G id="Group-Copy" transform="translate(16.000000, 766.000000)">
                    <G id="icn-clock-grey" transform="translate(277.000000, 28.000000)">
                        <Path fill={props.color || "#999999"}  d="M7.992,0 C3.576,0 0,3.584 0,8 C0,12.416 3.576,16 7.992,16 C12.416,16 16,12.416 16,8 C16,3.584 12.416,0 7.992,0 Z M8,14.4 C4.464,14.4 1.6,11.536 1.6,8 C1.6,4.464 4.464,1.6 8,1.6 C11.536,1.6 14.4,4.464 14.4,8 C14.4,11.536 11.536,14.4 8,14.4 Z" id="Shape"></Path>
                        <Polygon fill={props.color || "#999999"}  id="Path" points="8.4 4 7.2 4 7.2 8.8 11.4 11.32 12 10.336 8.4 8.2"></Polygon>
                    </G>
                </G>
            </G>
        </G>
    </Svg>
);
export default Clock;