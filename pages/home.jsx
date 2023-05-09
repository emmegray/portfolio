import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Swing from "react-reveal/Swing";
import Fade from "react-reveal/Fade";
config.autoAddCss = false;
library.add(fab, faMusic);

export default function Home() {
  return (
    <div className="Home">
      <Fade bottom big>
        <div class="container col-xxl-10">
          <div class="row flex-lg-row-reverse align-items-center g-5">
            <div class="col-lg-6">
              <Swing duration={1500}>
                <img
                  id="emme-patata"
                  src="works/material/Emme patata.png"
                  class="d-block mx-lg-auto img-fluid"
                  alt="Emme Patata"
                  width="740"
                  loading="lazy"
                />
              </Swing>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
                Ciao! <FontAwesomeIcon icon={faMusic} bounce size="2xs" />
                <br></br>I am <b>Manuela</b>
              </h1>
              <h2 class="text-white">
                Frontend Developer, Digital Artist and Twitch Streamer from
                Italy
              </h2>
              <p class="lead text-white">
                I'm a creative chill person with the passion of learning new
                things while destroying them to understand how they work.
                <br></br>
                If you are curious to know more about me feel free to browse
                this portfolio to see my work and more!
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
