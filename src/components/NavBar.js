import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key="home-link" href="#home">home</a>
      <a key="about-link" href="#about">about</a>
      <a key="projects-link" href="#projects">projects</a>
    </nav>
  );
}

export default NavBar;