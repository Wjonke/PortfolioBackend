const router = require("express").Router();
const Skills = require("../skills/skillsModel");

// @desc     Get all skills
// @route    GET /api/skills
// @access   Private
router.get("/", async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json(skills);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get skills, its not you.. its me" });
  }
});

//additional routes would go here but we dont really need any for our purposes :)

// Export router
module.exports = router;
