import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Genrate token
const generateToken = (userId) => {
    console.log("JWT_SECRET is:", process.env.JWT_SECRET);
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}



export const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        //check if already exists
        const userExists = await User.findOne({ email })
        if(userExists){
            return res.status(400).json({ message: "msg by DJ(the Developer): what are you doing you are already registered "})
        }
        if(password.length < 8){
            return res.status(400).json( {success: false, message: "Password must be atleast of 8 char,less then that mean 🔫"} )
        }

        //hashing pass
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt)

        //create a user
        const user = await User.create({
            name,
            email,
            password: hashedpassword,
        })

        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)

        })

    }
    catch(error){
        res.status(500).json({
            message: "Server error",
            error: error.message

        })

    }
}

// LOGIN FUNCTION
export const loginUser = async(req,res) => {
    try{
        const{ email ,password } =req.body
        const user = await User.findOne( {email} )
        if(!user){
            return res.status(401).json({message: "check your password/email 😒 this one is Invalid"})
        }

        //COMPARE THE PASSWORD
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(401).json({message: "HEY🤬,Password is wrong"})
        }

        res.status(200).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)

        })

    }
    catch(error){
        res.status(500).json({
            message: "Server error😔🤦‍♂️",
            error: error.message

        })

    }
}


//GETUSER PROFILE FUNCTION
export const getUserProfile = async (req,res) =>{
    try {
        const user = await User.findById(req.user.id).select("-password")
        if(!user){
            return res.status(404).json({message: "User not Found may be this one is new"})
        }
        res.json(user)

    }catch(error){
        res.status(500).json({
            message: "Server error😔🤦‍♂️",
            error: error.message

        })

    }
}
