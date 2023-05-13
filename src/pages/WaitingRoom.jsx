import React, {useEffect, useState} from "react";



let WaitingRoom = (props) => {

    const { socket } = props;
    const [room,setRoom]=useState('');
    const [message,setMessage]=useState('');
    const [messageReceived,setMessageReceived]=useState('');

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


                <form>

                    <input placeholder={"Room Number"} onChange={(event =>{ setRoom(event.target.value)})} />
                    <button onClick={joinRoom} >Join Room</button>
                    <input placeholder={"Message"} onChange={(event =>{ setMessage(event.target.value)})} value={"Ready"}/>
                    <button onClick={sendMessage} >Set Room</button>
                    <label className={"leaveroom"} onClick={"/login"}>Leave Room</label>
                    {messageReceived}
                </form>
            </div>



        </>
    )
}

export default WaitingRoom;