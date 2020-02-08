import React  from 'react';
import SEO from "../../components/seo";
import ContactForm from "../../components/MessageModal/ContactForm";

const CustomerInfo = () => {
   
    return(
        <>
          <SEO title="💬 Message Us 😃" />
          <ContactForm 
            linkBack="/"
          />
        </>    
    );
   
}

export default CustomerInfo;
