import { env } from "~/config/environment";

const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: env.API_KEY_SMS_VONAGE,
  apiSecret: env.API_SECRET_SMS_VONAGE,
});

const sendSMS = (to, text) => {
  const from = "Vonage APIs";

  async function sendSMS() {
    await vonage.sms
      .send({ to, from, text })
      .then((resp) => {
        console.log("Message sent successfully");
        console.log(resp);
      })
      .catch((err) => {
        console.log("There was an error sending the messages.");
        console.error(err);
      });
  }

  sendSMS();
};

export default sendSMS;
