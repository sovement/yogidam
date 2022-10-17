import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [isChecked, setChecked] = useState(false);

    return (
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src="./images/app_logo_orange.svg" />
            </Link>
            <input type="checkbox" id="cbMenu" checked={isChecked} onChange={(e) => setChecked(!isChecked)} />
            <label htmlFor="cbMenu">
                <img src="./images/ic_menu.svg" />
            </label>
            <div id="sideMenu" onClick={() => { setChecked(!isChecked) }}>
                {sessionStorage.getItem("kakao_token") == null ? (
                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="tabProfile">
                            <img className="profilePicture" src="./images/ic_profile.png" />
                            로그인하세요
                        </div>
                    </Link>
                ) : (
                    <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="tabProfile">
                            <img className="profilePicture" src={sessionStorage.getItem("photoURL")} />
                            {sessionStorage.getItem("displayName")}
                        </div>
                    </Link>
                )}


                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="tab">
                        <img className="tabIcon" src="./images/ic_map.svg" />
                        지도
                    </div>
                </Link>
                {/* <Link to="/promotion" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="tab">
                        <img className="tabIcon" src="./images/ic_reward.svg" />
                        리워드 프로모션
                    </div>
                </Link> */}
                <Link to="/complaint" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="tab">
                        <img className="tabIcon" src="./images/ic_chat.svg" />
                        민원 신청
                    </div>
                </Link>

                <a target='_blank' href="https://confirmed-abacus-c59.notion.site/YOGIDAM-efd71a09b8fe40bc9cf19d4e38733573"
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="tab">
                        <img className="tabIcon" src="./images/app_symbol.svg" />
                        About&nbsp;
                        <img width={80} height={12} src="./images/app_logo_sovement.svg" />
                    </div>
                </a>
                <div className='menuFooter'>
                    {/* <a target='_blank' href="https://www.google.com/search?q=(%EC%95%B1+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C+%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9E%84)&oq=(%EC%95%B1+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C+%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9E%84)&aqs=chrome..69i57j0i546l3.8045j0j7&sourceid=chrome&ie=UTF-8" className='btnDownload' style={{ textDecoration: 'none', color: 'white' }}>
                        앱 다운로드
                    </a> */}
                    <a target='_blank' href="http://pf.kakao.com/_pxjkTxj" className='btnContact' style={{ textDecoration: 'none', color: 'black' }}>
                        카카오톡 문의
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;