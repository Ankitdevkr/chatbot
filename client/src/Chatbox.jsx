import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import {Chatbot} from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import 'react-chatbot-kit/build/main.css';


export default function Chatbox() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, getmessage] = useState("");
  const [chithi, sendMessage] = useState("welcome to the chat!");


//   const handleClick = () => {
//     // message = message.toLowerCase();
//     if (message == "science") {
//       sendMessage("What subjects have you chosen: Math or Biology?");
//     } else if (message == "math") {
//       sendMessage("You should consider a career in Engineering, IT, or Data Science.");
//     } else if (message == "biology") {
//       sendMessage("You should consider a career in Medical fields like MBBS, Nursing, or Biotechnology.");
//     } else if (message == "commerce") {
//       sendMessage("You should explore careers in Chartered Accountancy, Banking, or Business Management.");
//     } else if (message == "arts") {
//       sendMessage("You should explore careers in Civil Services, Law, or Journalism.");
//     } else if (message == "vocational") {
//       sendMessage("You can directly pursue specialized fields like IT, Fashion Designing, or Tourism.");
//     } else {
//       sendMessage("Some technical error has occurred.");
//     }
// };



  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="chatbox" onClick={handleChatToggle}
        style={{ border: "none", cursor: "pointer", width: "50px", height: "50px" }}>
          <Button variant="info">Chat</Button>
          {/* <FontAwesomeIcon icon={faRocketchat} size="2xl" style={{ color: "#ff0000", }} /> */}
          </div>
      {isChatOpen && (
        <div className="chat-box">
          {/* <p>{chithi}</p>
          <div className='chatkaro'> <input className='chatinput' type="text" placeholder='ask anything' onChange={(e) => {
            getmessage(e.target.value);
          }} /> <button className='sendbutton' onClick={handleClick}>send</button> </div> */}

        <Chatbot className="chatb" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      )}
    </>
  )
}