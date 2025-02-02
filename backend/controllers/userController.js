const registerUser = (req, res) => {
    res.status(200).json({
        message: 'User registered'
    })
}

const loginUser = (req, res) => {
    res.status(200).json({
        message: 'Login User'
    })
}

const getUser = (req, res) => {
    res.status(200).json({
        message: 'Get User Details'
    })
}

module.exports = { 
    registerUser,
    loginUser,
    getUser
}