import { configureStore } from "@reduxjs/toolkit";
import apidataReducer from "../reducer/ApiReducer";
import musicListReducer from "../reducer/MusicReducer";
import loginReducer from "../reducer/LoginReducer";

const combineReducer={
  apidata :apidataReducer,
  albumID:musicListReducer,
  isLogged:loginReducer
}


const store = configureStore({
  reducer: combineReducer,
});  


export default store;