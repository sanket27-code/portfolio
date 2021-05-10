import React from 'react';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Home from './Components/Home';
import NavBar from './Components/NavBar'
// import {Switch, Route} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
    return (
        <>
          <NavBar />  
          <ScrollToTop />
          <Home />
          <AboutMe />
          <Skills />
          <Contact />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/courses" component={Skills} />
            <Route exact path="/contact" component={Contact} />
          </Switch> */}
        </>
    )
}

export default App;