const router = require("express").Router();
const Projects = require("./projectsModel");

// @desc     Get all projects
// @route    GET /api/projects
// @access   Private
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    console.log(projects);
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get projects, its not you.. its me" });
  }
});

// Export router
module.exports = router;
