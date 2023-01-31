import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';


export function Post(Props) {
    return (
        
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/82249306?v=4 " className={styles.avatar} />
                    <div className={styles.authorInfo}> 
                        <strong>Diego Fernandes</strong>
                        <span> webdeveloper</span>
                      </div>
                </div>    

                <time title='11 de maio as 09:13:30' dateTime='2022-05-11  08:13:30'> Publicado ha 1h </time>

            </header>

            <div className={styles.content}>
           <p> Fala galeraa 👋 </p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

           <p> 👉 <a href=''>ane.design/doctorcarej </a></p>

             <a href=''> #novoprojeto</a>
             <a href=''> #nlw </a>
             <a href=''> #rocketseat </a>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu feedback'></textarea>
                <footer>
                <button type='submit' >Publicar</button>
                </footer>
            </form>
                <div className={styles.commentList} >
                    <Comment />
                </div>

        </article>

    );
}


