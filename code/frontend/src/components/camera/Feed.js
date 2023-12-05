import React from "react";
import './Feed.css';
import Webcam from 'react-webcam';

class Feed extends React.Component {
    render() {
        return (
            <div className = "feed">
                < Webcam 
                 className="video-feed" 
                />
                <div className="instructions">
                    Instructions:
                    <li>Point the object in front of your web camera.</li>
                    <li>Once the object's label appears, scroll to identify its listed recipes on how it can be upcycled.</li>
                    <li>The, upload you personalized recipes!</li>
                    <li>The model will update in 24 hours.</li>
                </div>
            </div>
           
        );
    }
}

export default Feed;