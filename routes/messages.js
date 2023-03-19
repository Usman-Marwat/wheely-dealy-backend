const express = require("express");
const router = express.Router();
const { Expo } = require("expo-server-sdk");

const sendPushNotification = require("../utilities/pushNotifications");

router.post("/", async (req, res) => {
  const { expoPushToken, title, subtitle, body } = req.body;
  console.log(expoPushToken);

  try {
    if (Expo.isExpoPushToken(expoPushToken))
      await sendPushNotification(expoPushToken, {
        title,
        subtitle,
        body,
      });
    res.status(201).send();
  } catch (error) {
    console.log("Notification was not sent");
    res.status(400).send({});
  }
});

module.exports = router;
