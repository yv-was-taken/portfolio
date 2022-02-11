import "./Header.css";

import mai from "../../assets/images/mai-wide.jpg";

import { Icon } from "@iconify/react";

import { useState } from "react";


export default function Header() {

  const [isClick, setIsClick] = useState(false);

  const handleOnClick = () => {
    setIsClick(!isClick);
  }

  const returnLinks = (clicked) => {

    if(clicked) {
      return(

        <div className="links-container click">
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

      )
    }


  }


  return(

    <div className="header-container">
      <div className="header-text-container" onClick={handleOnClick}>
        <div className="header-text">
          <Icon  className="arrow-icon" icon="akar-icons:arrow-right-thick" />
          Links 

        </div>
      </div>
      {returnLinks(isClick)}
    </div>
  )
}
