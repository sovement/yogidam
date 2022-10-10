import { getAuth } from "firebase/auth";
import styles from './MypageDetail.module.css';

const MypageDetail = () => {
    // const auth = getAuth();
    // const user = auth.currentUser;

    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;

    return (
        <div>
            <div className={styles.profile}>
                <img src='./images/ic_profile.png' alt="profile" />
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
                        어쩌구
                    </div>
                    <div className={styles.profileLine} />
                </div>
                <div className={styles.mypage_info}>
                    <div className={styles.sub_title}>
                        이메일
                    </div>
                    <div className={styles.content}>
                        1234567@naver.com
                    </div>
                    <div className={styles.profileLine} />
                </div>
            </div>
            <div className={styles.mypage_tab}>
                <div className={styles.tab}>로그아웃</div>
                <div className={styles.mypageLine} />
                <div className={styles.tab}>회원탈퇴</div>
            </div>
        </div>
    );
}

export default MypageDetail;