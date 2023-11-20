import "../sass/BackCard.scss";
import backCard from "../assets/bg-card-back.png";

interface Props {
  cvc: string;
}

const BackCard = ({ cvc }: Props) => {
  return (
    <article className="backCard">
      <img src={backCard} alt="backCard" />
      <span className="cvv2">{cvc || "000"}</span>
    </article>
  );
};

export default BackCard;
