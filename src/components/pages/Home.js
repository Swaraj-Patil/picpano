import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header'
import FetchAPOD from '../FetchAPOD'
import Footer from '../Footer'

const Home = ({handleLogout}) => {
    return (
        <Router>
            <div>
                <Header />
                

                <div className="space-top"></div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>

                <FetchAPOD />

                <Footer />
            </div>
        </Router>

    )
}

export default Home;