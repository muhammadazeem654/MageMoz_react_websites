import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Solution from "./Pages/Solution";
import MagentoSolutionP from "./Pages/MagentoSolutionP";
import MagentoMigration from "./Pages/MagentoMigration";
import DigitalMarketing from "./Pages/DigitalMArketing";
import Cloudservice from "./Pages/CloudService";


import 'bootstrap/dist/css/bootstrap.min.css';





  import {
      BrowserRouter,
      Routes,
      Route
  } from "react-router-dom";


function App() {
  return (
    
   <React.Fragment>
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="solution" element={<Solution />} />
      <Route path="magentosolutionp1" element={<MagentoSolutionP />} />
      <Route path="magentomigartion" element={<MagentoMigration />} />
      <Route path="digitalmarketing" element={<DigitalMarketing />} />
      <Route path="cloudservice" element={<Cloudservice />} />
      
      </Routes>


    



      </React.Fragment>
 
   
   );
}

export default App;
