import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";

import "./Homepage.css";

function Homepage() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [name, setName] = useState(null);
    const [materials, setMaterials] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const libraries = ['places'];
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [address, setAddress] = useState(null);

    const mapContainerStyle = {
        width: '40vw',
        height: '40vh',
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log("map don't work cuhz");
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }
            )
        }
    }

    getLocation();

    const center = {
        lat: latitude,
        lng: longitude
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCnsJR0l_GjIBQ6GGPgoGMgWue8SWJFytQ',
        libraries,
    });


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

        fetch('https://places.googleapis.com/v1/places:searchText', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': 'AIzaSyCnsJR0l_GjIBQ6GGPgoGMgWue8SWJFytQ',
            'X-Goog-FieldMask': 'places.displayName,places.formattedAddress'
            },
            body: `{\n  "textQuery" : "Plastic Recycling Centers",\n  "openNow": true,\n  "maxResultCount": 3,\n  "locationBias": {\n    "circle": {\n      "center": {"latitude": ${latitude}, "longitude": ${longitude}},\n      "radius": 500.0\n    }\n  },\n}`
        }).then(response => response.json())
        .then(data => console.log(typeof(data.places[1].displayName.text)));   
        
        JSON.stringify(address);

        setDefaults({
            key: "AIzaSyCnsJR0l_GjIBQ6GGPgoGMgWue8SWJFytQ",
            language: "en"
    })

        fromAddress(address)
            .then(({results}) => {
                const {lat, lng} = results[0].geometry.location;
                console.log(lat, lng);
            })
            .catch(console.error);

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
                    <Marker position={center} />
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