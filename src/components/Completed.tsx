import complete from "../assets/icon-complete.svg";
import "../sass/Completed.scss";

const Completed = () => {
  return (
    <section className="completed">
      <img src={complete} alt="complete" />
      <div className="middlePart">
        <p className="message">THANK YOU!</p>
        <p className="desc">We've added your card details</p>
      </div>
      <button className="continueBtn">Continue</button>
    </section>
  );
};

export default Completed;
