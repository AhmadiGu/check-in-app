import styles from '../styles/checkIns.module.css';
import Link from 'next/link';

export default function CheckIns() {
    return (
        <>
        <div className={styles.titleDev}>
        <h1> CheckIns</h1>
        <p> See all the check-ins below, click on one, and edit it</p>
        </div>
        <div className={styles.checkIns}>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
            <Link href="/detail" className={styles.item}> 
                <img src="../images/back.jpg" alt="image" />
                <div className={styles.info}>
                <p>As soon as I realized it was possible to actually create explanatory infographics with my content, I fell in love with the solution. I am using it on a daily basis now.</p>
                <i>Nov 10, 2022</i>
                </div> 
            </Link>
        </div>
        </>
    )
}