import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


import "./Homepage.css";
function Homepage() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [name, setName] = useState(null);
    const [materials, setMaterials] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const libraries = ['places'];
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyACPaWJ8S3RTCwrPCMPhqjtIYoASdAX4F0',
        libraries,
    });

    const mapContainerStyle = {
        width: '50vw',
        height: '50vh',
    };

    useEffect(() => {
        getLocation();
    }, []);

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
   
    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log("map don't work cuhz");
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(position.coords.latitude);
                    setLng(position.coords.longitude);
                }
            )
        }
    }
    const center = {
        lat: lat,
        lng: lng,
    }

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if(!isLoaded) {
        return <div>Loading Map</div>;
    }
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
                EcoCrafts offers an engaging educational experience, introducing home-grown Indian agricultural, recreational, and lifestyle techniques to creatively upcycle solid waste. Through crowdsourcing methods and real-time object detection, EcoCrafts scales these recipes to a broader public, contributing to a more environmentally friendly and sustainable world.
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
                <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                >

                </GoogleMap>
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