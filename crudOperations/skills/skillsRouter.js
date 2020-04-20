const router = require("express").Router();
const Skills = require("./skillsModel");

// @desc     Get all skills
// @route    GET /api/skills
// @access   Private
router.get("/", async (req, res) => {
  try {
    const skills = await Skills.find();

    if (skills) {
      console.log(skills);

      res.status(200).json(skills);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get skills, internal server error" });
  }
});

//additional routes would go here but we don't really need any for our purposes :)

// Export router
module.exports = router;
