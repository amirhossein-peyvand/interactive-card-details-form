import { useState } from "react";
import "../sass/MobileDesign.scss";
import BackCard from "./BackCard";
import Form from "./Form";
import FrontCard from "./FrontCard";
import Completed from "./Completed";

const MobileDesign = () => {
  const [completedForm, setCompletedForm] = useState(false);

  return (
    <div className="mobile">
      <section className="top">
        <div className="cardsContainer">
          <FrontCard />
          <BackCard />
        </div>
      </section>
      <section className="bottom">
        <div className="formContainer">
          {completedForm ? (
            <Completed />
          ) : (
            <Form onSetCompleted={() => setCompletedForm(true)} />
          )}
        </div>
      </section>
    </div>
  );
};

export default MobileDesign;
