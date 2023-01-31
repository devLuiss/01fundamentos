import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';


export const Comment = () => {
  return (
    <div className={styles.Comment}>
        <img src='https://github.com/diego3g.png'  className={styles.avatar} />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='11 de maio as 09:13:30' dateTime='2022-05-11  08:13:30'> Cerca de 1h atras </time>
                       </div>

                       <button title="Deletar comentario"> <Trash size={20}/> </button>


                   </header>

                 <p> Fala galeraa 👋 </p>
              </div>

          <footer >
                   <button> 
                        <ThumbsUp size={20}/>
                        Aplaudir <span> 1 </span>
                    </button>
          </footer>

              </div>
    </div>
  );
};
