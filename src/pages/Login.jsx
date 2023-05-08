import React, {useState} from "react";


let Login = userlogin => {
    /*
    const [user,setUser]= useState(userlogin.user)

    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth/login', {
            method: 'GET',
            body: JSON.stringify({user}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => setUser(json.user))
    }*/

    return (
        <>
            <h2>Welcome 🔥</h2>

            <form action={"/home"}  >
                <label htmlFor={"username"}>Username:</label>
                <input name={"user[email]"} type="text"/>
                <label htmlFor={"password"}>Password: </label>
                <input name={"user[password]"} type="password"/>

                <input type={"submit"} value="Login" name={"Login"} />
                <a htmlFor={"sign-up"} className={"sign-up"} href={"/signup"}>Sign up</a>
            </form>
        </>
    )
}

export default Login;