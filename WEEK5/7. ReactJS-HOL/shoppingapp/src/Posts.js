import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {

    const data = [
        {
            id: 1,
            title: "React Introduction",
            body: "React is a JavaScript library used for building user interfaces."
        },
        {
            id: 2,
            title: "Component Lifecycle",
            body: "componentDidMount() is called after the component is rendered."
        },
        {
            id: 3,
            title: "Fetch API",
            body: "Fetch API is used to retrieve data from a server."
        }
    ];

    this.setState({
        posts: data
    });
}

    componentDidMount() {

        this.loadPosts();

    }

    componentDidCatch(error) {

        alert(error);

    }

    render() {

        return (

            <div>

                <h1>Blog Posts</h1>

                {
                    this.state.posts.map(post => (

                        <div key={post.id}>

                            <h3>{post.title}</h3>

                            <p>{post.body}</p>

                            <hr/>

                        </div>

                    ))
                }

            </div>

        );

    }

}

export default Posts;