import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./components/TasksSlice";
const store = configureStore({
    reducer:{
        tasksState:TasksSlice
    }
})
export default store