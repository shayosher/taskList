import React from 'react'
import '../App.css';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function SignIn(props) {
    const nav = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const checkDetails = () => {
        let result = props.users.find((users) => (users.userName == username && users.password == password));
        if (result == undefined) {
            alert('user not found!')
            return
        }
        nav('/allTasks');
        props.setShowMenu(true);
        props.setCurrentUser(username)
    }
    return (
        <div className='signInUpMainDivs'>
            <div id='signInSecondDiv'>
                <h2 className='signInHader'>Hello!</h2>
                <h3 className='signInHader'>Enter <br /> username and password</h3>
                <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='username' />
                <br />
                <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='password' />
                <h5 style={{marginBottom:'0px'}}>New here?</h5> 
                <Link to={'/signUp'}><h4 style={{margin:'0px'}}> Create new user</h4></Link> <br />
                <button onClick={checkDetails}>SIGN IN</button>
                <br /><br />
            </div>
        </div>
    )
}
