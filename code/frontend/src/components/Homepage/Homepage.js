import React from "react";
import Description from "../Description";
import Webcam from "react-webcam";
function Homepage() {
    return(
        <div className="homepage">
            <div className="description container">
                <Description />
            </div>

            <div className="cam-feed container">
                <Webcam />
            </div>
        </div>
    )
}
export default Homepage;