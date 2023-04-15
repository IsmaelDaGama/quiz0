const AuthDb = require("../database/Auth")
let AuthRegister = async (user) => {
    await AuthDb.AuthSignUp(user);
}

let AuthLogin = async (login) => {
    let data = await AuthDb.AuthLogin(login);
    return data;
}


module.exports = {
    AuthRegister,
    AuthLogin
};