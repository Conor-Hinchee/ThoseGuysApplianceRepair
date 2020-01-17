import React from 'react';
import Header from './Header/Header';
import Navigation from '../UI/Navigation/Navigation';
import Body  from './Body/Body';
import Footer from '../UI/Footer/Footer';

const Home = () => (
    <>
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
        <main style={{overflowX: "hidden"}}>
            <Body />
        </main>
        <Footer />
    </>
);

export default Home;