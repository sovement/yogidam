import './SmokeTab.css';
import { Link } from 'react-router-dom';

const SmokeTab = () => {
    return (
        <div className="smokeTab">
            <img style={{
                width: '94px',
                height: '94px',
                borderRadius: '10px'
            }}
                src='./images/kakao_login_large_wide.png' />
            <div className='textContainer'>
                <div style={{ display: 'flex' }}>
                    <div className="smokeBadge small_text">
                        흡연
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
                    <div className='btnNavi Text-Style'>
                        <img src='./images/ic_direction.svg'></img>
                        길찾기
                    </div>
                    </Link>
                    <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='btnHelp Text-Style'>
                        <img src='./images/ic_warning.svg' />
                        도움요청
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SmokeTab;