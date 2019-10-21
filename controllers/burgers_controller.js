const express = require("express");
const burger = require("../models/burger")

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(result => {
        res.render("index",{burgers:result})
    })
})

router.post("/api/insertOne", (req, res) => {
    burger.insertOne(req.body.name, (result) => {
        res.json(result)
    })


})


router.put("/api/updateOne", (req, res) => {
    burger.updateOne({
        devoured: true
    }, `id=${req.body.id}`,(result)=>{
        res.json(`${result} Updated item`)
    })
})

// router.get("/api/updateOne")



module.exports = router