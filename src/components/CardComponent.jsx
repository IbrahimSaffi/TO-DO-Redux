
import Filter from "./Filter"
import TaskCard from "./TaskCard"
import { useSelector } from 'react-redux';

function CardComponent(){   
     function filteredList(filterType){
          return state.tasks.filter(ele=>{
            if(filterType ==="active"){
               return ele.isComplete ===false
            }
            else if(filterType ==="completed"){
             return ele.isComplete ===true
            }
            else{
              return ele
            }
          })
         }
     
  let state = useSelector(state=>state.tasksState)
     return (
      <div className="outer-task-container">
        <div className="tasks-container">
           {filteredList(state.filterType).length===0?
           <h1 className="empty">No Tasks</h1>: 
          filteredList(state.filterType).map((ele,i)=>{
               return <TaskCard index ={i} task={ele} />
   
           })}
      </div>
     <Filter/>
     </div>
     )
}
export default CardComponent