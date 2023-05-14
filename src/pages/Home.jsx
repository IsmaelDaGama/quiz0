import reactLogo from '../assets/react.svg'
import viteLogo from  '../assets/react.svg'
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


let Home = () => {
    const [user,setUser]= useState('');
    const navigate = useNavigate();
    const [cookies] = useCookies(['User']);
    const cookieValue = cookies.User;
    //console.log(cookieValue._id);
    console.log(user)

    useEffect(()=>{
        fetch(`http://localhost:8080/auth/home?_id=${cookieValue._id}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(data => { setUser(data)
                console.log(data);
            })
    },[])


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Welcome</h1>
                        <h1>@{user.username}</h1>

                    </div>
                    <div className="col">
                        <img src={"rap.png"}/>
                    </div>
                </div>
            </div>

            <br></br>
            <form>
                <button onClick={()=>navigate("/waitingroom")} htmlFor={"create-room"} className={"home"}  >Create Room</button>
                <button onClick={()=>navigate("/home")} htmlFor={"profile"} className={"home"}>Profile</button>
                <button htmlFor={"stats"} className={"home"}>Stats</button>
                <button onClick={()=>navigate("/editprofile")} htmlFor={"edit-profile"} className={"home"}>Edit Profile</button>
                <input name={"join-room"} type="text" className={"home"} placeholder={"#123"}/>
                <button onClick={()=>navigate("/login")} htmlFor={"sign-out"} className={"sign-out"}>Sign out</button>


            </form>
        </>
    )
}

export default Home;