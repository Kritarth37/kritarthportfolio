
//import 'App.css';
import React from 'react';
import { mainBody} from "./components/editable-stuff/config.js";
import MainBody  from './components/Mainbody';
import Navigation from './components/Navigation.jsx';
import Aboutme from './components/Aboutme';
import Projectcard from './components/project';
import Skill from './components/skill';
import Footer from './components/footer';
function App() {
  return(
    <>
    <Navigation></Navigation>
    <MainBody
    gradient={mainBody.gradientColors}
    title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
    message={mainBody.message}
    icon={mainBody.icons}
    />
    <Aboutme></Aboutme>
    <Projectcard></Projectcard>
    <Skill></Skill>
    <Footer>
      </Footer>
    </>
  )
 
}

export default App;
