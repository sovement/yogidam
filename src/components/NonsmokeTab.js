import './NonsmokeTab.css';
import { Link } from 'react-router-dom';

const NonsmokeTab = () => {
    return (
        <div className="nonsmokeTab">
            <img style={{
                width: '94px',
                height: '94px',
                borderRadius: '10px'
            }}
                src='./images/kakao_login_large_wide.png' />
            <div className='textContainer'>
                <div style={{ display: 'flex' }}>
                    <div className="nonsmokeBadge small_text">
                        금연
                    </div>
                    <span className='\- Headline'>
                        &nbsp;신촌 김덕후의차돌조 앞
                    </span>
                </div>
                <div className='Footnote'
                    style={{ color: 'var(--black-50)', margin: '4px 0 17px' }}>
                    서울특별시 서대문구 연세로5길 20
                </div>
                <div className='btnContainer'>
                    <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='btnComplaint Text-Style'>
                            <img style={{ width: '18px', height: '18px' }} src='./images/ic_chat.svg' />
                            민원신청
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NonsmokeTab;