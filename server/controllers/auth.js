import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'


export const signup = async (req, res) => {
    const { name, email, password} = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "user already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, "test",{ exxpiresIn: '1h'});
        res.status(200).json({ result: newUser, token })
    }catch(error){
        res.status(500).json("something went wrong...")

    }
}

export const login = async (req, res) => {
    const { email, password} = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "user dont exist"})
        }
        
        const isPassword = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: "invalid password"})
        }
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, "test", { exxpiresIn: '1h'});
        res.status(200).json({ result: newUser, token})
    }catch(error){
        res.status(500).json("something went wrong...")

    }
}