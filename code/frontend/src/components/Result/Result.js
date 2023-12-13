import React, {useState, useEffect} from "react";
import './Result.css';
import { useLocation } from "react-router-dom";

function Result() {
    const [label, setLabel] = useState("");
    const state = useLocation();
    return (
        <div className="container">
            
        </div>
    );
}
export default Result;