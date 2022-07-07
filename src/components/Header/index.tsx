import logo from "../../images/ignite-logo.svg";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo ignite" />
      <strong> Ignite Feed</strong>
    </header>
  );
}
