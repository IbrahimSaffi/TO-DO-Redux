import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
    name: "task-slice",
    initialState: {
        all: [],
        filterType: "all",
        completed:[],
        active:[],
        itemToBePlaced :null,
        locToBePlaced:null,
        theme:"dark"
    },
    reducers: {
      changeFilter:(state,action)=>{
        state.filterType=action.payload
      },
        filter:(state,action)=> {
             state.completed = state.all.filter(ele=>{
                return ele.isComplete
             })    
                state.active = state.all.filter(ele=>{
                   return !ele.isComplete
                })
        },
        addTask:(state,action)=>{
          let task = {value :action.payload,isComplete:false}  
          state.all.push(task)

        },
        completed:(state,action)=>{
          state.all[action.payload].isComplete 
          =!state.all[action.payload].isComplete
        },
        clear:(state,action)=>{
          //Problem here
           state.all = state.active.slice()            
  
        },
        del:(state,action)=>{
        state.all.splice(action.payload,1)
        },
        dragStart:(state,action)=> {
          state.itemToBePlaced = action.payload
        },
        dragOver:(state,action) =>{
            state.locToBePlaced = action.payload
          },
        drop:(state,action)=>{
         let task = state[state.filterType].splice(state.itemToBePlaced,1)
         state[state.filterType].splice(state.locToBePlaced,0,task[0])
         state.itemToBePlaced = null
         state.locToBePlaced=null
        },
        toggle :(state,action)=>{
          state.theme==="dark"?state.theme="light":state.theme="dark"
        }
    }
}
)
export const {filter,changeFilter,addTask,completed,clear,del,dragStart,dragOver,drop,toggle} = TasksSlice.actions
export default TasksSlice.reducer