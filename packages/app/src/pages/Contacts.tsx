import {
  Form,
  Stack,
  FormSection,
  TextField,
  TextArea,
  Title,
} from "@gorliumbento/design-system";
import React from "react";

const sendMessageToTelegram = async (message: string) => {
  const telegramToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

function Contacts() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);
  const [error, setError] = React.useState("");

  const onSubmit = async () => {
    if (name !== "" && message !== "") {
      setIsSent(true);
      sendMessageToTelegram(`FROM: ${name}\nMESSAGE:\n ${message}`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("");
      setName("");
      setIsSent(false);
    } else {
      setError("Please fill in all the fields 🥲");
    }
  };
  return (
    <Stack space={0} dividers={true}>
      <Form
        title="Do you want a terrarium?"
        description="Write me a message 💌 and remember to leave your contact info"
        errorBannerWidth="content"
        error={error}
        submitButton={{
          label: "SEND",
          onPress: () => {
            onSubmit();
          },
        }}
      >
        {isSent && <Title size="medium">{`SENT! 🌵🌵🌵`}</Title>}

        <FormSection>
          <TextField
            name="name"
            placeholder="Type your name here..."
            label="Name"
            value={name}
            onChange={setName}
          />
          <TextArea
            name="message"
            placeholder="Type your message here..."
            label="Message"
            value={message}
            onChange={setMessage}
            rows={10}
          />
        </FormSection>
      </Form>
    </Stack>
  );
}

export default Contacts;
