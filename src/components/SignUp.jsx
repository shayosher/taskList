import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
    const nav = useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const register = () => {
        if (userName == '') {
            alert('enter user name!')
            return
        }
        if (password == '') {
            alert('enter password!')
            return
        }
        if (password != conPassword) {
            alert('passwords are not the same!')
            return
        }
        props.addNewUser(userName, password)
        nav('/');
    }
    return (
        <div className='signInUpMainDivs'>
            <div id='signUpSecondDiv'>
            <h2 className='signInHader'>Welcome!</h2>
            <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter user name' /> <br />
            <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Enter password' /> <br />
            <input onChange={(e) => { setConPassword(e.target.value) }} type="text" placeholder='Confirm password' /> <br /><br />
            <button onClick={register}>Register</button>
            <br /><br />
            </div>
        </div>
    )
}
