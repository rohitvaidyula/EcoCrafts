import React, {useCallback, useRef, useState} from "react";
import './Feed.css';
import Webcam from 'react-webcam';
import Result from "../Result/Result";
import Button from 'react-bootstrap/Button';


const Feed = () => {
    return (
        <div className="container">
            <div className="camera">
                <Webcam 
                height={640}
                width={640}
                minScreenshotHeight={640}
                minScreenshotWidth={640}
                screenshotFormat="image/jpeg"
                />

                <Button 
                variant="primary">

                    Capture Screenshot
                
                </Button>{' '}
            </div>

            <div className="instructions">
                Instructions:
                <li>Point the object in front of your web camera.</li>
                <li>Once the object's label appears, scroll to identify its listed recipes on how it can be upcycled.</li>
                <li>The, upload you personalized recipes!</li>
                <li>The model will update in 24 hours.</li>
            </div>
        </div>
    )
};

export default Feed;