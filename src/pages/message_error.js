import React  from 'react';
import SEO from "../components/seo";
import MessageErrorModal from "../components/MessageModal/MessageErrorModal/MessageErrorModal";

const MessageError = () => {
    return(
        <>
          <SEO title="🧦 Lost Socks 🧦" />
          <MessageErrorModal />
        </>    
    );
   
}

export default MessageError;
