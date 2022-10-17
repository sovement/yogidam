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
                src={data.image}
                alt="흡연구역 이미지" />
            <div className='textContainer'>
                <div style={{ display: 'flex' }}>
                    <div className="smokeBadge small_text">
                        흡연
                    </div>
                    <div className='\- Headline'
                        style={{
                            display: 'inline-block',
                            width: 'calc(100% - 50px)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginLeft: '6px',
                        }}>
                        {data.title}
                    </div>
                </div>
                <div className='Footnote'
                    style={{
                        display: 'inline-block',
                        flexGrow: '1',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        color: 'var(--black-50)',
                        margin: '4px 0 17px'
                    }}>
                    {data.road}
                </div>
                {/* <div className='btnContainer'> */}
                <div style={{ display: 'flex', gap: '8px'}}>
                    <a href={`https://map.kakao.com/link/to/${data.title},${lat},${lng}`}
                        target='_blank'
                        style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
                        <div className='btnNavi Text-Style'>
                            <img src='./images/ic_direction.svg'></img>
                            길찾기
                        </div>
                    </a>
                    <Link to={{pathname: "/help", state: {address: data.address }}}
                        style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
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