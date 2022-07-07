import styles from "./styles.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div>
        <Avatar src="https://github.com/Gustavo-Murdiga88.png" />
      </div>
      <div className={styles.profile}>
        <strong>Gustavo Murdiga</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
