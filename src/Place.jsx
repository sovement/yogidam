import React from 'react'
import './Place.css';

function Place() {
  return (
    <div className="place-bottom">
        <div className="place-bottom-lr">
            <img className="place-image" src="data:image/jpeg;base64,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"></img>
        </div>
        <div
        style={{width: "227px",marginLeft: "0",height: "20px"}}
        className="place-bottom-lr">
            <div className="place-text-box">
                <div className="place-smoke-box"><span className="place-smoke">흡연</span>
                </div>
                {/* {실제 데이터 받도록 수정해야함} */}
                <div className="place-title-box"><span className="place-title">신촌 김덕후의차돌조 앞<br></br></span>
                <span className="place-address">서울특별시 서대문구 연세로5길 20</span>
                </div>


            </div>
            
    
        
        </div>
        <div className="place-button">
            {/* 이미지 넣어야함 */}
            <button
            className="place-button-route"><span className="place-button-route-text">길찾기</span></button>
            
        </div>

        <div className="place-button2">
        <button
            className="place-button-help"><span className="place-button-help-text">도움요청</span></button>
        </div>

    </div>
  )
}

export default Place