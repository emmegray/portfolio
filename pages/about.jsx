import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data/data";

config.autoAddCss = false;
library.add(fab, faMusic);

export default function About() {
  return (
    <div className="About">
      <div class="container col-xxl-10">
        <div class="row flex-lg-row align-items-center g-5">
          <div class="col-lg-6 polaroid">
            <a href="#" title="Hey that's me!">
              <img
                id="emme-photo-about"
                src="works/material/photo2.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="Manuela"
                width="400"
                loading="lazy"
                title="Manuela"
              />
            </a>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 text-white">About me</h1>
            <p class="lead text-white">{data.About.Intro}</p>
          </div>

          <h1 class="display-5 fw-bold lh-1 mb-3 text-white">Experiences</h1>

          <div className="container-fluid">
            {data.About.Experiences.map((experience) => (
              <div
                class="p-3 mb-4 bg-dark rounded-3 text-light"
                key={experience.company}
              >
                <h2>{experience.title}</h2>
                <h3 class="fst-italic fw-light">{experience.subtitle}</h3>
                <p class="col-md-12 fw-light fs-4">{experience.description}</p>

                {experience.skills && (
                  <ul class="fs-5 fw-light">
                    {experience.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div id="emme-hype">
              <img
                src="works/material/Emme hype.gif"
                class="d-block d-flex img-fluid "
                alt="Emme hype"
                width="340"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
