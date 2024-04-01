import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage'
import Aboutpage from './page/Aboutpage'
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Aboutpage/>}>
                <Route path="/about" element={<Homepage/>}>
            </Routes>
        </div>
);
}

export default App;
