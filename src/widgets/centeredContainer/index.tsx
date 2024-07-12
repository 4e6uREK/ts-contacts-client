import styles from "./styles.module.css";

function CenteredContainer({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}

export default CenteredContainer;
