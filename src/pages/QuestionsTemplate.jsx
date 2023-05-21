import React from "react";

let QuestionsTemplate = () => {
    return (
        <>
            <h2>Question 1 </h2>
            <p></p>
            <div className="container">
            <form>
                <button htmlFor={"create-room"} className={"home"}>Create Room</button>
                <button htmlFor={"join-room"} className={"home"}>Join Room</button>
                <button htmlFor={"profile"} className={"home"}>Profile</button>
                <button htmlFor={"stats"} className={"home"}>Stats</button>

            </form>

            </div>



        </>
    )
}

export default QuestionsTemplate;