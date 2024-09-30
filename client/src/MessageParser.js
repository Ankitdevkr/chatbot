class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase();
      if(lowercase.includes("science") && lowercase.includes("math")){
        this.actionProvider.heloworld();
      }

    }
  }
  
  export default MessageParser;