import React from 'react';
import{useEffect} from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
 import 'react-chat-widget/lib/styles.css';
 import './chat.css';

import logo1 from './logo1.jpg';


function Chat() {
  useEffect(() => {
    addResponseMessage('Welcome to Parity Junction! How can we help you? ');
  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    if (newMessage=='Hi')
    {
        addResponseMessage('Would you like to schedule a time slot!');
    }
    else if("Yes!")
    {
        addResponseMessage('At what time would you like to visit?');
    }
  };
 
    return (
      <div >
        <Widget
         
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo1}
          title="Support@Parity Junction"
          subtitle="Welcome"
        />
      </div>
    );

}
 
export default Chat;