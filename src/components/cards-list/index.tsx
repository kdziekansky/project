import { TCard } from "../../types";
import { Card } from "../card";
import styles from "./cards-list.module.css";

type TCardsListProps = {
  cards: Array<TCard>;
};

export const CardsList = ({ cards }: TCardsListProps) => {
  return (
    <section className={styles.cards}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};