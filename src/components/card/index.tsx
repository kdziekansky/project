import { TCard } from "../../types";
import styles from "./card.module.css";

type TCardProps = {
  card: TCard;
};

export const Card = ({ card }: TCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} alt={card.alt} src={card.src} />
      {card.title && <p className={styles.title}>{card.title}</p>}
      <p className={styles.subtitle}>{card.subtitle}</p>
    </article>
  );
};