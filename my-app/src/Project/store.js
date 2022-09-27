import reducer from "./reducer";
import { createStore } from "redux";

const initialst = {loggedin:false};
const mystore = createStore(reducer,initialst)

export default mystore;