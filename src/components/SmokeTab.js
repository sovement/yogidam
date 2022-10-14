import './SmokeTab.css';
import { Link } from 'react-router-dom';

const SmokeTab = ({ data }) => {

    const lat = data.address.latitude;
    const lng = data.address.longitude;

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
                    style={{ 
                        display: 'inline-block',
                        width: 'calc(100% - 16px)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        color: 'var(--black-50)', 
                        margin: '4px 0 17px' }}>
                    {data.road}
                </div>
                <div className='btnContainer'>
                    <a href={`https://map.kakao.com/link/to/${data.title},${lat},${lng}`}
                        target='_blank'
                        style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
                        <div className='btnNavi Text-Style'>
                            <img src='./images/ic_direction.svg'></img>
                            길찾기
                        </div>
                    </a>
                    <Link to="/help"
                    style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}
                    state={{ address: data.address }}>
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