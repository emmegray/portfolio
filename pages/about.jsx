import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(fab, faMusic);

export default function About() {
  return (
    <div className="About">
      <div class="container col-xxl-10">
        <div class="row flex-lg-row align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6 polaroid">
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
            <p class="lead text-white">
              Always been passionate about the world of art and technology, already at the age of 13 I began to self-taught the basics of digital and traditional design.
            </p>
          </div>
        </div>
      </div>

      <div class="p-5 mb-4 bg-dark rounded-3 text-light">
        <div class="container-fluid">
          <h1 class="fw-bold">Experiences</h1>
          <h2>Junior Full Stack Web Developer Trainee</h2>
          <h3 class="fst-italic fw-light">Boolean Careers | February – September 2022</h3>
          <p class="col-md-8 fs-4">
            Full Stack Development course where I learned to:
          </p>
          <ul class="fs-5 fw-light">
            <li>created layout using semantic HTML5, CSS3, Bootstrap replicating web pages like Dropbox and Discord,</li>
            <li>wrote small interfaces with Vue.js and vanilla JavaScript inspired by Netflix and Spotify,</li>
            <li>created PHP/Laravel applications and SQL scripts</li>
            <li>carried out final project (webapp inspired by Airbnb) in team managing everything via Git taking care of the development of the front-end part with Vue.js</li>
          </ul>
        </div>
      </div>

      {/* <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
            <button class="btn btn-outline-light" type="button">
              Example button
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Add borders</h2>
            <p>
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've adjusted the alignment and sizing of
              both column's content for equal-height.
            </p>
            <button class="btn btn-outline-secondary" type="button">
              Example button
            </button>
          </div>
        </div>
      </div> */}

    </div>
  );
}
