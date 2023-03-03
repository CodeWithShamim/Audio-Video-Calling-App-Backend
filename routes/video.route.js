const express = require("express");
const router = express.Router();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const client = require("twilio")(twilioAccountSid, twilioAuthToken);

router.get("/generateToken", (req, res) => {
  const username = req.query?.username;
  if (!username) {
    return res.status(400).json({
      status: false,
      message: "Username is required.",
    });
  }

  const videoGrant = new VideoGrant({room: "cool room",});

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { identity: username }
  );
  token.addGrant(videoGrant);

  res.send(token.toJwt());

  // messageing service
  /* client.messages
    .create({
      body: "test100 by shamim",
      messagingServiceSid: "MGdaa82a5db023d65c1b96121ca830a949",
      to: "+8801762812568",
    })
    .then((message) => console.log(message.sid))
  */
});

module.exports = router;
