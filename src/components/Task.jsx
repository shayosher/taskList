import React from 'react'
import { useState } from 'react';
import Detail from './Detail';


export default function Task(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const [showDetails, setShowDetails] = useState(false);

    const show = () => {
        if (showDetails) {
            return <Detail val={props.val} index={props.index} deleteTask={props.deleteTask}/>
        }
    }
    return (
        <div id='taskDiv'>
            <h3 id='taskH3' className="btn btn-primary"><span style={{marginLeft:'10px',marginRight:'20px'}}> Task name: {props.val.taskName}</span>  worker: {props.val.worker} <button id='taskbutton' onClick={() => {setShowDetails(!showDetails); toggleExpanded() }}> {isExpanded ? (<span>&#9650;</span> ):( <span>&#9660;</span>)}</button></h3>
            {show()}
        </div>
    )
}
