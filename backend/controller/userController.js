const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwToken");

//Register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this-is-as-sample-id",
      url: "profile.url",
    },
  });

  sendToken(user, 201, res);
});

//Login User

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //Checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please enter a Email & Password ", 400));
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password ", 401));
  }

  const isPasswordIsMatached = await user.comparePassword(password);

  if (!isPasswordIsMatached) {
    return next(new ErrorHandler("Invalid Email or Password ", 401));
  }

  sendToken(user, 200, res);
});
