const { Router } = require("express")
const UserController = require("../controllers/user.controller")
const userRoutes = Router()


const userController = new UserController

userRoutes.post("/", userController.create)
userRoutes.put("/:id", userController.update)

module.exports = userRoutes