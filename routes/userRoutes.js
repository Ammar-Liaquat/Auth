const express = require("express")
const {createuser, getuser, loginuser, edituser} = require("../controllers/usercontrollers")
const router = express.Router()
router.use(express.json())

router.post("/user",createuser)
router.get("/user",getuser)
router.post("/login",loginuser)
router.patch("/user/:id",edituser)

module.exports = router
