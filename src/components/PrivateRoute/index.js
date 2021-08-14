import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={() =>
        isLoaded(auth) && !isEmpty(auth) ? children : <div>Loading...</div>
      }
    />
  );
};

export default PrivateRoute;
