import { data as cards } from "../data";
import { CardsList } from "../components/cards-list";
import styles from "./app.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.content}>
        <CardsList cards={cards} />
      </main>
    </div>
  );
};