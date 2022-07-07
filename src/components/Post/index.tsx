import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./styles.module.css";

type ContentProps = {
  type: string;
  content: string;
};

interface PostProps {
  publication: {
    author: {
      img: string;
      name: string;
      ocupation: string;
    };
    content: ContentProps[];
    publishedIn: Date;
  };
}

export function Post({ publication }: PostProps) {
  const { author, content, publishedIn } = publication;

  const dateForTitle = format(publishedIn, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  function handleSubmitComment(event: FormEvent) {
    event?.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  }

  function handleInputComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setComment(event.target.value);
  }

  function onRemoveComments(commit: string) {
    const restComments = comments.filter((commits) => commits !== commit);

    setComments(restComments);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity("Campo obrigatório");
  }

  const newCommentEmpty = comment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.img} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span> {author.ocupation} </span>
          </div>
        </div>
        <time title={dateForTitle} dateTime={publishedIn.toISOString()}>
          {formatDistanceToNow(publishedIn, {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </header>
      <div className={styles.descriptionPost}>
        {content.map((comment, index) => {
          if (comment.type === "paragraph") {
            return (
              <p key={`${comment.type}${index * 100}`}>{comment.content}</p>
            );
          } else if (comment.type === "link") {
            return (
              <p key={`${comment.type}${index * 123}`}>
                <a href="#"> {comment.content} </a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleSubmitComment} className={styles.formPost}>
        <p> Deixe seu feedback </p>
        <textarea
          maxLength={100}
          value={comment}
          onChange={handleInputComment}
          name="comment"
          required
          onInvalid={handleNewCommentInvalid}
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button disabled={newCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      {comments.map((items, index) => (
        <Comment
          handleRemoveCommits={onRemoveComments}
          key={`${index * 300}`}
          comment={items}
        />
      ))}
    </article>
  );
}
