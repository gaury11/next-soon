import styles from '../styles/Home.module.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>    
    </div>
  )
}
