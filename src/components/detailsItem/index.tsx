"use client"
import { useSelector } from 'react-redux'; 
import { Layout } from 'antd';
import { Typography } from 'antd';
import Head from "../header";
import styles from './detailItem.module.css';
import { RootState } from '../redux/store';
import React from 'react';
import { usePathname } from 'next/navigation' 

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const DetailsItem = (): JSX.Element => { 
  const checkIns = useSelector((state: RootState) => state.checkIns.checkIns);
   
  const pathname = usePathname()
  const url = `${pathname}`;
  const parts = url.split('/').filter((part) => part !== '');
  const firstPart = parts[0]; // 'details'
  const secondPart = parts[1]; // 'PMUsSXWyKjvvoLYOCCxq%7D'
  const id = secondPart.split('%').filter((part) => part !== '');
  const itemId = id[0];

  const itemData = checkIns.filter((item) => item.id === itemId);
  
  return (
    <Layout>
      <Head />
      <Content className={styles.item}>
        {itemData.map((item) => (
          <React.Fragment key={item.id}>
            <div>
              <Title level={5} className={styles.imgUrl} editable>Image Url</Title>
              <img src={item.photo} alt="Item Photo" />
            </div>
            <div className={styles.infoDev}>
              <Title level={2} className={styles.title} editable>{item.name}</Title>
              <Paragraph editable className={styles.info}>{item.description}</Paragraph>
              <i>{item.date.seconds && new Date(item.date.seconds * 1000).toLocaleString()}</i>
            </div>
          </React.Fragment>
        ))}
      </Content>
    </Layout>
  );
};

export default DetailsItem;
