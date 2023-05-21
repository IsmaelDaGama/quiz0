import reactLogo from '../assets/react.svg'
import viteLogo from  '../assets/react.svg'
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


let Home = (props) => {
    //Socket.io
    const { socket } = props;
    const navigate = useNavigate();

    const [joinCookie, setJoinCookie] = useCookies(['JoinRoom']);
    const [createCookie, setCreateCookie] = useCookies(['CreateRoom']);
    const [roomCookie, setRoomCookie] = useCookies(['Room']);

    //API
    const [user,setUser]= useState('');
    const [joinCode,setJoinCode]= useState('');


    const [userCookie] = useCookies(['User']);  // CARRY USER ID FROM PREVIOUS PAGE
    const cookieValue = userCookie.User;                                // DISPLAY USER USERNAME IN THE HOME PAGE
    const dbRooms =[];
    //console.log(cookieValue._id);
    //console.log(user)




    const joinRoom = (room) => {
        const userid = user.username
        console.log(user.username);
        if(room!== null){
            socket.emit("join_room", {room,userid});
        }
    };


    //FUNCTION THAT RETURNS A VALUE BETWEEN A MAX AND A MIN VALUE
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //GENERATES A RANDOM ROOM NUMBER
    function createRoom (){
        let newRoom = getRndInteger(0,20);
        if(dbRooms.includes(newRoom) == false ){
            dbRooms.push(newRoom);
            return newRoom
        }else{
         createRoom();
        }
    }




    // CREATE ROOM IT´S A HTTP POST REQUEST "SINGING UP" A ROOM
    const sendCreateroom = () => {
        let newRoom = createRoom();
        setCreateCookie('CreateRoom',newRoom)
        setRoomCookie('Room',newRoom)
        joinRoom(newRoom);
        fetch('http://localhost:8080/auth/createroom', {
            method: 'POST',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({'code': newRoom,'players':[{"username":user.username}],'level':'1'})
        })
            .then(res => res.json())
            .then(json => json)
        navigate(`/waitingroom?=${newRoom}`);
        //navigate("/waitingroom?="availableRooms);
    }

    //JOIN ROOM (GET QUERY REQUEST)
    const sendJoincode = a =>{
        setJoinCookie('JoinRoom',joinCode.code)
        setRoomCookie('Room',joinCode.code)
        joinRoom(joinCode.code);
        console.log(joinCode.code)
        a.preventDefault()
        fetch(`http://localhost:8080/auth/joinroom?code=${joinCode.code}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(json => console.log(json))    // Status condition & navigate
        navigate(`/waitingroom?=${joinCode.code}`);
    }


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
            <button onClick={sendCreateroom} htmlFor={"create-room"} className={"home"}  >Create Room</button>
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