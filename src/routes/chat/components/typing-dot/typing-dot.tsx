import styles from './typing-dot.module.css';
export default function TypingDot() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}
