import React, {useState, useEffect} from "react";
import './Result.css';
import { useLocation } from "react-router-dom";

function Result() {
    const result = useLocation();
    return (
        <div>
            <h2>{result.state.name}</h2>
        </div>
    );
}
export default Result;