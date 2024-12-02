import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Abstracts from './pages/Abstracts';
import Publications from './pages/Publications';
import ScientificPrograms from './pages/ScientificPrograms';
import RegistrationSponsorship from './pages/RegistrationSponsorship';
import GeneralInfo from './pages/GeneralInfo';
import Biometaconteam from './pages/Biometaconteam.jsx';
import Contacts from './pages/Contacts';
import Home from "./pages/Home.jsx"
import Theme from "./Components/Theme.jsx"
import Discover from "./pages/Discover.jsx"
import Spekers from './pages/Spekers.jsx';

const App = () => {
  return (
<div

>
<Router>
      <Header /> 
      <Theme />
      <Navbar /> 
      <Routes>
      <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/abstracts" element={<Abstracts />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/scientific-programs" element={<ScientificPrograms />} />
        <Route path="/registration-sponsorship" element={<RegistrationSponsorship />} />
        <Route path="/general-info" element={<GeneralInfo />} />
        <Route path="/biometacon" element={<Biometaconteam />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/speakers" element={<Spekers />} />
      </Routes>
      <Footer /> 
    </Router>
</div>
  );
};

export default App;