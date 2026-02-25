import { User } from "../model/user.js";

export const addUser = async (req, res, next) => {
  try {
    const { name, age, phone, email } = req.body;

    const user = new User({ name, age, phone, email });   
    await user.save();

    res.json({
      success: true,
      message: "user created successfully",
    });
  } catch (e) {
    next(e);
  }
};

export const getUser = async(req, res, next) => {
    try {
        const users = await User.find();
        res.json({
            success: true,
            message:"user fetched successfully",
            data:users
        })
    } catch(e) {
        next(e);
    }
}