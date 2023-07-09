"use client"
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation';
import DetailsItem from '../../../components/detailsItem/index.jsx';

const checkInsDetails = () => {
    const router = useRouter();
    // const { id } = router.query;
    
    return (
    <main className={styles.main}>
       <DetailsItem />
    </main> 
    )
}

export default checkInsDetails