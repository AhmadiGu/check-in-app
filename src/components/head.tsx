import Link from 'next/link';
import  { Layout } from "antd";
 import styles from '../styles/head.module.css';

const Navbar = () => {
    return (
        <Layout.Header  className={styles.menu}>
        <div className={styles.logo}>
            <Link href="/">
            Hotel Check In
            </Link>
        </div>
        <div className={styles.ul}>  
            <Link href="">
                Support
            </Link> 
            <Link href="">
                Feedback
            </Link> 
        </div>
    </Layout.Header>
       
    );
  }

export default Navbar; 


