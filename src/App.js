import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./redux/store";
import Chat from "./Pages/Chat";
import PrivateRoute from "./components/PrivateRoute";

const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const Root = () => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/chat");
      } else {
        history.push("/");
      }
    });
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/chat">
        <Chat />
      </PrivateRoute>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

function App() {
  return (
    <>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </>
  );
}

export default App;
