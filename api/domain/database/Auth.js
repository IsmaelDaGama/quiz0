const db = require("./Connection")
const {User} = require("../entities/Auth");
let AuthSignUp = async (user) => {
    const newUser = new User({
        username: user.username,
        email: user.email,
        password: user.password,
    });

    await newUser.save();
}

let AuthLogin = async (login) => {
    let data = await User.findOne({email: login.email, password: login.password});
    return data;
}

module.exports = {
    AuthSignUp,
    AuthLogin
};