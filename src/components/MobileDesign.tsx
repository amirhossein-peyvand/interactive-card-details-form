import "../sass/MobileDesign.scss";
import BackCard from "./BackCard";
import Form from "./Form";
import FrontCard from "./FrontCard";

const MobileDesign = () => {
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
          <Form />
        </div>
      </section>
    </div>
  );
};

export default MobileDesign;
