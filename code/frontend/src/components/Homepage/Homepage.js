import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";

import "./Homepage.css";
function Homepage() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [name, setName] = useState(null);
    const [materials, setMaterials] = useState(null);
    const [recipes, setRecipes] = useState(null);

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
        .then(data => {
            setName(data.recipes[0].Name)
            setMaterials(data.recipes[0].Material)
            setRecipes(data.recipes[0].Recipe)
        })
        .catch(error => console.error(error));
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

            <div>
                <p>{name}</p>
                <p>{materials}</p>
                <p>{recipes}</p>
            </div>

            <div className="About">
            <h2><b>About</b></h2>
                <p>
                EcoCrafts is an interactive activity which builds on the environmental guidelines set by UNICEF and the sustainability curriculum outlined in the Mumbai 
                Climate Action Plan to enhance climate change literacy in India. Using ML+real-time object detection, EcoCrafts provides localized upcycling instructions 
                for solid waste management through hands-on activities for children’s education.
                </p>
            </div>
            
            <div className="Upcycling">
            <h2><b>What is upcycling?</b></h2>
                <p>Upcycling is the creative process of transforming discarded or unused materials into new products of higher value or quality. For example, turning paper 
                   cups into an art display!
                </p>
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
            <p>Travel with a parent or guardian.</p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120678.72238046513!2d72.81094272215466!3d19.054499115593238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycling%20centers%20in%20mumbai!5e0!3m2!1sen!2sus!4v1706237174455!5m2!1sen!2sus" width="1000" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <p>Mumbai, India</p>
            </div>

            <div className="Upload">
            <h2><b>Upload Yours</b></h2>
            <a href="https://d06bj4iwir2.typeform.com/to/yRScudbg" target="_blank">
                <img src="./uploadicon.png" width="70px" height="70px"/>
            </a>
            </div>
        </div>
    )
}
export default Homepage;