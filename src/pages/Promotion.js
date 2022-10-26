import './Promotion.css';
import Header from '../components/Header';

const Promotion = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <img className='promotionImg' src='./images/image_promotion_1.png' />
                <img className='promotionImg' src='./images/image_promotion_2.png' />
                <img className='promotionImg' src='./images/image_promotion_3.png' />
                <img className='promotionNotice' src='./images/image_promotion_4.png' />
                <img className='btnKakaoChannel' src='./images/ic_kakaochannel.png' />
            </div>
        </>
    );
}

export default Promotion