const { Router } = require("express")
const confirmAuth = require("../middlewares/confirmAuth")
const MovieNotesController = require("../controllers/movieNotes.controller")
const movieNotesRoutes = Router()


const movieNotesController = new MovieNotesController

movieNotesRoutes.use(confirmAuth)

movieNotesRoutes.get("/", movieNotesController.index)
movieNotesRoutes.post("/", movieNotesController.create)
movieNotesRoutes.get("/:id", movieNotesController.show)
movieNotesRoutes.delete("/:id", movieNotesController.delete)

module.exports = movieNotesRoutes