const mongoose= require ('mongoose');

const userSchema = new mongoose.Schema ({
    username: String,
    email: String,
    password: String
}, { autoCreate: true, autoIndex: false });

const roomSchema = new mongoose.Schema ({
    code: String,
    players:  [{ username: String}],
    level: String

}, { autoCreate: true, autoIndex: false });

const Rooms = mongoose.model('rooms', roomSchema);

const User = mongoose.model('users', userSchema);

module.exports = {
    User,
    Rooms
}