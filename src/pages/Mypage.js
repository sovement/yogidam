import './Mypage.css';

const Mypage = () => {
    return (
        <>
        <div className="nameTab">
            <img className="profile" src='./images/ic_profile.png'/>
            <div>
                <div className="name">닉네임</div>
                <div className="email">ididididi@naver.com</div>
            </div>
        </div>
        <div className="divLine"/>
        <div className="tab">
            이용약관
        </div>
        <div className="tab">
            개인정보보호정책
        </div>
        <div className="tab">
            고객지원
        </div>
        <div className="lastTab">
            버전정보
        </div>
        <div className="divLine" />
        <div style={{ color:'var(--gray-100)' }} className="lastTab">
            로그아웃
        </div>
        </>
    );
}

export default Mypage;