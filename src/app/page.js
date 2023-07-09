import CheckIns from '../components/checkIns' 
import styles from './page.module.css'
 

export default function Home() {
  return (
    <main className={styles.main}> 
       <CheckIns />
    </main>
  )
}
