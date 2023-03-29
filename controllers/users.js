import Users from "../models/users.js";
import bcrypt from "bcryptjs";
export const createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(16);

    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "Invalid input.",
    });
  }
};
export const checkUser = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "not found" });
    }

    const password = await bcrypt.compare(req.body.password, user.password);

    if (!password) {
      return res.status(401).json({ message: "Invalid login details" });
    }

    return res.status(200).json({ message: "success", user: user });
  } catch (err) {
    next(err);
  }
};
