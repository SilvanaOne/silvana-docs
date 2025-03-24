import styles from './numberedList.module.css';

export default function NumberedList({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <span className={styles.number}>{index + 1}</span>
          <div className={styles.content}>{item}</div>
        </li>
      ))}
    </ol>
  );
}
