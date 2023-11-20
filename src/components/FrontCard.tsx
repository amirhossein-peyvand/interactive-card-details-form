import "../sass/FrontCard.scss";
import cardLogo from "../assets/card-logo.svg";
import frontCardBg from "../assets/bg-card-front.png";

interface Props {
  cardHolderName: string;
  cardNumber: string;
  mm: string;
  yy: string;
}

const FrontCard = ({ cardHolderName, cardNumber, mm, yy }: Props) => {
  if (String(mm).length === 1) mm = `0${mm}`;

  return (
    <article className="frontCard">
      <img className="mainBg" src={frontCardBg} alt="frontCardBg" />
      <img className="logo" src={cardLogo} alt="logo" />
      <div className="bottom">
        <p className="cardNumber">{cardNumber || "0000 0000 0000 0000"}</p>
        <div>
          <span className="cardHolderName">
            {cardHolderName || "Jane Appleseed"}
          </span>
          <span className="date">
            {mm || "00"}/{yy || "00"}
          </span>
        </div>
      </div>
    </article>
  );
};

export default FrontCard;
