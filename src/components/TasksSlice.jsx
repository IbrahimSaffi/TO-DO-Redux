import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
    name: "task-slice",
    initialState: {
        tasks: [],
        filterType: "all",
        itemToBePlaced :null,
        locToBePlaced:null,
        theme:"dark",
        activeTasks:0
    },
    reducers: {
      changeFilter:(state,action)=>{
        state.filterType=action.payload
      },
        addTask:(state,action)=>{
          let task = {value :action.payload,isComplete:false}  
          state.tasks.push(task)
          state.activeTasks++

        },
        completed:(state,action)=>{
          console.log(action.payload)
          let index;
          state.tasks.forEach((ele,i)=>{
            if(action.payload.value===ele.value){
            index=i
            }
          })
          console.log(index)
          if(state.tasks[index].isComplete){
            state.activeTasks++
          }
          else{
            state.activeTasks--
          }
          state.tasks[index].isComplete 
          =!state.tasks[index].isComplete
        },
        clear:(state,action)=>{
           state.tasks=state.tasks.filter(ele=>!ele.isComplete)            
  
        },
        del:(state,action)=>{
         let delInd= state.tasks.findIndex((ele)=>{
        console.log(ele,action.payload)
         return ele===action.payload
        })
         
        state.tasks.splice(delInd,1)
        },
        dragStart:(state,action)=> {
          state.itemToBePlaced = action.payload
        },
        dragOver:(state,action) =>{
            state.locToBePlaced = action.payload
          },
        drop:(state,action)=>{
         let task = state.tasks.splice(state.itemToBePlaced,1)
         state.tasks.splice(state.locToBePlaced,0,task[0])
         state.itemToBePlaced = null
         state.locToBePlaced=null
        },
        toggle :(state,action)=>{
          state.theme==="dark"?state.theme="light":state.theme="dark"
        }
    }
}
)
export const {changeFilter,addTask,completed,clear,del,dragStart,dragOver,drop,toggle} = TasksSlice.actions
export default TasksSlice.reducer