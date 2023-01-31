import styles from './Sidebar.module.css';
import cover from '../../assets/cover.png';
import {PencilLine} from 'phosphor-react'


export const Sidebar = () => {  
     return(
            <aside className={styles.sidebar}> 
            
            <img src={cover}  className={styles.cover} />
           

            <div className={styles.profile}>
                <img src='https://avatars.githubusercontent.com/u/82249306?v=4'  className={styles.avatar}   />

                <strong> Luis Henrique </strong>
                <span> DevFront-end </span>

            </div>

                <footer>
                    <a href=''><PencilLine size={20} /> Editar seu perfil   </a> 
                </footer>

             </aside>


     )
}
