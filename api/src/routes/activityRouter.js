const { Router } = require("express");
const {
  createActivity,
  getAllActivity,
} = require("../controllers/activityControllers");

const activityRouter = Router();

const SECCESS = 200;
const ERR = 404;

activityRouter.get("/", async (req, res) => {
  try {
    let activities = await getAllActivity();
    res.status(SECCESS).json(activities);
  } catch (error) {
    res.status(ERR).json(error.message);
  }
});

activityRouter.post("/", async (req, res) => {
  let { name, difficulty, duration, season, countryId } = req.body;
  try {
    let activityCreate = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countryId
    );
    res.status(SECCESS).json(activityCreate);
  } catch (error) {
    res.status(ERR).send(error.message);
  }
});

module.exports = activityRouter;
