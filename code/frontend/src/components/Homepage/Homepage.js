import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
function Homepage() {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    
    const captureImg = useCallback(() => {
        const imageString = webcamRef.current.getScreenshot();
        setImgSrc(imageString);
        const requestSetting = {
           method: 'POST',
           headers: {'Content-Type': 'application/json' },
           body: JSON.stringify({
                image: imageString
           })
        };

        fetch('/send_image', requestSetting)
        
        
        const label = ""

        fetch('/results')
            .then(response => response.json())
            .then(data => label = data)
            .then(navigate("/result", {state: label}))
            .catch(error => console.error(error));    
    
    }, [webcamRef]);
   

    return(
        <div className="homepage">
            <div className="description">
                <p>
                    <b>C</b>ircular <b>E</b>conomy <b>M</b>anager is a web-based trash classification tool
                    that informs you, the user, on how your plastic can be upccycled into a 
                    Circular Economy based on crowd-sourced input
                </p>
                <p>Try it out yourself!</p>
            </div>

            <div className="cam-feed">
                <Webcam 
                ref={webcamRef}
                height={450}
                width={450}
                minScreenshotHeight={416}
                minScreenshotWidth={416}
                screenshotFormat="image/jpeg"
                />
                
                <Button variant="primary" onClick={captureImg}> Capture Screenshot</Button> 
                
                Instructions:
                <li>Point the object in front of your web camera.</li>
                <li>Once the object's label appears, scroll to identify its listed recipes on how it can be upcycled.</li>
                <li>The, upload you personalized recipes!</li>
                <li>The model will update in 24 hours.</li>
            </div>

        </div>
    )
}
export default Homepage;