import React from "react";
import SEO from "../components/seo";
import Navigation from "../components/UI/Navigation/Navigation";
import UsedAppliances from "../components/UsedAppliances/UsedAppliances";
import Footer from "../components/UI/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const UsedAppliances = () => (
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
					link : "/usedappliances/#refinishing",
					title : "Refinishing"
				},{
					link : "/usedappliances/#sales",
					title : "Used Appliance Sales" 
				},{
					link : "/usedappliances/#recycle",
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

export default UsedAppliances;
