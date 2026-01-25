import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
            </>
          }
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
