const router = require("express").Router();
const { Bird } = require("../../../models");

// Fetch all birds
router.get("/", async (req, res) => {
    try {
        const birds = await Bird.findAll();
        res.status(200).json(birds);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Fetch a single bird by ID
router.get("/:id", async (req, res) => {
    try {
        const bird = await Bird.findByPk(req.params.id);
        if (!bird) {
            res.status(404).json({ message: "Bird not found!" });
            return;
        }
        res.status(200).json(bird);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Create a new bird
router.post("/", async (req, res) => {
    try {
        const bird = await Bird.create(req.body);
        res.status(200).json(bird);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Update a bird by its ID
router.put("/:id", async (req, res) => {
    try {
        const bird = await Bird.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!bird[0]) {
            res.status(404).json({ message: "Bird not found!" });
            return;
        }

        res.status(200).json(bird);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Delete a bird by its ID
router.delete("/:id", async (req, res) => {
    try {
        const bird = await Bird.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!bird) {
            res.status(404).json({ message: "Bird not found!" });
            return;
        }

        res.status(200).json({ message: "Bird deleted successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;
