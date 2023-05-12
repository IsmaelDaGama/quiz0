import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

let EditProfile = () => {
    const [user,setUser]= useState(EditProfile.user)

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    };

    fetch('http://localhost:8080/auth/edit', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
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

            <form onSubmit={submit}>
                <label htmlFor={"username"}>Username:</label>
                <input name={"user[username]"} type={"text"} value={user.username} onChange={e => setUser({ ...user, name: e.target.value})}/>
                <label htmlFor={"email"}>Email:</label>
                <input name={"user[email]"} type={"text"} value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}/>
                <label htmlFor={"password"}>Password: </label>
                <input name={"user[password]"} type={"password"} value={user.password} onChange={e => setUser({ ...user, password: e.target.value })}/>
                <label htmlFor={"repeat-password"}>Repeat Password: </label>
                <input name={"user[repeated_password]"} type={"password"} value={user.repeated_password} onChange={e => setUser({ ...user, repeated_password: e.target.value })}/>

                <input type={"submit"} value={"Save"} name={"Save"} />
                <label htmlFor={"back"} className={"back"}> Back </label>
            </form>
        </>
    )
}

export default EditProfile;