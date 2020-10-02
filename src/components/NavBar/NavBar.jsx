import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <Navbar className='nav'>
          {user.organization ?
            <>
              <Nav.Link href=" " >Welcome, {user.name}</Nav.Link>
              {/* <Nav.Link href="/invitation" >Invitation Page</Nav.Link> */}
              <Nav.Link href="/posts" >View All Posts</Nav.Link>
              {/* <Nav.Link href="/viewresponses" >View Responses</Nav.Link> */}
              <Nav.Link href="/addpost" >Add A Post</Nav.Link >
              <Nav.Link href=" " onClick={handleLogout}>Log Out</Nav.Link >
            </>
            :
            <>
              <Nav.Link href=" " >Welcome, {user.name}</Nav.Link>
              <Nav.Link href="/posts" >View All Posts</Nav.Link>
              <Nav.Link href=" " onClick={handleLogout}>Log Out</Nav.Link >
            </>
          }
        </Navbar >
        :
        <Navbar className='nav'>
          <Nav.Link href="/login" >Log In</Nav.Link>
          <Nav.Link href="/signup" >Sign Up</Nav.Link>
        </Navbar>
      }
    </>
  )
}

export default NavBar;
