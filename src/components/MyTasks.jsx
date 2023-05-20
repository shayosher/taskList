import React from 'react'
import Task from './Task'

export default function MyTasks(props) {
  const filteredTasks = props.tasks.filter((task) => task.worker === props.currentUser);

  return (
    <div className='pagesDivs'>
      <h1>MyTasks</h1>
      <hr style={{ border: 'solid black 2px' }} />

      {filteredTasks.map((val, index) => (
        <button id='allTaskButton'><Task val={val} key={index} index={index} deleteTask={props.deleteTask}/></button>
      ))}    </div>
  )
}
