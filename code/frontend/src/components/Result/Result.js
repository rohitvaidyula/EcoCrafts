import React, {useState, useEffect} from "react";
import './Result.css';
import { useLocation } from "react-router-dom";

function Result() {
    const result = useLocation();
    const data = result.state
    return (
        <div>
            <h2>{data.label}</h2>
        </div>
    );
}
export default Result;