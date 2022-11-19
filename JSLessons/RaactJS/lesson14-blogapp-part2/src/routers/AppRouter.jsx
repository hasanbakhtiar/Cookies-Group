import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import BlogDetails from "../pages/BlogDetails";
import BlogList from "../pages/BlogList";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/blogs" component={BlogList} exact></Route>
          <Route path="/blogs/:id"  component={BlogDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
