import React, { Component } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Body  from './Body/Body';

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <Navigation />
                <main>
                    <Body />
                </main>
            </>
        );
    }
}
export default Home;
