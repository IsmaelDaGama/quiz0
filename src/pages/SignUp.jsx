import React, { useEffect, useState } from "react"
import { useRef } from 'react';

const SignUp = () =>{
    const [user,setUser]= useState("");

    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => setUser(json.user))
    }

    return (
        <>
        <h2>Let's sign you up 📬</h2>

        <form onSubmit={submit}>

            <label htmlFor={"username"}>Username: </label>
            <input name={"user[username]"} type={"text"} value={user.username} onChange={ e => setUser({...user, username: e.target.value})}/>


            <label htmlFor={"email"}>Email:</label>
            <input name={"user[email]"} type="email" value={user.email} onChange={e => setUser({...user,email:e.target.value})} />


            <label htmlFor={"password"}>Password: </label>
            <input name={"user[password]"} type={"password"} value={user.password} onChange={e => setUser({...user,password:e.target.value})}/>


            <label htmlFor={"repeated_password"}>Repeat Password: </label>
            <input name={"user[repeated_password]"} type={"password"} value={user.repeated_password} onChange={repeated_password => setUser({...user,repeated_password:e.target.value})}/>


            <input type={"submit"} />
            <label htmlFor={"back"} className={"back"}>Back</label>
        </form>
        </>
    )
}

export default SignUp;