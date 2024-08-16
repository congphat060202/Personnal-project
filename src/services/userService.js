const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUserService = async (userName, email, password) => {
    try {
        // hash User password
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //save user to database
        let result = await User.create({
            userName: userName,
            email: email,
            password: hashPassword,
            role: "user"  // Set default role as 'user' if not provided
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}





module.exports = {
    createUserService
}
