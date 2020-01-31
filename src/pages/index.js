import React from "react";
import SEO from "../components/seo";
import Header from "../components/Home/Header/Header"
import Navigation from "../components/UI/Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <>
    <SEO title="🧰 Those Guys Appliance Repair 🧺" 
      description = "Clovis, New Mexico's #1 Appliance Repairmen! We service and repair all makes and models!"
    />
    <Header />
    <Navigation
        sticky = {true} 
        navigationLinks ={[
                {
                    link : "#who_we_are",
                    title : "Home"
                },{
                    link : "#contact",
                    title : "Contact Us"
                },{
                    link : "#located",
                    title : "Visit Us"
                },{
                    link : "/usedappliances",
                    title : "Used Appliances"
                }
            ]}
    />
  </>
);

export default IndexPage;
