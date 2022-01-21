import "./Header.css";

import mai from "../../assets/images/mai-look.png";

import { Icon } from "@iconify/react";


export default function Header() {
  return(

    <div className="header-container">
      <img src={mai} alt="Mai Sakurajima" className="header-image"/>
      <div className="header-text">
        <div className="header-title-section">
          <h2 className="header-title-section-text">Fullstack Developer</h2>
          <h2 className="header-title-section-text">Writer </h2>
          <h2 className="header-title-section-text">Trader</h2>
          <h2 className="header-title-section-text">On Chain Degenerate</h2>
          <h2 className="header-title-section-text">Shitposting Professional</h2>
        </div>
        <div className="header-link-section">
          <Icon icon="akar-icons:github-fill" className="header-link" />
          <Icon icon="akar-icons:medium-fill" className="header-link" />
          <Icon icon="akar-icons:twitter-fill" className="header-link" />

        </div>
      </div>
    </div>
  )
}
