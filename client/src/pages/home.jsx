import React from "react";
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const { message } = location.state || {};

    return (
        <>
        <div>this is the Home screen</div>
        <div>The layout of this screen is {message}</div>
        </>
    );
}

export default Home;