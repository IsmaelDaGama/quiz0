import React from "react";

let WaitingRoom = () => {
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
                    <input type={"submit"} value={"Ready"}/>
                    <label className={"leaveroom"} onClick={""}>Leave Room</label>
                </form>
            </div>



        </>
    )
}

export default WaitingRoom;