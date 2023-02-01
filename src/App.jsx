


import './global.css'
import styles from './App.module.css';
import { Post } from './components/Post/Post';
import{Header} from './components/header/Header'
import { Sidebar } from './components/Sidebar/Sidebar';


const posts = [
  {
  id: 1,
  author: {
  avatarUrl: 'https://github.com/devLuiss.png',
  name: 'Luis Henrique',
  role: 'Front-end Developer'
  },
  content: [
  { type: 'paragraph', content: 'Fala galeraa 👋' },
  {
  type: 'paragraph',
  content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
  },
  { type: 'link', content: 'jane.design/doctorcare' }
  ],
  publishedAt: new Date('2023-01-11 08:13:30')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/devJohn.png',
      name: 'John Smith',
      role: 'Data Scientist'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone 🤖' },
      {
        type: 'paragraph',
        content: 'Just released a new machine learning model for image recognition. Check it out at john.science/image-rec'
      },
      { type: 'link', content: 'john.science/image-rec' }
    ],
    publishedAt: new Date('2022-10-15 09:30:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/devSarah.png',
      name: 'Sarah Lee',
      role: 'DevOps Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Hello friends 🚀' },
      {
        type: 'paragraph',
        content: 'Just deployed a new application on Kubernetes. Check it out at sarah.dev/k8s-app'
      },
      { type: 'link', content: 'sarah.dev/k8s-app' }
    ],
    publishedAt: new Date('2023-01-25 14:00:00')
  },
  {
    id: 5,
    author: {
    avatarUrl: 'https://github.com/devMike.png',
    name: 'Mike Parker',
    role: 'Full-Stack Developer'
    },
    content: [
    { type: 'paragraph', content: 'Hey there 🔥' },
    {
    type: 'paragraph',
    content: 'Just finished a new e-commerce project. Check it out at mike.store/ecommerce'
    },
    { type: 'link', content: 'mike.store/ecommerce' }
    ],
    publishedAt: new Date('2022-07-01 12:30:00')
    },
    {
    id: 6,
    author: {
    avatarUrl: 'https://github.com/devJane.png',
    name: 'Jane Doe',
    role: 'UX Designer'
    },
    content: [
    { type: 'paragraph', content: 'Hello everyone 🎨' },
    {
    type: 'paragraph',
    content: 'Just released a new website design. Check it out at jane.design/new-project'
    },
    { type: 'link', content: 'jane.design/new-project' }
    ],
    publishedAt: new Date('2022-09-15 18:00:00')
    },
    {
    id: 7,
    author: {
    avatarUrl: 'https://github.com/devTom.png',
    name: 'Tom Anderson',
    role: 'Mobile Developer'
    },
    content: [
    { type: 'paragraph', content: 'Hi there 📱' },
    {
    type: 'paragraph',
    content: 'Just released a new mobile app. Check it out at tom.app/new-app'
    },
    { type: 'link', content: 'tom.app/new-app' }
    ],
    publishedAt: new Date('2022-11-01 10:00:00')
    },
    {
    id: 8,
    author: {
    avatarUrl: 'https://github.com/devAlex.png',
    name: 'Alex Brown',
    role: 'Back-end Developer'
    },
    content: [
    { type: 'paragraph', content: 'Hello there 💻' },
    {
    type: 'paragraph',
    content: 'Just finished a new REST API. Check it out at alex.dev/new-api'
    },
    { type: 'link', content: 'alex.dev/new-api' }
    ],
    publishedAt: new Date('2022-12-15 08:00:00')
    },
  
];





 
  export function App() {

    return (
      <div>
        <Header/>
  
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
             return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />
            })}
          </main>
        </div>
  
      </div>    
    );
  }

