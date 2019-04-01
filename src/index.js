import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';

import Home from "./components/screen/Home";
import NewsPicksHeader from "./components/item/NewsPicksHeader";

import "semantic-ui-css/semantic.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
//import { setUser, clearUser } from "./actions";
//import { getUserById } from "./api.js";

const store = createStore(
  rootReducer, composeWithDevTools()
);

class App extends React.Component {

  componentDidMount() {   

  }

  
  render() {
    return (
      <>
        <NewsPicksHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          {/*
            <Route path="/login" component={Login} /> 
            <Route path="/register" component={Register} />
            <Route path="/i/moments" component={Moments} />
            <Route path="/i/notifications" component={Notifications} />
            <Route path={`/:username/following`}  component={UserProfileFollowing} />
            <Route path={`/:username/followers`}  component={UserProfileFollowers} />
            <Route path={`/:username/likes`}  component={UserProfileLikes} />
            <Route path={`/:username/lists`}  component={UserProfileLists} />
            <Route path={`/:username/moments`}  component={UserProfileMoments} />
            <Route path={`/:username`}  component={UserProfile} />
          */}
        </Switch>
      </>
    );
  } 
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});


const RootWithAuth = withRouter(
  connect(
    mapStateToProps,
  )(App)
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
