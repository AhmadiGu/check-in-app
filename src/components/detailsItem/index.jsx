"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout} from 'antd';
import { Typography } from 'antd'; 
import Head from "../header"
import styles from './detailItem.module.css';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

const { Content } = Layout;
const { Title } = Typography;
const { Paragraph } = Typography;

const DetailsItem = () => {  
    const checkIns = useSelector((state) => state.checkIns.checkIns);
    const pathname = usePathname()
    const url = `${pathname}` 
    const parts = url.split('/').filter(part => part !== '');  
    const firstPart = parts[0]; // 'details'
    const secondPart = parts[1]; // 'PMUsSXWyKjvvoLYOCCxq%7D'
    const id = secondPart.split('%').filter(part => part !== ''); 
    const itemId = id[0]; 

    const itemData = checkIns.filter((item) => item.id === itemId); 
    return (
        <Layout>
        <Head />
        <Content className={styles.item}>
            {itemData.map((item) => (
            <>
            <div> 
                <Title level={5} className={styles.imgUrl} editable>Image Url</Title>
                <img src={item.photo} />
            </div>
            <div className={styles.infoDev}>
                <Title level={2} className={styles.title} editable>{item.name}</Title>
                <Paragraph editable className={styles.info} > {item.description}</Paragraph> 
                <i>{item.date.seconds && new Date(item.date.seconds * 1000).toLocaleString()}</i>
            </div>
            </> 
            ))}
        </Content>
        </Layout>
    )
}

export default DetailsItem