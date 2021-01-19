import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            comments: []
        }
    }


    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))

        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => this.setState({ comments: data }))
    }


    render() {

        
            

        const postItems = this.state.posts.map(post => (
            <div key={ post.id }>
                <div className="posts">
                    <h3 className="title">{ post.title }</h3>
                    <p className="body">{ post.body }</p>
                    
                </div>
            </div>
        ))
        /*
        var showComments = this.state.comments.map(comment => (
            <div key={ comment.id }>
                <div>
                    <h3>{comment.name}</h3>
                </div>

            </div>
        ))

        
        const commentItems = this.state.comments.map(comment => (
            <div key={ comment.id }>
                <div className="posts">
                    <h3 className="title">{ comment.name }</h3>
                    <p className="body">{ comment.email }</p>
                </div>
            </div>
        ))
*/

        return (
            <>
                <Header />

                <div className="space-top"></div>

                <div className="postsPage">
                    <h1 className="header">Posts from jsonplaceholder:</h1>
                    { postItems }
                </div>

                <Footer />
            </>
        )
    }
}


export default Posts