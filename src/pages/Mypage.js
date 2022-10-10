import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from './Mypage.module.css';

const Mypage = () => {

    return (
        <>
        <Header />
        <Link to="/mypage/detail" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.nameTab}>
                <img className={styles.profile} src='./images/ic_profile.png' alt="profile" />
                <div>
                    <div className={styles.name}>displayName</div>
                    <div className={styles.email}>email</div>
                </div>
            </div>
            <div className={styles.divLine} />
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.tab}>
                이용약관
            </div>
        </Link>
        <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.tab}>
                개인정보보호정책
            </div>
        </Link>
        <div className="lastTab">
            현재 버전&nbsp;&nbsp;
            <div className={styles.versionBadge}>Beta</div>
        </div> 
        </>
    );
}

export default Mypage;