require("dotenv").config();
var express = require("express");
var router = express.Router();

const eventbrite = require("eventbrite").default;

// Create configured Eventbrite SDK
const sdk = eventbrite({ token: process.env.EVENTBRITE_API_KEY });

/* GET list of events. */
router.get("/", async function (req, res, next) {
  await sdk.request(`/organizations/${process.env.ORG_ID}/events`).then(async (sdkRes) => {
    // handle response data
    res.send({ msg: "Events fetched successfully", data: sdkRes });
  });
});

/* Get event details by event ID */
router.get("/:id", async function (req, res, next) {
  await sdk.request(`/events/${req.params.id}?expand=ticket_availability&`).then((sdkRes) => {
    // handle response data
    res.send(sdkRes);
  });
});

module.exports = router;
