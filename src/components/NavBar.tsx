import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import headerIcon from "../assets/icons/header-icon.png";
import sunModeIcon from "../assets/icons/sun-mode-icon.png";
import sunModeDarkIcon from "../assets/icons/sun-mode-icon-dark.png";
import classes from "./NavBar.module.css";

export default function NavBar() {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDark);
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  function handleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <header className={`${classes.header} ${!isDark ? classes.lightMode : ""}`}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <Link to="/" className={classes.logo}>
            <img src={headerIcon} alt="Ultimate Hollowing" />
            <span>Ultimate Hollowing</span>
          </Link>
          <nav className={classes.leftNav}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/soul-level-one"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  SL1
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={classes.rightSection}>
          <nav className={classes.rightNav}>
            <ul>
              <li>
                <NavLink
                  to="/rules"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Rules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <button onClick={handleDarkMode} className={classes.sunModeButton}>
            <img
              src={isDark ? sunModeDarkIcon : sunModeIcon}
              className={classes.sunModeIcon}
              alt="Toggle sun mode"
              title="Toggle sun mode"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
