
import Filter from "./Filter"
import TaskCard from "./TaskCard"
import { useSelector } from 'react-redux';

function CardComponent(){   
  let state = useSelector(state=>state.tasksState)
  console.log(state[state.filterType])
     return (
      <div className="outer-task-container">
        <div className="tasks-container">
           {state[state.filterType].length===0?
           <h1 className="empty">No Tasks</h1>: 
          state[state.filterType].map((ele,i)=>{
               return <TaskCard index ={i} />
   
           })}
      </div>
     <Filter/>
     </div>
     )
}
export default CardComponent