import "./Header.css";

import mai from "../../assets/images/mai-wide.jpg";

import { Icon } from "@iconify/react";


export default function Header() {
  return(

    <div className="header-container">
      <div className="header-text">
        eat, sleep, dev, trade, shitpost 
      </div>
      <div className="links-container">
        <a href="https://github.com/ywvlfy" target="_blank" rel="noreferrer">
          <Icon icon="bi:github" className="header-link-icon" width="100"/>
        </a>
        <a href="https://twitter.com/yvtweets" target="_blank" rel="noreferrer">
          <Icon icon="logos:twitter" className="header-link-icon" width="100"/>
        </a>
        <a href="https://medium.com/yvtakesrisks" target="_blank" rel="noreferrer">
          <Icon icon="bi:medium" className="header-link-icon" width="100" />
        </a>
      </div>
    </div>
  )
}
