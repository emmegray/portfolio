import React from "react";
import Header from "../components/Header";
import { data } from "../data/data";
import Fade from "react-reveal/Fade";

export default function Works() {
  return (

    <div className="gallery">
      <Fade bottom big cascade distance="10%" duration={1000}>
        {data.Works.Arts.map((arts) => (
          <div className="gallery-item">
                <img src={arts.src} alt={arts.alt} width="100%" layout="responsive" loading="lazy" />
          </div>
        ))}
      </Fade>
    </div>
  );
}
