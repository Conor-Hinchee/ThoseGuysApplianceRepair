import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Body  from './Body/Body';
import Footer from '../UI/Footer/Footer';

const Home = () => (
    <>
        <Header />
        <Navigation />
        <main>
            <Body />
        </main>
        <Footer />
    </>
);

export default Home;