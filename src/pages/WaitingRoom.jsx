import React, {useEffect, useState} from "react";
import { io } from "socket.io-client";
import signUp from "./SignUp.jsx";
import {useCookies} from "react-cookie";


let WaitingRoom = (props) => {
    //Socket.io
    const { socket } = props;
    const [room,setRoom]=useState('');
    const [message,setMessage]=useState('');
    const [messageReceived,setMessageReceived]=useState('');
    const [roomCookie] = useCookies(['Room']);


    const joinRoom =() => {
        let room = "test";
        if(room!==""){
            socket.emit("join_room",room);

        }
    };

    joinRoom();

    const sendMessage=()=>{
        socket.emit("send_message",{message,room});
    };

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            setMessageReceived(data.message)
        });
    },[socket]);


    useEffect(()=>{
        console.log(messageReceived)
    },[messageReceived]);



    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Private Room</h1>

                        #code
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>

            <br></br>
            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col"><img src={"rap.png"}/><p>RAP</p></div>
                    <div className="col"><img src={"rap.png"}/><p>RAP</p></div>
                    <div className="col"><img src={"rap.png"}/><p>RAP</p></div>
                    <div className="col"><img src={"rap.png"}/><p>RAP</p></div>

                </div>
                    <button className={"signup"} >Play</button>
                    <p></p>
                    <a className={"leaveroom"} onClick={()=>navigate("/login")}>Leave Room</a>




                <p>{messageReceived}</p>
            </div>



        </>
    )
}

export default WaitingRoom;