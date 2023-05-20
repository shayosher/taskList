import React from 'react'
import { useState } from 'react';

export default function History(props) {

  return (
    <div className='pagesDivs'>
      <h1>History</h1> 
      <hr style={{border:'solid black 2px'}}/>
      <div id='historyDiv'>
      {props.history.map((val)=>{
        return  <h3 id='historyH3'><span style={{marginLeft:'10px',marginRight:'20px'}}> Task name: {val.taskName}</span>  worker: {val.worker} <hr /></h3>

      })}
      </div>
      </div>
  )
}
