import reactLogo from '../assets/react.svg'
import viteLogo from  '../assets/react.svg'
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


let Home = (props) => {
    //Socket.io
    const { socket } = props;
    const [room,setRoom]=useState('');
    const [message,setMessage]=useState('');
    const [messageReceived,setMessageReceived]=useState('');
    //API
    const [user,setUser]= useState('');
    const [joinCode,setJoinCode]= useState('');
    const navigate = useNavigate();
    const [cookies] = useCookies(['User']);
    const cookieValue = cookies.User;
    const availableRooms ="ABC";
    //console.log(cookieValue._id);
    //console.log(user)

    // CREATE ROOM IT´S A HTTP POST REQUEST "SINGING UP" A ROOM
    const submit = () => {
        setRoom(availableRooms);
        fetch('http://localhost:8080/auth/createroom', {
            method: 'POST',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({'code': availableRooms,'players':[{"username":user.username}],'level':'1'})
        })
            .then(res => res.json())
            .then(json => json)
        joinRoom();
        navigate("/waitingroom");
    }

    //SOCKET.IO
    const joinRoom =() => {
        if(room!==""){
            socket.emit("join_room",room);

        }
    };

    const sendMessage=()=>{
        socket.emit("send_message",{message,room});
    };

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            setMessageReceived(data.message)
        });
    },[socket]);


    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            setMessageReceived(data.message)
        });
    },[socket]);


    //HOME QUERY => JUST TO DISPLAY NAME OF THE
    // PLAYER (HTTP GET REQUEST USING A COOKIE COMING FROM LOGIN PAGE)
    //INSIDE A USEEFFECT TO UPDATE DATA IN EVERY REFRESH PAGE

    useEffect(()=>{
        fetch(`http://localhost:8080/auth/home?_id=${cookieValue._id}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(data => { setUser(data)
                //console.log(data);
            })
    },[])

    //JOIN ROOM (GET QUERY REQUEST)
    const sendJoincode = a =>{
        console.log(joinCode)
        a.preventDefault()
        fetch(`http://localhost:8080/auth/joinroom?code=${joinCode.code}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(json => console.log(json))    // Status condition & navigate
    }

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Welcome</h1>
                        <h2>@{user.username}</h2>

                    </div>
                    <div className="col">
                        <img src={"rap.png"}/>
                    </div>
                </div>
            </div>

            <br></br>
            <button onClick={submit} htmlFor={"create-room"} className={"home"}  >Create Room</button>
            <button onClick={()=>navigate("/editprofile")} htmlFor={"edit-profile"} className={"home"}>Edit Profile</button>
            <button htmlFor={"stats"} className={"home"}>Stats</button>
            <input name={"join-room"} type="text" className={"home"} placeholder={" Room Code => #123"}
                   value={joinCode.code}
                   onChange={a => setJoinCode({...joinCode,code:a.target.value})}
            />
            <button onClick={sendJoincode} className={"sign-out"} >Find Room</button>
            <p></p>
            <button onClick={()=>navigate("/login")} htmlFor={"sign-out"} className={"sign-out"}>Sign out</button>

        </>
    )
}

export default Home;