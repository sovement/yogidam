import './SmokeTab.css';
import { Link } from 'react-router-dom';

const SmokeTab = ({data}) => {
    return (
        <div className="smokeTab">
            <img style={{
                width: '94px',
                height: '94px',
                borderRadius: '10px'
            }}
                src={data.image} />
            <div className='textContainer'>
                <div style={{ display: 'flex' }}>
                    <div className="smokeBadge small_text">
                        흡연
                    </div>
                    <span className='\- Headline'>
                        &nbsp;{data.title}
                    </span>
                </div>
                <div className='Footnote'
                    style={{ color: 'var(--black-50)', margin: '4px 0 17px' }}>
                    {data.road}
                </div>
                <div className='btnContainer'>
                    <a href='https://map.kakao.com/link/to/신촌&nbsp;김덕후의차돌조&nbsp;앞,37.402056,127.108212'
                    target='_blank'
                    style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
                        <div className='btnNavi Text-Style'>
                            <img src='./images/ic_direction.svg'></img>
                            길찾기
                        </div>
                    </a>
                    <Link to="/help" style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
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