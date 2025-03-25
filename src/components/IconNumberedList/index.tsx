import styles from "./iconNumberedList.module.css";

export default function IconNumberedList({ items, icon }) {
  return (
    <ol className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          {icon ? (
            <span className={styles.icon}>{icon}</span>
          ) : (
            <span className={styles.number}>{index + 1}</span>
          )}
          <div className={styles.content}>{item}</div>
        </li>
      ))}
    </ol>
  );
}
