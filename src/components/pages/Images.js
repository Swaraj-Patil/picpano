import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import cover2 from '../cover2.jpg'

const Images = () => {

    const [photo, setPhoto] = useState('')
    const [clientId, setClientId] = useState('6CDcNm6_GbqyVqejLDt_48nwczJtnwZ75p_8f_nQPD0')

    const [results, setResult] = useState([])
    function handleChange(e) {
        setPhoto(e.target.value)
    }

    function handleSubmit(e) {
        console.log(photo)
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId
        axios.get(url).then(res => {
            console.log(res)
            setResult(res.data.results)
        })
    }

    return (
        <>
            <Header />

            <div className="space-top"></div>
            <div className="imagesPage">
                <img className="cover" src={cover2} alt="Cover"/>
                <h1>UNSPLASH STOCK IMAGES</h1>
                <div className="search-box">
                    <input className="search-text" onChange={handleChange} type="text" name="photo" placeholder="Search Something..." />
                    <a className="search-btn" onClick={handleSubmit}>
                        <i className="fas fa-search"></i>
                    </a>
                </div>
                <div className="result-container">
                    {results.map((photo) => (
                        <img className="single-image" src={photo.urls.small} />
                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Images