import React from 'react';
import { useNavigate } from "react-router-dom"
const Aboutpage = () => {
    const navigate = useNavigate()
    const goToHomepage = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>about이다!</h1>
            <button onClick={goToHomepage}>Go</button>
        </div>
    );
};
a
export default Aboutpage;