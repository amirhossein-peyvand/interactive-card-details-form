import "../sass/BackCard.scss";
import backCard from "../assets/bg-card-back.png";

const BackCard = () => {
  return (
    <article className="backCard">
      <img src={backCard} alt="backCard" />
      <span className="cvv2">000</span>
    </article>
  );
};

export default BackCard;
