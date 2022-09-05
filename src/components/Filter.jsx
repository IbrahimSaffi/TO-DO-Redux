import {useSelector,useDispatch} from 'react-redux'
import tasksSlice, { changeFilter, clear } from './TasksSlice'
function Filter() {
    let tasksState = useSelector(state=>state.tasksState)
    let dispatch = useDispatch(tasksSlice)
    return (<div className="task-card filter-card">
        <button className="item-num" >{tasksState.activeTasks===0?"No":tasksState.activeTasks} Items left</button>
        <div className="filter-types" >
            <button className={tasksState.filterType==="all"?"active":""} onClick={() => dispatch(changeFilter("all"))} > All</button>
            <button className={tasksState.filterType==="active"?"active":""} onClick={() => dispatch(changeFilter("active"))} >Active</button>
            <button className={tasksState.filterType==="completed"?"active":""} onClick={() => dispatch(changeFilter("completed"))}>Completed</button>
        </div>
        <button className="clr" onClick={()=>{
            dispatch(clear())
            }} >
            Clear Completed
        </button>
    </div>)
}
export default Filter