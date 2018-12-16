import { Redirect } from "react-router";
import React from "react";

const withRedirect = Component => ({shouldRedirect, to, props}) => 
  shouldRedirect ? <Redirect to={to} /> : React.createElement(Component, Object.assign({}, props, {}));

export { withRedirect };