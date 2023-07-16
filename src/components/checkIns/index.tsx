"use client"
import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css'
import { Divider, Layout,  Card, Typography} from 'antd'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from '../header';
import styles from './checkIns.module.css'; 
import { getCheckIns } from '../redux/checkInsSlice' 
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store'; 
 
const { Content } = Layout;
const { Title } = Typography;

const CheckIns = () => { 
    const checkIns = useSelector((state: RootState) => state.checkIns.checkIns);
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter(); 

    useEffect(() => {
        dispatch(getCheckIns()); 
    }, [dispatch]); 

    const handleCardClick = (id: string) => { 
      router.push('/details/${id}') 
    }; 
    
    const breakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1
    };
    return (
        <Layout>
          <Head />
          <Content>
            <div className={styles.titleDev}>
              <Title level={2}>CheckIns</Title>
              <p>See all the checkins below, click on one, and edit it</p>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.content}>
            <Masonry
             breakpointCols={breakpoints}
             className={styles.myMasonryGrid}
             columnClassName={styles.myMasonryGrid_column} 
            >
            
              {checkIns.map((checkIn) => (
              <div>
                <Link href="/details/[id]" as={`/details/${checkIn.id}}`} key={checkIn.id}>
                  <Card className={styles.card} onClick={() => handleCardClick(checkIn.id)}>
                    <div><img src={checkIn.photo} alt='image' /></div>
                    <p>{checkIn.description}</p>
                    <i>{checkIn.date && checkIn.date.seconds && new Date(checkIn.date.seconds * 1000).toLocaleString()}</i>
                  </Card>
                </Link>
              </div>
              ))} 
            </Masonry>
            </div>
          </Content>
        </Layout>
      );
}; 

export default CheckIns
