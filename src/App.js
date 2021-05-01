import React from 'react';
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax'
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import './App.css';
// components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/mycarousal.component';
import TitleMessage from './components/title-message/titlemessage.component'
import About from './pages/about/about.component'
const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
      <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('./assets/img/parallex/background.webp')}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
      </div>
    </div>
  );
}

export default App;
