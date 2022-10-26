import './Promotion.css';
import Header from '../components/Header';

const Promotion = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                    <img style={{ marginBottom: '52px' }} className='promotionNotice' src='./images/image_promotion_4.png' />
                    <div className='btnKakaoChannel' />
                </div>
            </div>
        </>
    );
}

export default Promotion