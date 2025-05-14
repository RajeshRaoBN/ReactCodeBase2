import React from 'react'

const Weather = () => {
    let temp = 15

    if(temp < 15) {
        return <h1>It is cold outside</h1>
    } else if (temp >= 15) {
        return <h1>It is nice outside</h1>
    }
}

export default Weather