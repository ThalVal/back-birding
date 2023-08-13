const router = require("express").Router()
const birdRoutes = require("./api/birds/routes")

router.use("/api/birds", birdRoutes)

module.exports = router
