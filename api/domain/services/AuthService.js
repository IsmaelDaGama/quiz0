const AuthRepo = require("../repository/Auth")

let AuthRegister = async (user) => {
    await AuthRepo.AuthRegister(user);
}
let AuthRoom = async (room) => {
    await AuthRepo.AuthRoom(room);
}

let AuthJoin = async (room) => {
    let data = await AuthRepo.AuthJoin(room);
    return data;
}

let AuthLogin = async (login) => {
    let data = await AuthRepo.AuthLogin(login);
    return data;
}

let AuthUser = async (user) => {
    let data = await AuthRepo.AuthUser(user);
    return data;
}

let AuthUpdate = async (user) => {
    let data = await AuthRepo.AuthUpdate(user);
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