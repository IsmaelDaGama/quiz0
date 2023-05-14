const db = require("./Connection")
const {User} = require("../entities/Auth");
const {Rooms} = require("../entities/Auth");
let AuthSignUp = async (user) => {
    const newUser = new User({
        username: user.username,
        email: user.email,
        password: user.password,
    });

    await newUser.save();
}

let AuthRoom = async (room) => {
    const newRoom = new Rooms({
        code: room.code,
        players: room.players,
        level: room.level,
    });

    await newRoom.save();
}
let AuthJoin = async (room) => {
    let data = await Rooms.findOne({code: room.code});
    return data;
}

let AuthLogin = async (login) => {
    let data = await User.findOne({email: login.email, password: login.password});
    return data;
}

let AuthUser = async (user) => {
    let data = await User.findOne({_id: user._id});
    return data;
}

let AuthUpdate = async (user) => {
    let data = await User.updateOne({ email: user.email }, user)
    return data;
}

module.exports = {
    AuthSignUp,
    AuthLogin,
    AuthUpdate,
    AuthUser,
    AuthJoin,
    AuthRoom
};