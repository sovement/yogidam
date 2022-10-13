import { Link } from 'react-router-dom';
import styles from './MypageDetail.module.css';
import { useHistory } from "react-router-dom";
import { auth, db } from '../firebase';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

const MypageDetail = () => {
    const history = useHistory();

    const logout = () => {
        fetch("https://kapi.kakao.com/v1/user/logout",{
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${sessionStorage.getItem("kakao_token")}`,
                'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
        auth.signOut();
        sessionStorage.clear();
        history.push("/");
    }

    const unlink = () => {
        fetch("https://kapi.kakao.com/v1/user/unlink",{
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${sessionStorage.getItem("kakao_token")}`,
                'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
        const user = auth.currentUser;
        deleteUser(user);
        const userRef = doc(db, "user", sessionStorage.getItem("uid"));
        deleteDoc(userRef);
        sessionStorage.clear();
        history.push("/");
    }

    return (
        <>
            <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
                <img style={{
                    position: 'fixed',
                    zIndex: '2',
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
                <img src={sessionStorage.getItem("photoURL")} alt="profile" />
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
                        {sessionStorage.getItem("displayName")}
                    </div>
                    <div className={styles.profileLine} />
                </div>
                <div className={styles.mypage_info}>
                    <div className={styles.sub_title}>
                        이메일
                    </div>
                    <div className={styles.content}>
                        {sessionStorage.getItem("email").slice(-13) === '@sovement.com' ? '이메일 정보가 없습니다.' : sessionStorage.getItem("email")}
                    </div>
                    <div className={styles.profileLine} />
                </div>
            </div>
            <div className={styles.mypage_tab}>
                <div className={styles.tab} onClick={logout}>로그아웃</div>
                <div className={styles.mypageLine} />
                <div className={styles.tab} onClick={unlink}>회원탈퇴</div>
            </div>
        </>
    );
}

export default MypageDetail;