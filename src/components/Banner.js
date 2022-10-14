import './Banner.css';

const Banner = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className="Banner">
                <img src='./images/ic_banner.png'
                style={{
                    width: '58px',
                    height: '58px'
                }}
                alt="banner" />
                <div className='banner_textContainer'>
                    <span className='banner_title'>베타 서비스는 서대문구에서 이용 가능!</span>
                    <span className='banner_subtitle'>현재 신촌역, 이대역, 연세대 일대 운영 중</span>
                </div>
            </div>
        </div>

    );
}

export default Banner;