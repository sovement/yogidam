import './NonsmokeTab.css';
import { Link } from 'react-router-dom';

const NonsmokeTab = ({data}) => {
    return (
        <div className="nonsmokeTab">
            <img style={{
                width: '94px',
                height: '94px',
                borderRadius: '10px'
            }}
                src={data.image} />
            <div className='textContainer'>
                <div style={{ display: 'flex' }}>
                    <div className="nonsmokeBadge small_text">
                        금연
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
                    {/* TODO: 값 전달해야 함 */}
                    <Link to="/complaint" style={{ flexGrow: '1', textDecoration: 'none', color: 'black' }}>
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