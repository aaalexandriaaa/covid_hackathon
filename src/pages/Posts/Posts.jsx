import React, { Component } from 'react'
import * as postAPI from '../../services/post-api'
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        zipcode: [],
        posts: []
    }

    async componentDidMount() {
        const posts = await postAPI.getPostsForZip(this.props.user.zipcode);
        console.log(posts)
        this.setState({ posts })
    }

    render() {
        return (
            <>
                {this.state.posts.map((post, idx) =>
                    <Link
                        key={idx}
                        post={post}
                        to={{
                            pathname: `/posts/${post._id}`
                        }}
                    >
                        <div >
                            <p>Name: {post.description ? post.description : post.name} </p>
                        </div>
                    </Link>
                )}
            </>
        );
    }
}

export default Posts;