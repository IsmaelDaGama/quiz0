import React, { useEffect, useState } from "react"
import { useRef } from 'react';

let SignUp= usersignup => {


    return (
        <>
        <h2>Let's sign you up 📬</h2>

        <form action={"/home"}>
            <label htmlFor={"username"}>Username: </label>
            <input name={"username"} type={"text"}/>
            <label htmlFor={"email"}>Email:</label>
            <input name={"user[email]"} type="email" />
            <label htmlFor={"password"}>Password: </label>
            <input name={"password"} type={"password"}/>
            <label htmlFor={"repeat-password"}>Repeat Password: </label>
            <input name={"repeat-password"} type={"password"}/>

            <input type={"submit"} value={"Login"}/>
            <label htmlFor={"back"} className={"back"}>Back</label>
        </form>
        </>
    )
}

export default SignUp;