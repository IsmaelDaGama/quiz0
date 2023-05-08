import reactLogo from '../assets/react.svg'
import viteLogo from  '../assets/react.svg'
import React, {useState} from "react";
let Home = () => {
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
            <form>
                <button htmlFor={"create-room"} className={"home"}>Create Room</button>
                <button htmlFor={"join-room"} className={"home"}>Join Room</button>
                <button htmlFor={"profile"} className={"home"}>Profile</button>
                <button htmlFor={"stats"} className={"home"}>Stats</button>
                <a htmlFor={"sign-out"} className={"sign-out"} href={"/login"}>Sign out</a>
                <button htmlFor={"sign-out"} className={"sign-out"} href={"/login"}>Sign out</button>
            </form>
        </>
    )
}

export default Home;