import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>NBA Clicky Game</h1>
        </FadeIn>
        <FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}>
            <h3>As a bonus challenge one player is on here twice, but with different teams</h3>
        </FadeIn>
    </header>
)};

export default Header;