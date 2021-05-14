import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found" >
            <h2>ÜZGÜNÜM</h2>
            <p>Bu sayfa bulunamadı !!!</p>
            <button><Link to="/" ><h2>Anasayfaya geri dön</h2></Link></button>
        </div>
    )
}

export default NotFound;
