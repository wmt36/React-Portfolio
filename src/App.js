import React from "react";
import NavBar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Wrapper from '../src/components/Wrapper'
import Container from '../src/components/Container'
import About from '../src/components/pages/About'
import Portfolio  from '../src/components/pages/Portfolio'
import Contact from '../src/components/pages/Contact'

function App() {
  return (
    <div>
      <Wrapper>
      <NavBar />
      <Container>
        <Home />
        <About />
     
      
      </Container>
      </Wrapper>

    </div>
  );
}

export default App;
