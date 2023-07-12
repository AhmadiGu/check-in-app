"use client"
import { Divider, Layout, Menu , Typography } from 'antd';
import Link from 'next/link';
import styles from './head.module.css';

const { Header } = Layout; 
const { Title } = Typography;


const Head = () => {
    return (
        <>
        <Header  className={styles.menu}>
           <Link href="/" className={styles.logo}>
            <Title level={3} > 
                ProductName
            </Title> 
            </Link>
            <Menu  theme="light" mode="horizontal" defaultSelectedKeys={['2']} className={styles.ul}> 
                <Menu.Item key="1">Support</Menu.Item>
                <Menu.Item key="2">Fadeback</Menu.Item>
            </Menu> 
        </Header>
        <Divider className={styles.divider} />
        </>
        
    )
}

export default Head