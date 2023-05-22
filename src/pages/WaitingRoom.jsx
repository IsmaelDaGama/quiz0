import React, {useEffect, useState} from "react";
import { io } from "socket.io-client";
import signUp from "./SignUp.jsx";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";

let WaitingRoom = (props) => {
    //Socket.io
    const { socket } = props;

    const [room,setRoom]=useState('');
    const [id,setId]=useState('');


    const [joinMessage,setJoinMessage]=useState(''); // user_id
    const [readyMessage,setReadyMessage]=useState('');
    const [messageReceived,setMessageReceived]=useState('');

    //SOCKET.IO WITH MONGODB IMPLEMENTAION
    const [joinCookie] = useCookies(['JoinRoom']);
    const [createCookie] = useCookies(['CreateRoom']);
    const [roomCookie] = useCookies(['Room']);

    /*
    const joinRoom =() => {
        let room = roomCookie.Room;
        if(room!== null){
            socket.emit("join_room",room);

        }
    };*/
    useEffect(()=>{
        socket.on("joined_message",(data)=>{
            setJoinMessage(data);
            console.log('🔥: User is connected '+ data);
        });
    },[socket]);


    const sendMessage = ()=>{
        //setMessage("Ready");
        let room = roomCookie.Room;
        socket.emit("send_message",{room,joinMessage});
    };

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            console.log(data)
            setReadyMessage(data);
        });
    },[socket]);


    useEffect(()=>{
        console.log(readyMessage)
    },[readyMessage]);





    const leaveRoom = ()=>{
        socket.leave("leave",room);
    };

    useEffect(()=>{
        socket.on("disconnect_message",(data)=>{

            console.log('🔥: A user disconnected'+data);
        });
    },[socket]);




    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Private Room</h1>

                        #code => {roomCookie.Room}
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>

            <br></br>

            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col"><img src={"rap.png"}/><p>🔥User: {joinMessage}</p><p>Is Ready: {readyMessage}</p></div>
                    <div className="col"><img src={"rap.png"}/><p>🔥User: {joinMessage}</p><p>Is Ready: {readyMessage}</p></div>
                </div>
                <button onClick={sendMessage} className={"signup"} >Play</button>
                <p></p>
                <a className={"leaveroom"} onClick={leaveRoom} >Leave Room</a>



            </div>
            <p></p>
            <h2>Aprovação do Projeto? </h2>
            <p></p>
            <div className="container text-center">
                <form>
                    <button htmlFor={"create-room"} className={"home"}>Sim</button>
                    <button htmlFor={"join-room"} className={"home"}>Talvez</button>
                </form>

            </div>


        </>
    )
}


/* LOGS COOKIES IMPLEMENTATION SOCKET.IO WITH MONGO

                <p>Create Cookie: {createCookie.CreateRoom}</p>
                <p>Join Cookie: {joinCookie.JoinRoom}</p>


                <p>Room Cookie: {roomCookie.Room}</p>
                <p> Show Message:</p>
                <p>{messageReceived}</p>

 */

export default WaitingRoom;