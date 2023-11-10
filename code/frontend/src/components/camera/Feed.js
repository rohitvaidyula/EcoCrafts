import React from "react";
import './Feed.css';
import Webcam from 'react-webcam';

class Feed extends React.Component {
    render() {
        return (
            <div className = "feed">
                < Webcam 
                  width = {300}
                  height = {300}
                />
                <div>
                    Instructions:
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </div>
            </div>
           
        );
    }
}

export default Feed;