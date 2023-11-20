import { useState } from "react";
import "../sass/DesktopDesign.scss";
import BackCard from "./BackCard";
import Completed from "./Completed";
import Form from "./Form";
import FrontCard from "./FrontCard";
import dekstopMainBg from "../assets/bg-main-desktop.png";

const DesktopDesign = () => {
  const [completedForm, setCompletedForm] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  return (
    <section className="desktop">
      <img className="desktopBg" src={dekstopMainBg} alt="dekstopMainBg" />
      <div className="mainContainer">
        <div className="cardContainer">
          <FrontCard
            cardHolderName={cardInfo.cardHolderName}
            cardNumber={cardInfo.cardNumber}
            mm={cardInfo.mm}
            yy={cardInfo.yy}
          />
          <BackCard cvc={cardInfo.cvc} />
        </div>
        <div className="formContainer">
          {completedForm ? (
            <Completed />
          ) : (
            <Form
              onSetCompleted={() => setCompletedForm(true)}
              onSetCardInfo={({ cardHolderName, cardNumber, cvc, mm, yy }) =>
                setCardInfo({
                  ...cardInfo,
                  cardHolderName,
                  cardNumber,
                  cvc,
                  mm,
                  yy,
                })
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default DesktopDesign;
