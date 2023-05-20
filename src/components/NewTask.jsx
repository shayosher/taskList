import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewTask(props) {
  const nav = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [worker, setWorker] = useState('');
  const [description, setDescription] = useState('');
  const addTask = () => {
    if (taskName == '') {
      alert('Insert task name');
      return
    }
    if (worker == '') {
      alert('Insert worker name');
      return
    }
    if (description == '') {
      alert('Insert description');
      return
    }
    props.addNewTask(taskName, worker, description);
    alert('Task added')
    nav('/allTasks')
  }
  return (
    <div className='pagesDivs'>
      <h1>New task</h1>
      <hr style={{ border: 'solid black 2px' }} />
      <div id='newTaskDiv'>

        <input onChange={(e) => { setTaskName(e.target.value) }} type="text" placeholder='Task name' />

        <select onChange={(e) => { setWorker(e.target.value) }}>
          <option disabled selected>Worker name</option>
          {props.users.map((val) => {
            return <option value={val.userName}>{val.userName}</option>
          })}
        </select>

        <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" cols="30" rows="10" placeholder='Task description'></textarea>

        <button onClick={addTask}>Add new task</button>
      </div>
    </div>
  )
}
