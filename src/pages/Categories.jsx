import React from "react";
import { useNavigate } from "react-router-dom";

let Categories = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h1>Choose a category</h1>

                        #code
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>

            <br></br>
            <div className="container text-center">
                <div className="row row-cols-2">


                    <div className="col"><img src={"rap.png"}/><p>Geography</p></div>
                    <div className="col"><img src={"rap.png"}/><p>Arts</p></div>
                    <div className="col"><img src={"rap.png"}/><p>Nature</p></div>
                    <div className="col"><img src={"rap.png"}/><p>Biology</p></div>
                </div>
            </div>

            <div className="grid gap-3 ">
                <div className="p-2 g-col-6">Grid item 1</div>
                <div className="p-2 g-col-6">Grid item 2</div>
                <div className="p-2 g-col-6">Grid item 3</div>
                <div className="p-2 g-col-6">Grid item 4</div>
            </div>




        </>
    )
}

export default Categories;