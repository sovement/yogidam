import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './MypageDetail.module.css';
import { auth, db } from '../firebase';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import ReactGA from 'react-ga';

const MypageDetail = () => {
    const history = useHistory();

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }
    }, []);

    const useConfirm = (onConfirm, onCancel, message = "Are you sure?") => {
        if (!onConfirm && typeof onConfirm !== "function") {
            return;
        }

        if (!onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {

                onConfirm();

            } else {
                onCancel();
            }
        };

        return confirmAction;
    };
    const applyConfirmLog = () => {

        console.log("로그아웃확인완료")
        alert('로그아웃되었습니다.');
        logout();
    }
    const applyConfirmUnlink = () => {

        console.log("탈퇴확인완료")
        alert('탙퇴완료되었습니다. 이용해주셔서 감사합니다.');
        unlink();
    }
    const cancelConfirm = () => console.log("취소완료")

    const confirmLog = useConfirm(
        applyConfirmLog,
        cancelConfirm,
        "로그아웃하시겠습니까?"
    );

    const confirmExit = useConfirm(
        applyConfirmUnlink,
        cancelConfirm,
        "회원 탈퇴 하시겠습니까?"
    )

    const logout = () => {
        fetch("https://kapi.kakao.com/v1/user/logout", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("kakao_token")}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
        auth.signOut();
        sessionStorage.clear();
        history.push("/");
    }

    const unlink = () => {
        fetch("https://kapi.kakao.com/v1/user/unlink", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("kakao_token")}`,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
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
                <div className="log-out"
                    onClick={() => {
                        ReactGA.event({
                            category: "Button",
                            action: "click Logout",
                            label: "Logout",
                        });
                    }}>
                    <div className={styles.tab} onClick={confirmLog}>
                        <span>로그아웃</span>
                    </div>
                </div>
                <div className={styles.mypageLine} />
                <div
                    onClick={() => {
                        ReactGA.event({
                            category: "Button",
                            action: "click Quit",
                            label: "Quit",
                        });
                    }}>
                    <div className={styles.tab} onClick={confirmExit}>
                        회원탈퇴
                    </div>
                </div>
            </div>
        </>
    );
}

export default MypageDetail;