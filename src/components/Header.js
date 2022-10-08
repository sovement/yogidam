import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src="./images/app_logo_orange.svg" />
            </Link>
            <input type="checkbox" id="cbMenu" />
            <label for="cbMenu">
                <img src="./images/ic_menu.svg" />
            </label>
            <div id="sideMenu">
                <ul>
                    <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="tabProfile">
                            {/* <div width={80} height={80}> */}
                            <img className="profilePicture" src="./images/app_symbol.svg" />
                            로그인하세요
                            {/* </div> */}
                        </div>
                    </Link>

                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="tab">
                            <img className="tabIcon" src="./images/ic_map.svg" />
                            지도
                        </div>
                    </Link>
                    <div class="tab">
                        <img className="tabIcon" src="./images/ic_reward.svg" />
                        리워드 프로모션
                    </div>
                    <div class="tab">
                        <img className="tabIcon" src="./images/ic_chat.svg" />
                        민원 신청
                    </div>
                    <div class="tab">
                        <img className="tabIcon" width={24} height={24} src="./images/app_symbol.svg" />
                        About
                        <img width={79} height={11} src="./images/app_logo_sovement.svg" />
                    </div>
                    <div>
                        
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Header;