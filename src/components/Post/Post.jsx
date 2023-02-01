import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../avatar/Avatar';
import ptBr from 'date-fns/locale/pt-BR';
import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

   


export function Post({author ,publishedAt, content}) {

    const [comments, setComments] = useState(['que bacana!']);

    const [newCommentText, setNewCommentText] = useState('');

    
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
    })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment(){

    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
 
}

function handleNewCommentChange(){
    setNewCommentText(event.target.value);
    };

    function deleteComment(comment,){
       setComments(comments.filter(c => c !== comment));
       
    }

    return (
        
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatarUrl}/>
                    
                    <div className={styles.authorInfo}> 
                    
                        <strong>{author.name}  </strong>

                        <span> {author.role} </span>

                      </div>
                </div>    

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> { publishedDateRelativeToNow } </time>

            </header>

            <div className={styles.content}>
            {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p key={line.content} >{line.content}</p>;
                } else if(line.type === 'link'){
                    return <p key={line.content} > <a href='#'> {line.content}   </a>   </p>
                }
            })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                value={newCommentText}
                onChange={handleNewCommentChange}
                name='comment' 
                placeholder='Deixe seu feedback'></textarea>
            <footer>
                <button type='submit' >Publicar</button>
                </footer>
            </form>
                <div className={styles.commentList} >
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })
                    }
                </div>

        </article>

    );
}


