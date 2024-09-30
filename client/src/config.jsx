import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Chatavatar from "./components/Chatavatar";


const botName = "pathFinder";

const config = {
  initialMessages: [createChatBotMessage("Hii how can I help you?")],
  botName: botName,
  
  customComponents: {   
    botAvatar: (props) => <Chatavatar {...props} />

  },
};

export default config;
