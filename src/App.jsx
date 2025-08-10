/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Flaviu Vanca",
  title: "Software Architect & DevOps",
  email: "flaviu.vanca@gmail.com",
  gitHub: "thaparazite",
  instagram: "flaviu.vanca",
  linkedIn: "flaviu-vanca",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

// grid of 4 education cells
const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University of Example",
  },
  {
    degree: "M.Sc. Software Engineering",
    institution: "Institute of Technology",
  },
  {
    degree: "Ph.D. Artificial Intelligence",
    institution: "AI Research Center",
  },
  {
    degree: "Diploma in UX Design",
    institution: "Design Academy",
  },
];

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education education={education} />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
