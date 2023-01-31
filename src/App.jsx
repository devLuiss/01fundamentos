import React from 'react';
import ReactDOM from 'react-dom/client';


import './global.css'
import styles from './App.module.css';
import { Post } from './components/Post/Post';
import{Header} from './components/header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';

export function App() {
 

  return (

    <div>

    <Header/>

     <div className={styles.wrapper}> 
     
      <Sidebar/>

      <main>
        
      <Post author= 'Luis henrique' 
    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Asperiores neque odio nulla saepe, molestiae omnis doloribus commodi, 
     sequi ipsa quae accusantium pariatur laborum quibusdam ad eaque eius 
     esse, odit quam!' />


    

    <Post author= 'aspdasdasdad' content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores neque odio nulla saepe, molestiae omnis doloribus commodi,
        sequi ipsa quae accusantium pariatur laborum quibusdam ad eaque eius
          esse, odit quam!' />

          
           <Post author= 'Luis henrique' 
    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Asperiores neque odio nulla saepe, molestiae omnis doloribus commodi, 
     sequi ipsa quae accusantium pariatur laborum quibusdam ad eaque eius 
     esse, odit quam!' />


    

    <Post author= 'aspdasdasdad' content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores neque odio nulla saepe, molestiae omnis doloribus commodi,
        sequi ipsa quae accusantium pariatur laborum quibusdam ad eaque eius
          esse, odit quam!' />
          </main>
     </div> 

    </div>

  );
}

