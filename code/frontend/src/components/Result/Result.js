import React, {useState, useEffect} from "react";
import './Result.css';
import { useLocation } from "react-router-dom";

function Result() {
    const [label, setLabel] = useState("");
    const result = useLocation();
    return (
        <div className="container">
            Detected Label: {result.state.label}
        </div>
    );
}
export default Result;