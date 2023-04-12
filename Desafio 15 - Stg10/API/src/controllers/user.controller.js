const { hash, compare } = require("bcryptjs")
const AppError =  require("../utils/AppError")
const knex = require("../database/knex")

class UserController {
    async create(request, response){
        const {name, email, password, avatar} = request.body

        const checkUserExists = await knex("users").where({email}).first()

        if(checkUserExists){
            throw new AppError("Este email ja esta sendo usado kk")
        }

        const encryptedPassword = await hash(password, 8)

        await knex("users").insert({
            name,
            email,
            password: encryptedPassword
        })

        return response.status(201).json()

    }

    async update(request, response){
        const { name, email, password, current_password } = request.body
        const user_id = request.user.id

        const user = await knex("users").where({ id: user_id }).first()

        if(!user){
            throw new AppError("Esse user nem exists ta ligado...")
        }

        const emailExists = await knex("users").where({email}).first()
        if(emailExists && emailExists.id !== user.id){
            throw new AppError("Esse email ja ta em uso meo, ta qrendo roubar eh?")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !current_password){
            throw new AppError("Nao tais ligado que precisa da senha atual ou ta se fazendo?")
        }

        if(password && current_password){
            const correctPassword = await compare(current_password, user.password)

            console.log(correctPassword)

            if(!correctPassword){
                throw new AppError("ERRASSE A SENHA ATUAL DOIDO")
            }

            user.password = await hash(password, 8)
        }

        await knex("users").where({ id: user_id }).first().update({
            name: user.name,
            email: user.email,
            password: user.password,
            updated_at: knex.fn.now()
        })

        return response.json()
    }

}

module.exports = UserController