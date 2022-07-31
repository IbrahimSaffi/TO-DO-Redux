import TasksSlice, { completed, del, dragOver, dragStart, drop, filter } from "./TasksSlice"
import { useDispatch,useSelector } from 'react-redux'


export default function TaskCard(props) {
  let dispatch = useDispatch(TasksSlice)
  let state = useSelector(state=>state.tasksState)
  return (
      <div
       style={
         {
          display:`${state.itemToBePlaced===props.index?"none":"flex"}`,
        filter:`${state.locToBePlaced===props.index?"brightness(50%)":"brightness(100%)"}`
        }
      } 
      onDrag={()=>{
        dispatch(dragStart(props.index))
      }}
       onDragOver={(e)=>{
        e.stopPropagation();
        e.preventDefault()
        dispatch(dragOver(props.index))
      }} 
       onDragEnd={()=>{
        console.log("drop")
        dispatch(drop())
        dispatch(filter())
       }}
      className={`task-card ${state[state.filterType][props.index].isComplete?"completed":""}`} key={props.index}  >
           <div className="btn-wrapper">
           <button className={`round-btn`} onClick={()=>
            {
              dispatch(completed(props.index))
              dispatch(filter())
            
            }} >
            </button>

           </div>
          <p>
             {state[state.filterType][props.index].value}
          </p>  
          <p className="del" onClick={()=> {
            dispatch(del(props.index))
            dispatch(filter())
           }} >
          ✕
          </p>
          </div>
  )
}