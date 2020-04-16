const router = require("express").Router();
const Projects = require("../projects/projectsModel");

// @desc     Get all projects
// @route    GET /api/projects
// @access   Private
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get projects, its not you.. its me" });
  }
});

//additional routes would go here but we dont really need any for our purposes :)

//if i hardcode projects in, this route will work, if not, it will need to be modified to work with api call to github in projects model.abs
//decide later

// Export router
module.exports = router;
