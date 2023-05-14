import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

let EditProfile = () => {
    const navigate = useNavigate();
    const [username,setUsername]= useState('');//Print Username in the EditProfile page
    const [user,setUser]= useState('');// Saves the form data to the PUT Request
    const [userEmail,setUserEmail]= useState(''); // Save User Email from Home page with cookies help
    const [cookies] = useCookies(['User']);
    const cookieValue = cookies.User;


    //HOME QUERY => JUST TO DISPLAY NAME OF THE
    // PLAYER (HTTP GET REQUEST USING A COOKIE COMING FROM LOGIN PAGE)
    //INSIDE A USEEFFECT TO UPDATE DATA IN EVERY REFRESH PAGE

    useEffect(()=>{
        fetch(`http://localhost:8080/auth/home?_id=${cookieValue._id}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(data => { setUsername(data)
                            setUserEmail(data.email);
                //console.log(data);
            })
    },[])


    //EDIT PROFILE PLAYER QUERY => NOT POSSIBLE TO CHANGE EMAIL JUST USERNAME AND PASSWORD
    // (HTTP PUT REQUEST USING A COOKIE COMING FROM LOGIN PAGE TO FIND EMAIL)


    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/auth/edit`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({'username': user.username,'email':userEmail,'password':user.password,'repeated_password':user.repeated_password})
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
                        <h2>@{username.username}</h2>
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
                <input name={"password"} type={"password"} value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
                <label htmlFor={"repeat-password"}>Repeat Password: </label>
                <input name={"repeated_password"} type={"password"} value={user.repeated_password} onChange={e => setUser({ ...user, repeated_password: e.target.value })}/>

                <input type={"submit"} value={"Save"} name={"Save"} />
                <a onClick={()=>navigate("/home")} htmlFor={""} className={"back"}>Back</a>
            </form>
        </>
    )
}

export default EditProfile;