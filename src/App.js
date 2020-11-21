import React from "react";
import NavBar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Container from '../src/components/Container'
import About from '../src/components/pages/About'
import Portfolio  from '../src/components/pages/Portfolio'
import Contact from '../src/components/pages/Contact'

function App() {
  return (
    <div>
      
      <NavBar />
      <Container>
        <Home />
        <About />
        <Portfolio />
        <Contact />
     
      
      </Container>


    </div>
  );
}

export default App;
