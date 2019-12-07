import React, { Component } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Body  from './Body/Body';
import Footer from './Footer/Footer';

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <Navigation />
                <main>
                    <Body />
                </main>
                <Footer />
            </>
        );
    }
}
export default Home;
