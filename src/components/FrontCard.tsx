import "../sass/FrontCard.scss";
import cardLogo from "../assets/card-logo.svg";

const FrontCard = () => {
  return (
    <article className="frontCard">
      <img className="logo" src={cardLogo} alt="logo" />
      <div className="bottom">
        <p className="cardNumber">0000 0000 0000 0000</p>
        <div>
          <span className="cardHolderName">Jane Appleseed</span>
          <span className="date">00/00</span>
        </div>
      </div>
    </article>
  );
};

export default FrontCard;
