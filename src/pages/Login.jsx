import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

let Login = () => {

    const navigate = useNavigate();
    const [userCookie, setUserCookie] = useCookies(['User']);
    const [user,setUser]= useState('');

    //LOGIN QUERY
    //(HTTP GET REQUEST USING SAVING THE DATA IN A COOKIE)
    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
        }).then(res => res.json())
          .then(json => {
              setUserCookie('User',json)
              console.log(userCookie);
              navigate("/home")
            /*if(res.status == 200){
                //setCookie('User',res)
                console.log(res);
                navigate("/home");
            }*/
            //console.log('response.status: ', res.status)
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

                <input type={"submit"} name={"Login"}/>
                <a htmlFor={"sign-up"} className={"sign-up"} href={"/signup"}>Sign up</a>
            </form>
        </>
    )
}

export default Login;