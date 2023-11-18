import { useState } from "react";
import "../sass/DesktopDesign.scss";
import BackCard from "./BackCard";
import Completed from "./Completed";
import Form from "./Form";
import FrontCard from "./FrontCard";
import dekstopMainBg from "../assets/bg-main-desktop.png";

const DesktopDesign = () => {
  const [completedForm, setCompletedForm] = useState(false);

  return (
    <section className="desktop">
      <img className="desktopBg" src={dekstopMainBg} alt="dekstopMainBg" />
      <div className="mainContainer">
        <div className="cardContainer">
          <FrontCard />
          <BackCard />
        </div>
        <div className="formContainer">
          {completedForm ? (
            <Completed />
          ) : (
            <Form onSetCompleted={() => setCompletedForm(true)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default DesktopDesign;
