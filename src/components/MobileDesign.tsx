import { useState } from "react";
import "../sass/MobileDesign.scss";
import BackCard from "./BackCard";
import Form from "./Form";
import FrontCard from "./FrontCard";
import Completed from "./Completed";

const MobileDesign = () => {
  const [completedForm, setCompletedForm] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  return (
    <div className="mobile">
      <section className="top">
        <div className="cardsContainer">
          <FrontCard
            cardNumber={cardInfo.cardNumber}
            cardHolderName={cardInfo.cardHolderName}
            mm={cardInfo.mm}
            yy={cardInfo.yy}
          />
          <BackCard cvc={cardInfo.cvc} />
        </div>
      </section>
      <section className="bottom">
        <div className="formContainer">
          {completedForm ? (
            <Completed />
          ) : (
            <Form
              onSetCompleted={() => {
                setCompletedForm(true);
              }}
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
      </section>
    </div>
  );
};

export default MobileDesign;
