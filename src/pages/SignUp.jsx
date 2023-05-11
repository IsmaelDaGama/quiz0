import React, { useEffect, useState } from "react"
import { useRef } from 'react';

const SignUp = () =>{
    const [user,setUser]= useState('');


    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            body: JSON.stringify({"username":user.username,"password":user.password,"email":user.email}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => json)
    }

    return (
        <>
        <h2>Let's sign you up 📬</h2>

        <form onSubmit={submit} action={"/home"}>

            <label htmlFor={"username"}>Username: </label>
            <input name={"username"} type={"text"}
                   value={user.username}
                   onChange={ e => setUser({...user,username: e.target.value})}/>


            <label htmlFor={"email"}>Email:</label>
            <input name={"email"} type="email"
                   value={user.email}
                   onChange={e => setUser({...user,email:e.target.value})} />


            <label htmlFor={"password"}>Password: </label>
            <input name={"password"} type={"password"}
                   value={user.password}
                   onChange={e => setUser({...user,password:e.target.value})}/>


            <label htmlFor={"repeated_password"}>Repeat Password: </label>
            <input name={"repeated_password"} type={"password"}
                   value={user.repeated_password}
                   onChange={e => setUser({...user,repeated_password:e.target.value})}/>


            <input type={"submit"} name="Sign Up"/>
            <a htmlFor={"back"} className={"back"} href={"/home"}>Back</a>
        </form>
        </>
    )
}

export default SignUp;