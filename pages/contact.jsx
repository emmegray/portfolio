import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { data } from "../data/data";
import Fade from "react-reveal/Fade";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <Fade bottom cascade distance="10%" duration={1000}>
        <div class="container col-xxl-10">
          <div class="row flex-lg-row align-items-center">
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
                {data.Contact.Intro}
              </h1>
              {data.Contact.Socials.map((social) => (
                <div key={social.name} >
                  <Link key={social.name} href={social.link} passHref>
                    <div id="social" class="p-3 mb-4 rounded-3 text-light d-flex justify-content-center cursor">
                      <FontAwesomeIcon
                        id="contact-icon"
                        icon={social.icon}
                        style={{ color: "#FFFFFF" }}
                        size="m"
                      />

                      <h2>{social.name}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div class="col-lg-6 white-line">
              <img
                id="emme-show"
                src="works/material/Emme che fa vedere cose.png"
                class="d-block mx-lg-auto img-fluid"
                alt="Emme che fa vedere cose"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}