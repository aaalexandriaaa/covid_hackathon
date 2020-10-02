import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import Invitation from "../../pages/Invitation/Invitation"
import Welcome from "../../pages/Welcome/Welcome"
import ViewPosts from "../../pages/ViewPosts/ViewPosts"
import AddPost from "../../pages/AddPost/AddPost"
import ViewResponses from "../../pages/ViewResponses/ViewResponses"

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/welcome"
          render={() => (
            user ?
              <Welcome />
              :
              <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/invitation"
          render={() => (
            user ?
              <Invitation />
              :
              <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/viewposts"
          render={() => (
            user ?
              <ViewPosts />
              :
              <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/addpost"
          render={({ match, history }) => (
            authService.getUser() ?
              <AddPost
                match={match}
                history={history}
                user={this.state.user}
              />
              :
              <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/viewresponses"
          render={() => (
            user ?
              <ViewResponses />
              :
              <Redirect to="/login" />)}
        />
      </>
    );
  }
}

export default App;
