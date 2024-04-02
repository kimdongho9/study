import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>홈이다</h1>
            <Link to="/about">GO</Link>
        </div>
    );
};

export default Homepage;
