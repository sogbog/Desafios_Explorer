const { Router } = require("express")
const MovieTagsController = require("../controllers/movieTags.controller")
const movieTagsRoutes = Router()


const movieTagsController = new MovieTagsController

movieTagsRoutes.get("/:user_id", movieTagsController.index)


module.exports = movieTagsRoutes