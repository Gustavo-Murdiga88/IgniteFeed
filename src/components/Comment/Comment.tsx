import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface CommentProps {
  comment: string;
  handleRemoveCommits(commit: string): void;
}

export function Comment({ comment, handleRemoveCommits }: CommentProps) {
  const [amountLikeComment, setAmountLikeComment] = useState(0);

  function handleLikeComment() {
    setAmountLikeComment((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentContent}>
        <Avatar
          hasBorder={false}
          src="https://github.com/Gustavo-Murdiga88.png"
        />
        <div className={styles.containerComment}>
          <div className={styles.commentBox}>
            <header>
              <div>
                <strong>Gustavo Murdiga</strong>
                <time
                  title="29 de Junho às 00:08"
                  dateTime="2022-06-29 00:08:00"
                >
                  Cerca de 1h atrás
                </time>
              </div>
              <button
                onClick={() => {
                  handleRemoveCommits(comment);
                }}
                title="Remover comentário"
              >
                <Trash size={24} />
              </button>
            </header>
            <p>{comment}</p>
          </div>
          <footer>
            <button title="aplaudir comentário" onClick={handleLikeComment}>
              <ThumbsUp size={16} /> Aplaudir <span>{amountLikeComment}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
