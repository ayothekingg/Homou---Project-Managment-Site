/** @format */

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Home from "./components/Home/Home";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Deadline from "./components/DeadlinePage/Deadline";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-basic text-primary  w-full">
      <Navbar />
      <Home />
      <ProjectPage />
      <Features />
      <Testimonial />
      <Deadline />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
