import emailjs from "emailjs-com";

const sendEmail = async (templateID, receiverEmail, userID) => {
  try {
    const response = await emailjs.send(
      "default_service",
      templateID,
      { to_email: receiverEmail },
      userID
    );
    return response;
  } catch (error) {
    console.error(`Couldn't send an email, error: ${error}`);
  }
};

export { sendEmail };
