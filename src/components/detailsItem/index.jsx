import { Layout} from 'antd';
import { Typography } from 'antd'; 
import Head from "../header"
import styles from '../../styles/detailItem.module.css';

const { Content } = Layout;
const { Title } = Typography;
const { Paragraph } = Typography;

const DetailsItem = () => {
    return (
        <Layout>
        <Head />
        <Content className={styles.item}>
            <img src="https://picsum.photos/200/300" alt="random" />
            <div className={styles.infoDev}>
                <Title level={2} className={styles.title} editable>Details</Title>
                <Paragraph editable className={styles.info} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis ipsum ad, vel dolore iusto libero veniam dignissimos recusandae ab in hic id provident esse culpa totam dolor? Nobis, dolorem.</Paragraph>
                <i>Nov 10, 2022</i>
            </div> 
        </Content>
        </Layout>
    )
}

export default DetailsItem