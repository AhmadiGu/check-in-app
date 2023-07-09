"use client"
import { Divider, Layout} from 'antd';
import { Typography } from 'antd'; 
import { Card, Space } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from '../header';
import styles from '../../styles/checkIns.module.css';
const { Content } = Layout;
const { Title } = Typography;

const CheckIns = () => {
    const router = useRouter();

    const handleCardClick = (id) => {
      router.push(`/details/${id}`);
    };

    return (
        <Layout>
        <Head />
        <Content>
          <div className={styles.titleDev}>
            <Title level={2}>CheckIns</Title>
            <p>See all the checkins below, click on one, and edit it</p>
          </div>
          <Divider  className={styles.divider}/>
           <Space wrap  size="middle" align='start' className={styles.content}>
           <Link href="/details/[id]" as="/details/1">
                <Card  className={styles.card} onClick={() => handleCardClick(1)}>
                <div><img src="https://picsum.photos/200/300" alt="random" /></div> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. </p>
                    <i>Nov 10, 2022</i>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/2"> 
                <Card  className={styles.card} onClick={() => handleCardClick(2)}>
                <img src="https://picsum.photos/200/300" alt="random" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <i>Nov 10, 2022</i>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/3"> 
                <Card  className={styles.card} onClick={() => handleCardClick(3)}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</p>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/4">
                <Card  className={styles.card} onClick={() => handleCardClick(4)}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</p>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/5">
                <Card  className={styles.card} onClick={() => handleCardClick(5)}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</p>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/6">
                <Card  className={styles.card} onClick={() => handleCardClick(6)}>
                <img src="https://picsum.photos/200/300" alt="random" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. </p>
                    <i>Nov 10, 2022</i>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/7">
                <Card  className={styles.card} onClick={() => handleCardClick(7)}>
                <img src="https://picsum.photos/200/300" alt="random" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. </p>
                    <i>Nov 10, 2022</i>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/8">
                <Card  className={styles.card} onClick={() => handleCardClick(8)}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</p>
                </Card>
            </Link>
            <Link href="/details/[id]" as="/details/9">
                <Card  className={styles.card} onClick={() => handleCardClick(9)}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</p>
                </Card>
            </Link>
           </Space>
        </Content> 
        </Layout>
    )
}

export default CheckIns