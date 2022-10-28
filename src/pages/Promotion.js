import './Promotion.css';
import Header from '../components/Header';

const Promotion = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', backgroundColor: '#000000' }}>
                    <img className='promotionImg' src='./images/image_promotion_1.png' />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', backgroundColor: '#f1f1f1' }}>
                    <img className='promotionImg' src='./images/image_promotion_2.png' />
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                    <img className='promotionImg' src='./images/image_promotion_3.png' />
                </div>

                <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <img style={{ marginBottom: '52px' }} className='promotionImg' src='./images/image_promotion_4.png' />

                    <a
                        target='_blank'
                        href="http://pf.kakao.com/_pxjkTxj"
                        className='btnKakaoChannel'
                        style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>
                        <img src='./images/ic_kakao.svg' style={{ position: 'absolute', left: '24px', zIndex: '2' }} />
                        <span class="\- Body-1">
                            여기담 카카오 채널 바로가기
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Promotion