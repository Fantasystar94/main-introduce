import logo from './logo.svg';
import './App.css';
import Top from './component/Top';
import AboutMe from './component/AboutMe';
import './styles/global.css';
import React, { useEffect, useRef, useState } from "react";
import './styles/nav.css';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Career from './component/Career';
function App() {
  const topRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const careerRef = useRef(null);
  const [isFixed, setIsFixed] = useState('');
  
  const scrollToSection = (ref, offset = 0) => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementTop - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsFixed('fixed');
        } else {
          setIsFixed('');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (topRef.current) {
      observer.observe(topRef.current);
    }
    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isFixed}`}>
        <div className="navbar-logo">Won's Portfolio</div>
        <ul className="navbar-links">
          <li onClick={() => scrollToSection(aboutMeRef, 70)}>About Me</li>
          <li onClick={() => scrollToSection(skillsRef, 70)}>Skills</li>
          <li onClick={() => scrollToSection(projectsRef, 70)}>Projects</li>
          {/* <li onClick={() => scrollToSection(careerRef, 70)}>Career</li> */}
        </ul>
      </nav>
      <Top ref={topRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      {/* <Career ref={careerRef} /> */}
      <Footer></Footer>
    </>
  );
}

export default App;