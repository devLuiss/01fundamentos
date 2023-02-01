import styles from './Sidebar.module.css';
import cover from '../../assets/cover.png';
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';


export const Sidebar = () => {  
     return(
            <aside className={styles.sidebar}> 
            
            <img src={cover}  className={styles.cover} />
           

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/82249306?v=4" />
                <strong> Luis Henrique </strong>
                <span> DevFront-end </span>

            </div>

                <footer>
                    <a href=''><PencilLine size={20} /> Editar seu perfil   </a> 
                </footer>

             </aside>


     )
}
