import React from "react";
import "./Weather.css";


const Weather = 
    ({ 
        city, 
        country,
        temp,
        temp_max,
        temp_min,
        description,
        loadWeather
    }) => {
        return (
            <>
                <div className="box">
                    <form onSubmit={loadWeather}>
                        <input type="text" name="city" placeholder="Enter city"/>
                        <input type="text" name="country" placeholder="Enter country" />
                        <span className="button"><button type="submit" value="search">Get Weather</button></span>
                    </form>
                </div>
                <div className="display-weather">
                    <div>
                        { temp ? <span><h2>{ Math.floor(temp) }&deg;</h2></span> : null }
                        { city && country ? <span><h2>{ city }, { country }</h2></span> : null }
                        { temp_min && temp_max 
                            ? <span><h3>{ Math.floor(temp_min) }&deg; - { Math.floor(temp_max) }&deg;</h3></span>
                            : null 
                        }
                        <span><h3>{ description }</h3></span>
                    </div>
                </div>
            </>
        );
}

export default Weather;