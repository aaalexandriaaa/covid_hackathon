import React, { Component } from 'react'
import * as postAPI from '../../services/post-api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class ViewPosts extends Component {
  state = {
    post: {
      images: []
    }
  }
  // this.props.value
  async componentDidMount() {
    console.log("YOYOYO")
    const post = await postAPI.viewPosts(this.props.match.params.id)
    console.log(post)
    this.setState({ post })
  }
  render(props) {
    const post = this.props.post
    const user = this.props.user
    return (
      <>
        {/* <h1>{post.name}</h1> */}
        <Container className="project-details-container">
          <Row id='project-row'>
            {/* <p>Description: {post.description}</p> */}
          </Row>
        </Container>
      </>
    );
  }
}

export default ViewPosts;
