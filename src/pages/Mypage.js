import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import styles from './Mypage.module.css';

const Mypage = () => {
    // const auth = getAuth();
    // const user = auth.currentUser;

    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;

    return (
        <>
        <Link to="/mypage/detail" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.nameTab}>
                <img className={styles.profile} src='./images/ic_profile.png' alt="profile" />
                <div>
                    <div className={styles.name}>displayName</div>
                    <div className={styles.email}>email</div>
                </div>
            </div>
        </Link>
        <div className={styles.divLine}/>
        <div className={styles.tab}>
            이용약관
        </div>
        <div className={styles.tab}>
            개인정보보호정책
        </div>
        <div className={styles.tab}>
            고객지원
        </div>
        <div className={styles.lastTab}>
            버전정보
        </div>
        <div className={styles.divLine} />
        <div style={{ color:'var(--gray-100)' }} className={styles.lastTab}>
            로그아웃
        </div>
        </>
    );
}

export default Mypage;