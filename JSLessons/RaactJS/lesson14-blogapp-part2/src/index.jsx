import React from 'react';
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { addBlog } from "./actions/actionblog";
const store  = configureStore();

// Dispatch Start
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(addBlog({title:"title1",desc:"desc1",img:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"}));
store.dispatch(addBlog({title:"title2",desc:"A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs. Flowers may facilitate outcrossing (fusion of sperm and eggs from different individuals in a population) resulting from cross-pollination or allow selfing (fusion of sperm and egg from the same flower) when self-pollination occurs.",img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);
