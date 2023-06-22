import React, { useEffect, useState } from 'react'

const Weather = () => {

    // const [location, setLocation] = useState<string | null>(null)
    const [temp, setTemp] = useState<number | null>(null)

    useEffect(()=> {
        getData()
    }, [])

    const getData = async () => {
        let res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=12.8601&longitude=77.653&current_weather=true")
        let data = await res.json()
        // console.log(data)
        // setLocation()
        setTemp(data.current_weather.temperature)
    }

    return (
    <div>
        The temperature in Bangalore is {temp} degree celcius
    </div>
  )
}

export default Weather