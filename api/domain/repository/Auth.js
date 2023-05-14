const AuthDb = require("../database/Auth")
let AuthRegister = async (user) => {
    await AuthDb.AuthSignUp(user);
}
let AuthRoom = async (room) => {
    await AuthDb.AuthRoom(room);
}
let AuthJoin = async (room) => {
    let data = await AuthDb.AuthJoin(room);
    return data;
}


let AuthLogin = async (login) => {
    let data = await AuthDb.AuthLogin(login);
    return data;
}

let AuthUser = async (user) => {
    let data = await AuthDb.AuthUser(user);
    return data;
}

let AuthUpdate = async (user) => {
    let data = await AuthDb.AuthUpdate(user);
    return data;
}


module.exports = {
    AuthRegister,
    AuthLogin,
    AuthUpdate,
    AuthUser,
    AuthJoin,
    AuthRoom
};