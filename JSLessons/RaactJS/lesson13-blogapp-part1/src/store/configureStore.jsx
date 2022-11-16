import { createStore } from "redux";
import { BlogReducer } from "../reducers/reducerblog";

// Store Start
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const store = createStore(BlogReducer);
    return store;
}
// Store End