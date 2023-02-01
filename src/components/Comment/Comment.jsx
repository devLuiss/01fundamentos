import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "../avatar/Avatar";
import styles from "./Comments.module.css";

export const Comment = ({content, onDeleteComment}) => {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://github.com/devLuiss.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="11 de maio as 09:13:30"
                dateTime="2022-05-11  08:13:30"
              >
                {" "}
                Cerca de 1h atras{" "}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              {" "}
              <Trash size={24} />{" "}
            </button>
          </header>

          <p> {content} </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span> 1 </span>
          </button>
        </footer>
      </div>
    </div>
  );
};
