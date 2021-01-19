import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => this.setState({ albums: data }))
    }


    render() {

        const albumItems = this.state.albums.map(album => (
            <div key={ album.id }>
                <div className="posts">
                    <h3 className="title">{ album.title }</h3>
                </div>
            </div>
        ))
        return (
            <>
                <Header />

                <div className="space-top"></div>

                <div className="postsPage">
                    <h1 className="header">Albums from jsonplaceholder:</h1>
                    { albumItems }
                </div>

                <Footer />
            </>
        )
    }
}


export default Albums