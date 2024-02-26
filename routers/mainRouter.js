const mainRouter = require('express').Router()

mainRouter.get('/', (req,res)=>{
    try {
        res.render("pages/homepage.twig")
    } catch (error) {
        res.send(error)
    }
})



module.exports = mainRouter
