import React from "react";
import SEO from "../components/seo";
import Navigation from "../components/UI/Navigation/Navigation";
import UsedAppliances from "../components/UsedAppliances/UsedAppliances";
import Footer from "../components/UI/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';

const UsedApplances = () => (
  <>
    <SEO title="🧰 Those Guys Appliance Repair 🧺" 
      description = "Buy, Sell, or Recycle used appliances with Those Guys Appliance Repair"
    />
    <Navigation
				sticky = {false} 
				navigationLinks = {[
				{
					link : "/",
					title : "Home"
				},{
					link : "#refinishing",
					title : "Refinishing"
				},{
					link : "#sales",
					title : "Used Appliance Sales" 
				},{
					link : "#recycle",
					title : "Recycling"
				}
			]}
		/>
		<main>
		  <UsedAppliances />
		</main>
		<Footer />
  </>
)

export default UsedApplances;
