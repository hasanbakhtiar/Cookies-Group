import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Dashhboard from "../pages/admin/Dashhboard";
import BlogDetails from "../pages/BlogDetails";
import BlogList from "../pages/BlogList";
import Home from "../pages/Home";
import AddBlog from "../pages/update/AddBlog";
import EditBlog from "../pages/update/EditBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/blogs" component={BlogList} exact></Route>
          <Route path="/blogs/:id"  component={BlogDetails}></Route>
          <Route path="/admin"  component={Dashhboard}></Route>
          <Route path="/add"  component={AddBlog}></Route>
          <Route path="/edit/:id"  component={EditBlog} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
