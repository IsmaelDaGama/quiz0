let SignUp= () => {
    return (
        <>
        <h2>Let's sign you up 📬</h2>

        <form>
            <label htmlFor={"username"}>Username:</label>
            <input name={"username"} type={"text"}/>
            <label htmlFor={"email"}>Email:</label>
            <input name={"email"} type={"email"}/>
            <label htmlFor={"password"}>Password: </label>
            <input name={"password"} type={"password"}/>
            <label htmlFor={"repeat-password"}>Repeat Password: </label>
            <input name={"repeat-password"} type={"password"}/>

            <input type={"submit"} value={"Login"}/>
        </form>
            </>
    )
}

export default SignUp;