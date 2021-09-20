import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    //Metodos
    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
        this.setState({posts:data});
    }

    render() {
        return (
            <div>
                {
                this.state.posts.map(post => {

                    return <div key={post.id}>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                    })
                }
            </div>
        )
    }
}

