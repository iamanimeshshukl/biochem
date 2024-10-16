import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Abstracts from './pages/Abstracts';
import Publications from './pages/Publications';
import ScientificPrograms from './pages/ScientificPrograms';
import RegistrationSponsorship from './pages/RegistrationSponsorship';
import GeneralInfo from './pages/GeneralInfo';
import IBSTeam from './pages/IBSTeam';
import Contacts from './pages/Contacts';
import Home from "./pages/Home.jsx"



const App = () => {
  return (
    <Router>
      <Header /> 
      <br></br>
      <Navbar /> 
      <Routes>
      <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/abstracts" element={<Abstracts />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/scientific-programs" element={<ScientificPrograms />} />
        <Route path="/registration-sponsorship" element={<RegistrationSponsorship />} />
        <Route path="/general-info" element={<GeneralInfo />} />
        <Route path="/ibs-team" element={<IBSTeam />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;