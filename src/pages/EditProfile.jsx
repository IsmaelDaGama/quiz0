import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

let EditProfile = () => {
    const [user,setUser]= useState('');
    const navigate = useNavigate();


    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/auth/edit', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({'username': user.username,'email':user.email,'password':user.password,'repeated_password':user.repeated_password})
        })
            .then(res => res.json())
            .then(json => json)
            navigate("/home")
    }
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Welcome</h1>

                        @username
                    </div>
                    <div className="col">
                        <img src={"rap.png"}/>
                    </div>
                </div>
            </div>

            <br></br>

            <form onSubmit={submit}>
                <label htmlFor={"username"}>Username:</label>
                <input name={"username"} type={"text"} value={user.username} onChange={e => setUser({ ...user, username: e.target.value})}/>
                <label htmlFor={"email"}>Email:</label>
                <input name={"email"} type={"text"} value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}/>
                <label htmlFor={"password"}>Password: </label>
                <input name={"password"} type={"password"} value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
                <label htmlFor={"repeat-password"}>Repeat Password: </label>
                <input name={"repeated_password"} type={"password"} value={user.repeated_password} onChange={e => setUser({ ...user, repeated_password: e.target.value })}/>

                <input type={"submit"} value={"Save"} name={"Save"} />
                <label htmlFor={"back"} className={"back"}> Back </label>
            </form>
        </>
    )
}

export default EditProfile;