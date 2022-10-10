import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from './Mypage.module.css';

const Mypage = ({userInform}) => {
    return (
        <>
        <Header userInform={userInform} />
        <Link to="/mypage/detail" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.nameTab}>
                <img className={styles.profile} src={userInform.photoURL} alt="profile" />
                <div>
                    <div className={styles.name}>{userInform.displayName}</div>
                    <div className={styles.email}>{userInform.email == null ? '이메일 정보가 없습니다.' : userInform.email}</div>
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