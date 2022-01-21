
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import "./CentralModal.css";


export default function CentralModal() {
  return(
    <div className="container"> 
      <Header className="modal-content"/>
      <Body className="modal-content"/>
      <Footer className="modal-content"/>
    </div>
  )
}
