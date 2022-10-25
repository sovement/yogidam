import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import styles from './Mypage.module.css';
import ReactGA from 'react-ga';

const Mypage = () => {
    const history = useHistory();

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }
    }, []);


    return (
        <>
            <Header />
            <Link to="/mypage/detail" style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles.nameTab}
                    onClick={() => {
                        ReactGA.event({
                            category: "Button",
                            action: "click MypageDetail",
                            label: "MypageDetail",
                        });
                    }}>
                    <img className={styles.profile} src={sessionStorage.getItem("photoURL")} alt="profile" />
                    <div>
                        <div className={styles.name}>{sessionStorage.getItem("displayName")}</div>
                        <div className={styles.email}>{sessionStorage.getItem("email").slice(-13) === '@sovement.com' ? '이메일 정보가 없습니다.' : sessionStorage.getItem("email")}</div>
                    </div>
                </div>
                <div className={styles.divLine} />
            </Link>
            <Link to="/rules" style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles.tab}

                    onClick={() => {
                        ReactGA.event({
                            category: "Button",
                            action: "click TermUsage",
                            label: "TermUsage",
                        });
                    }}>
                    이용약관
                </div>
            </Link>
            <Link to="/rulesprivate" style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles.tab}
                    onClick={() => {
                        ReactGA.event({
                            category: "Button",
                            action: "click TermPrivacy",
                            label: "TermPrivacy",
                        });
                    }}>
                    개인정보보호정책
                </div>
            </Link>
            <div className={styles.lastTab}>
                현재 버전&nbsp;&nbsp;
                <div className={styles.versionBadge}>Beta</div>
            </div>
        </>
    );
}

export default Mypage;