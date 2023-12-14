import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle";

const MainComponent = () => {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='wrapper' data-theme={isDark ? "dark" : "light"}>
      <div className='wrapper__content'>

        <div class="header">

          <div className='brand'>
            <img src='./alarado-icon-homepage.svg' />
            <span>Alarado</span>
          </div>
          <nav className='nav'>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Resource</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />{isDark}



          <div className="mobile-nav-button" onClick={handleButtonClick}>
            <div className={`mobile-nav-button__line ${isMenuOpen ? 'mobile-nav-button__line--1' : ''}`}></div>
            <div className={`mobile-nav-button__line ${isMenuOpen ? 'mobile-nav-button__line--2' : ''}`}></div>
            <div className={`mobile-nav-button__line ${isMenuOpen ? 'mobile-nav-button__line--3' : ''}`}></div>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>

            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Resource</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />{isDark}

          </div>

        </div>

        <div class="content">
          <div className='content__box'>
            <div>
              <span className='subtitle'>😎  Simple way to communicate</span>
              <h1 className='title'>Actions for Accessibility in Design</h1>
              <p>The fastest way to build and deploy websites with resusable components.</p>

              <button className='btn'>GET STARTED</button>

              <a href='#' className='link'>Get live demo</a>

              <ul className='requirements'>
                <li><span>No credit card required</span></li>
                <li><span>No software to install</span></li>
              </ul>

            </div>
            <div>
              <img src='./hero-image-simple-homepage.png' />
            </div>
          </div>
        </div>

        <div class=" footer"></div>

      </div>

    </div>
  );
};

export default MainComponent;
