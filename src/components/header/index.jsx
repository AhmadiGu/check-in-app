"use client"
import { Divider, Layout, Menu} from 'antd';
import { Typography } from 'antd'; 
const { Header } = Layout; 
const { Title } = Typography;

import styles from '../../styles/head.module.css';
const Head = () => {
    return (
        <>
        <Header  className={styles.menu}>
            <Title level={3} className={styles.logo}> 
                ProductName
            </Title> 
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