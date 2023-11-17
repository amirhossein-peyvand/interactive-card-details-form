import "../sass/MobileDesign.scss";
import BackCard from "./BackCard";
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
      <section className="bottom"></section>
    </div>
  );
};

export default MobileDesign;
