import React  from 'react';
import SEO from "../../components/seo";
import IssueSelector from "../../components/MessageModal/IssueSelector/IssueSelector";

const ApplianceIssue = () => {
   
    return(
        <>
          <SEO title="💬 Message Us 😃" />
          <IssueSelector 
            applianceSelected={"water_heater"}
          />
        </>    
    );
   
}

export default ApplianceIssue;
