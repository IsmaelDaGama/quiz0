import React from "react";

let QuestionsTemplate = () => {
    return (
        <>
            <h2>Questions </h2>

            <div className="container">
            <form>
                <button htmlFor={"create-room"} className={"home"}>Create Room</button>
                <button htmlFor={"join-room"} className={"home"}>Join Room</button>
                <button htmlFor={"profile"} className={"home"}>Profile</button>
                <button htmlFor={"stats"} className={"home"}>Stats</button>

            </form>

            </div>
            <div className="btn-group-vertical d-inline" role="group" aria-label="Vertical radio toggle button group">
                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" checked/>
                <label className="btn btn-outline-primary" htmlFor="vbtn-radio1">Radio 1</label>
                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="vbtn-radio2">Radio 2</label>
                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="vbtn-radio3">Radio 3</label>
            </div>



        </>
    )
}

export default QuestionsTemplate;