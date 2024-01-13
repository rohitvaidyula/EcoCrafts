import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
function Homepage() {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [label, setLabel] = useState(null);

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

        fetch('/results')
        .then(response => response.json())
        .then((data) => {
            setLabel(data);
            console.log(data);
        })

        console.log(label)
    }, [webcamRef]);
   
    return(
        <div className="homepage">
            <div className="description">
                <p>
                    <b>EcoCrafts</b> is an interactive EdTech platform which builds on the sustainability guidelines set by <b>UNICEF</b> and the <b>Majhi Vasundhara</b> curriculum to enhance climate literacy in India. Using ML+real-time object detection, EcoCrafts provides upcycling instructions for solid waste management through hands-on activities for children’s education.
                </p>
                <h><b>What is upcycling?</b></h>
                <p>Upcycling is a method of taking waste items and turning them into higher quality or value for frequent use. For example, turning a paper cup into an art display!</p>
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
                <p><b>Begin by:</b></p>
                <p>1.  Scanning your solid waste.</p>
                <p>2.  Identifying the label.</p>
                <p>3.  Scrolling to the activities.</p>
                <p>4.  Uploading your personalized recipes!</p>
            </div>

            <p>{label}</p>          
        </div>
    )
}
export default Homepage;