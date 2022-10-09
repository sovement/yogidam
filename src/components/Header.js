import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    // const 

    return (
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src="./images/app_logo_orange.svg" />
            </Link>
            <input type="checkbox" id="cbMenu" />
            <label htmlFor="cbMenu">
                <img src="./images/ic_menu.svg" />
            </label>
            <div id="sideMenu">
                <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }}>
                    <div class="tabProfile">
                        {/* <div width={80} height={80}> */}
                        <img className="profilePicture" src="./images/ic_profile.png" />
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
                    <img className="tabIcon" src="./images/app_symbol.svg" />
                    About&nbsp;
                    <img width={80} height={12} src="./images/app_logo_sovement.svg" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Header;