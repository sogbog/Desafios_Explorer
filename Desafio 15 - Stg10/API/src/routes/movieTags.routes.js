const { Router } = require("express")
const confirmAuth = require("../middlewares/confirmAuth")
const MovieTagsController = require("../controllers/movieTags.controller")
const movieTagsRoutes = Router()


const movieTagsController = new MovieTagsController

movieTagsRoutes.get("/", confirmAuth, movieTagsController.index)


module.exports = movieTagsRoutes