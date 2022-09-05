import TasksSlice, { completed, del, dragOver, dragStart, drop } from "./TasksSlice"
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
        dispatch(drop())
       }}
      className={`task-card ${props.task.isComplete?"completed":""}`} key={props.index}  >
           <div className="btn-wrapper">
           <button className={`round-btn`} onClick={()=>
            {
              dispatch(completed(props.task))
            
            }} >
            </button>

           </div>
          <p>
             {props.task.value}
          </p>  
          <p className="del" onClick={()=> {
            dispatch(del(props.task))
           }} >
          ✕
          </p>
          </div>
  )
}