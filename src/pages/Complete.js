import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import './Complete.css';

const Complete = () => {

    const location = useLocation().state;

    const strings = [
        {
            id: 'complaintTitle',
            text: '민원 신청이 완료되었습니다',
        },
        {
            id: 'complaintBody',
            text: '빠른 시일 내 검토하여 적합한 정부 부처에 전달할게요\n상생 가능한 도시와 건전한 흡연 문화 조성에\n한 발 나아갈 수 있는 의견을 주셔서 감사합니다!',
        },
        {
            id: 'helpTitle',
            text: '접수가 완료되었습니다',
        },
        {
            id: 'helpBody',
            text: '빠르게 확인한 후 서비스에 반영하겠습니다.\n더 정확한 서비스 제공에 도움을 주셔서 감사합니다!',
        },
    ];

    var title, body;

    if (location === 'complaint') {
        title = strings[0].text;
        body = strings[1].text;
    } else if (location === 'help') {
        title = strings[2].text;
        body = strings[3].text;
    }

    return (
        <>
            <Header />
            <div className="container">
                <div style={{ margin: '89px 24px 16px' }} className="Title Large-Title">
                    {title}
                </div>
                <div style={{ whiteSpace: 'pre-wrap', textAlign: 'center', color: 'var(--black-50)' }} className="Subtext Body-2">
                    {/* {
                        body.split("\n").map((i,key) => {
                            return <div key={key}>{i}</div>;
                        })
                    } */}
                    {body}
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