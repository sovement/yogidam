import { Link } from "react-router-dom";
import Header from "../components/Header";
import './Complete.css';

const Complete = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div style={{ margin: '89px 24px 16px' }} className="Title Large-Title">
                    민원 신청이 완료되었습니다
                </div>
                <div style={{ textAlign: 'center', color: 'var(--black-50)' }} className="Subtext Body-2">
                    빠른 시일 내 검토하여 적합한 정부 부처에 전달할게요.<br />
                    상생 가능한 도시와 건전한 흡연 문화 조성에<br />
                    한 발 나아갈 수 있는 의견을 주셔서 감사합니다!<br />
                </div>
                <img style={{ width: '280px', height: '280px', marginTop: '88px' }} src='./images/app_symbol_3d.png' />
            </div>
            <Link to='/' style={{ textDecoration: "none", color: 'black' }}>
                <div className="btnHome">
                    지도로 돌아가기
                </div>
            </Link>
            <div className="gradientBoxDown" />
        </>
    );
}

export default Complete;