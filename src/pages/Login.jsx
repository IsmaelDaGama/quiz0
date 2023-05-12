import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

let Login = () => {
    const [user,setUser]= useState('');
    const navigate = useNavigate();


    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth/signup', {
            method: 'GET',
            body: JSON.stringify({"email":user.email,"password":user.password}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => json)
        //navigate("/home")

    }
    return (
        <>
            <h2>Welcome 🔥</h2>

            <form action={submit}  >
                <label htmlFor={"email"}>Email:</label>
                <input name={"email"} type="email"
                       value={user.email}
                       onChange={e => setUser({...user,email:e.target.value})} />

                <label htmlFor={"password"}>Password: </label>
                <input name={"password"} type={"password"}
                       value={user.password}
                       onChange={e => setUser({...user,password:e.target.value})}/>

                <input type={"submit"} name={"Login"} />
                <a htmlFor={"sign-up"} className={"sign-up"} href={"/signup"}>Sign up</a>
            </form>
        </>
    )
}

export default Login;