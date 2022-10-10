import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import styles from './MypageDetail.module.css';

const MypageDetail = ({ userInform }) => {

    return (
        <>
            <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
                <img style={{
                    position: 'fixed',
                    top: '16px',
                    left: '16px',
                    width: '24px',
                    height: '24px',
                }}
                    src="../images/ic_arrow_back.svg" />
            </Link>
            <div className={styles.headerContainer}>
                <span className="text Headline">프로필 정보</span>
            </div>
            <div className={styles.profile}>
                <img src={userInform.photoURL} alt="profile" />
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.title}>
                    계정 정보
                </div>
                <div className={styles.mypage_info}>
                    <div className={styles.sub_title}>
                        닉네임
                    </div>
                    <div className={styles.content}>
                        {userInform.displayName}
                    </div>
                    <div className={styles.profileLine} />
                </div>
                <div className={styles.mypage_info}>
                    <div className={styles.sub_title}>
                        이메일
                    </div>
                    <div className={styles.content}>
                        {userInform.email == null ? '이메일 정보가 없습니다.' : userInform.email}
                    </div>
                    <div className={styles.profileLine} />
                </div>
            </div>
            <div className={styles.mypage_tab}>
                <div className={styles.tab}>로그아웃</div>
                <div className={styles.mypageLine} />
                <div className={styles.tab}>회원탈퇴</div>
            </div>
        </>
    );
}

export default MypageDetail;