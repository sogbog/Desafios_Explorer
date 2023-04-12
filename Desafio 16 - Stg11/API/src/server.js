require("dotenv/config")
require("express-async-errors")

const express = require("express")
const AppError = require("./utils/AppError")
const routes = require("./routes")
const database = require("./database/sqlite")
const uploadConfig = require("./configs/upload")
const cors = require("cors")

const app = express()
app.use(cors())
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(express.json())
app.use(routes)
app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    
    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })

})

database()

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))