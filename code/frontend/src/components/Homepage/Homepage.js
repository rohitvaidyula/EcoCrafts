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
        <div className="homepage finger-paint-regular">
            <div className="Title">
                <h1>EcoCrafts!</h1>
                <p>Scan your solid waste.</p>
            </div>

            <div className="Camera">
            <Webcam 
                ref={webcamRef}
                height={550}
                width={550}
                minScreenshotHeight={500}
                minScreenshotWidth={500}
                screenshotFormat="image/jpeg"
                />
            </div>

            <div className="ScreenshotButton">
                <Button variant="primary" onClick={captureImg}> Capture Screenshot</Button> 
            </div>

            <div className="About">
            <h2><b>About</b></h2>
                <p>
                EcoCrafts is an interactive activity which builds on the environmental guidelines set by UNICEF and the sustainability curriculum outlined in the Mumbai Climate Action Plan to enhance climate change literacy in India. Using ML+real-time object detection, EcoCrafts provides localized upcycling instructions for solid waste management through hands-on activities for children’s education.
                </p>
            </div>
            
            <div className="Upcycling">
            <h2><b>What is upcycling?</b></h2>
                <p>Upcycling is the creative process of transforming discarded or unused materials into new products of higher value or quality. For example, turning paper cups into an art display!</p>
            </div>
            
            <div className="Activity">
            <h2><b>The Activity</b></h2>
                <p>1.  Scan your solid waste by capturing a screenshot.</p>
                <p>2.  View upcycling recipes.</p>
                <p>3.  Collect additional materials.</p>
                <p>4.  Complete activity.</p>
                <p>5.  Upload personalized recipes.</p>
            </div>

            <div className="Curriculum">
            <h2><b>Curriculum</b></h2>
                <img src="./activityrowimg.png" alt=""/>
            </div>

            <div className="Map">
            <h2><b>Find Materials in Your Locality</b></h2>
            <p>Travel with parent or guardian.</p>
            {/* Insert map here. */}
            <p>Mumbai, India</p>
            </div>

            <div className="Upload">
            <h2><b>Upload Yours</b></h2>
            </div>

            {/* <div className="description">
                <h1>EcoCrafts!</h1>
                <p>Scan your solid waste.</p>
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
                <p><b>The Activity</b></p>
                <p>1.  Scanning your solid waste.</p>
                <p>2.  Identifying the label.</p>
                <p>3.  Scrolling to the activities.</p>
                <p>4.  Uploading your personalized recipes!</p>
            </div>
                <h2><b>About</b></h2>
                <p>
                EcoCrafts is an interactive activity which builds on the environmental guidelines set by UNICEF and the sustainability curriculum outlined in the Mumbai Climate Action Plan to enhance climate change literacy in India. Using ML+real-time object detection, EcoCrafts provides localized upcycling instructions for solid waste management through hands-on activities for children’s education.
                </p>
                <h2><b>What is upcycling?</b></h2>
                <p>Upcycling is a method of taking waste items and turning them into higher quality or value for frequent use. For example, turning a paper cup into an art display!</p>
            </div>



            <p>{label}</p>           */}
        </div>
    )
}
export default Homepage;