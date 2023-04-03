
let Login = () => {
    return (
        <>
            <h2>Welcome 🔥</h2>

            <form>
                <label for={"username"}>Username:</label>
                <input name={"username"} type={"text"}/>
                <label for={"password"}>Password: </label>
                <input name={"password"} type={"password"}/>

                <input type={"submit"} value={"Login"}/>
            </form>
        </>
    )
}

export default Login;