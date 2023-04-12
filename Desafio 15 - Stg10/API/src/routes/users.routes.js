const { Router, response } = require("express")
const UserController = require("../controllers/user.controller")
const UserAvatarController = require("../controllers/userAvatar.controller")
const userRoutes = Router()
const confirmAuth = require("../middlewares/confirmAuth")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const upload = multer(uploadConfig.MULTER)
const userController = new UserController
const userAvatarController = new UserAvatarController

userRoutes.post("/", userController.create)
userRoutes.put("/", confirmAuth, userController.update)
userRoutes.patch("/avatar", confirmAuth, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes