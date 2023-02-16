import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email }); // check if the user exists
    if (!existingUser)
      return res.status(404).json({ message: "User not found" })

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Password is incorrect" });

      // send jwt to frontend
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    ); // info to store in token (.sign bracket part). In place of test it should be process.env.JWT_SECRET as its a secret key. Also will use this token in front end to verify the user n all

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, userName, uType } = req.body;
  
  try {
    const existingUser = await UserModal.findOne({ email });
  
    if (existingUser)
    return res.status(400).json({ message: "Email already exist" });
    
    const hashedPassword = await bcrypt.hash(password, 12); // 12 level of difficulty
      
    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: userName,
      utype: uType,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
