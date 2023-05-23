import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import React from "react";

function Project({state}) {

    return (
        <div className="body">
            {state === "AboutMe" && <AboutMe />}
            {state === "Portfolio" && <Portfolio />}
            {state === "Contact" && <Contact />}
            {state === "Resume" && <Resume />}
        </div>
    )
}

export default Project;