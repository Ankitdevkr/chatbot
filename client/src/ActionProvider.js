class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) 
   {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   heloworld = () =>{
   const message = this.createChatBotMessage("engineering will be good option for you")
   this.setChatbotMessage(message);
   }
   setChatbotMessage = (message)=>{
    this.setState(state => ({...state, messages:[...state.messages, message]}))
   } 
 }

 export default ActionProvider;