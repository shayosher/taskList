import React from 'react'

export default function Detail(props) {

    return (
        <div>
            <h3> <span style={{textDecoration:'overline'}}>Description:</span> <br /><br /> {props.val.description}</h3>
            <button onClick={()=>{props.deleteTask(props.val)}}>task complete</button>
            <br /><br />
        </div>
    )
}
