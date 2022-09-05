import CardComponent from "./components/CardComponent.jsx"
import { useDispatch,useSelector } from 'react-redux'

import "./index.css"
import tasksSlice, { addTask, toggle } from "./components/TasksSlice.jsx";

    function App(){
      let state = useSelector(state=>state.tasksState)
      let dispatch = useDispatch(tasksSlice)
  return (
    <div className ={`${state.theme} app`}>

    <div className="main-container">
      <div className="back-pic" ></div>
      <div className="header" >
        <h1>TODO</h1>
        <div onClick={()=>dispatch(toggle())} className="icon"></div>
      </div>
      <div className="input-btn" >
        <div className="btn-wrapper">
        <button className="round-btn" ></button>

        </div>
      <input onKeyDown={(e)=>{
        if(e.key==="Enter"){
          if(e.target.value.length>0){
           dispatch(addTask(e.target.value))
            e.target.value=""
          }
        }
      }} type="text" placeholder="Create a new todo..." />

      </div>
          <CardComponent/>
          <p className="drag">
            Drag and drop to reorder list
          </p>
    </div>
          </div>
  )
}

export default App;
