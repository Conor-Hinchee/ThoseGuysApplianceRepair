import React  from 'react';
import SEO from "../components/seo";
import MessageSentModal from "../components/MessageModal/MessageSentModal/MessageSentModal";

const MessageSent = () => {
    return(
        <>
          <SEO title="🙌 Message Sent 💖" />
          <MessageSentModal />
        </>    
    );
   
}

export default MessageSent;
