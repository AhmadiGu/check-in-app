import { EditOutlined } from "@ant-design/icons";
import Navbar from "./head";
import styles from "../styles/detailItem.module.css";

export default function ItemDetail() {
  return (
    <div>
      <Navbar />
      <div className={styles.item}>
        <img src="../images/back.jpg" alt="image" />
        <div className={styles.info}>
          <h1>
            {" "}
            CheckIn Name <EditOutlined className={styles.editIcon} />
          </h1>
          <p>
            As soon as I realized it was possible to actually create explanatory
            infographics with my content, I fell in love with the solution. I am
            using it on a daily basis now. As soon as I realized it was possible
            to actually create explanatory infographics with my content, I fell
            in love with the solution. I am using it on a daily basis now. As
            soon as I realized it was possible to actually create explanatory
            infographics with my content, I fell in love with the solution. I am
            using it on a daily basis now. As soon as I realized it was possible
            to actually create explanatory infographics with my content, I fell
            in love with the solution. I am using it on a daily basis now.
            <EditOutlined className={styles.editIcon} />
          </p>
          <i>Nov 10, 2022</i>
        </div>
      </div>
    </div>
  );
}
