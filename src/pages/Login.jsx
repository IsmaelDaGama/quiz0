import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

let Login = () => {
    const [user,setUser]= useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['User']);



    const handle = () => {
        setCookie('User', user, { path: '/waitingroom' });

    };

    const submit = e => {
        e.preventDefault()

        fetch(`http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        }).then(res => {
            if(res.status == 200){
                setCookie('User',res)
                navigate("/home");
            }
            console.log(res.json());
            console.log('response.status: ', res.status)


        })
    }

    return (
        <>
            <h2>Welcome 🔥</h2>

            <form onSubmit={submit}  >
                <label htmlFor={"email"}>Email:</label>
                <input name={"email"} type="email"
                       value={user.email}
                       onChange={e => setUser({...user,email:e.target.value})} />

                <label htmlFor={"password"}>Password: </label>
                <input name={"password"} type={"password"}
                       value={user.password}
                       onChange={e => setUser({...user,password:e.target.value})}/>

                <input type={"submit"} name={"Login"} onClick={handle}/>
                <a htmlFor={"sign-up"} className={"sign-up"} href={"/signup"}>Sign up</a>
            </form>
        </>
    )
}

export default Login;