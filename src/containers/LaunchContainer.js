import React from "react";
import LaunchSelector from "../components/LaunchSelector.js";
import LaunchDetails from "../components/LaunchDetails.js";

const LaunchContainer = () => {
    return (
        <>
            <h1>SpaceX Launch Details</h1>
            <LaunchSelector/>
            <LaunchDetails/>
        </>
    )
}

export default LaunchContainer;