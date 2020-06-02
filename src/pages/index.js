import React from "react";
import SEO from "../components/seo";
import Header from "../components/Home/Header/Header"
import Navigation from "../components/UI/Navigation/Navigation";
import Body from "../components/Home/Body/Body";
import Footer from "../components/UI/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
                    link : "#located",
                    title : "Visit Us"
                },{
                    link : "/usedappliances",
                    title : "Used Appliances"
                }
            ]}
    />
    <main style={{overflowX: "hidden"}}>
        <Body />
    </main>
    <Footer />
  </>
);

export default IndexPage;
