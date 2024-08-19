import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharactersDetails } from "./views/CharactersDetails";
import { Planets } from "./views/Planets";
import Vehicles from "./views/Vehicles";
import DescriptionCard from "./component/DescriptionCard";
import CharacterIndividualInfo from "./views/characterIndividualInfo";
import PlanetsIndividualInfo from "./views/PlanetsIndividualInfo";
import VehiclesIndividualInfo from "./views/VehiclesIndividualInfo";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="*" element={<h1>Not found!</h1>} />
            <Route path="/characters" element={<CharactersDetails />} />
            <Route
              path="/characters/:id"
              element={<CharacterIndividualInfo />}
            />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetsIndividualInfo />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehiclesIndividualInfo />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
