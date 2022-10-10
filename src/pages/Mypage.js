import './Mypage.css';
import { Link } from 'react-router-dom';

const Mypage = () => {
    return (
        <>
            <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="nameTab">
                    <img className="profile" src='./images/ic_profile.png' />
                    <div>
                        <div className="name">닉네임</div>
                        <div className="email">ididididi@naver.com</div>
                    </div>
                </div>
                <div className="divLine" />
            </Link>

            <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="tab">
                    이용약관
                </div>
            </Link>
            <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="tab">
                    개인정보보호정책
                </div>
            </Link>
            <div className="lastTab">
                현재 버전&nbsp;&nbsp;
                <div className="versionBadge">Beta</div>
            </div>
        </>
    );
}

export default Mypage;