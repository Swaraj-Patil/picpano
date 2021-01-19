import React from 'react'
import { useEffect, useState } from 'react'

const apiKey = process.env.REACT_APP_NASA_KEY
function FetchAPOD() {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();


        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            )
            const data = await res.json()
            setPhotoData(data)
        }
    }, [])

    if(!photoData) return <div></div>

        return (
            <>
                <h1 className="apod-title">Astronomy Picture of the Day - Nasa</h1>
                <div className="nasaPhoto">
                    <img
                        src={photoData.url}
                        alt={photoData.title}
                    />
                    <div>
                        <h1>{photoData.title}</h1>
                        <p className="date">{photoData.date}</p>
                        <p className="explanation">{photoData.explanation}</p>
                    </div>
                </div>
            </>

        );
    }


export default FetchAPOD;