import React from 'react'
import Task from './Task'

export default function AllTasks(props) {
  return (
    <div className='pagesDivs'>
      <h1>All Tasks</h1>
      <div id='AllTasksDiv'>
        <hr style={{ border: 'solid black 2px' }} />
        {props.tasks.map((val, index) => {
          return <button id='allTaskButton'><Task val={val} index={index} key={index} deleteTask={props.deleteTask}/></button>
        })}
      </div>
    </div>
  )
}
