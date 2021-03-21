import React from 'react';
import Unmasked from "../pictures/red.png";
import Masked from "../pictures/redmask.png"

const Unhealthy = ({x, y, speed, angle, mask}) => {
    const style = {
        backgroundImage: `url(${(mask === 1 ? Masked : Unmasked)})`,
        backgroundColor: "red",
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        height: `${(mask === -1 ? 10 : 6)}px`,
        width: "10px",
        // borderRadius: "50%",
        // borderBottom: `${(mask === -1 ? 0 : 4)}px solid white`,
    };
    return (
        <div style={{
            backgroundImage: `url(${(mask === 1 ? Masked : Unmasked)})`,
            backgroundSize: "cover",
            position: 'fixed',
            left: `${x}px`,
            top: `${y}px`,
            height: "50px",
            width: "50px",
        }}></div>
    )
}
export default Unhealthy