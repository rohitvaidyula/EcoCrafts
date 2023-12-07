import React, {useState, useEffect} from "react";
import './Result.css';

function Result() {
    const [label, setLabel] = useState("");

    useEffect(() => {
        fetch('/results').then(res => res.json()).then(data => {
            setLabel(data);
        });
    }, []);


    return (
        <div className="container">
            <p>Selected Label: {label}</p>
        </div>
    );
}
export default Result;