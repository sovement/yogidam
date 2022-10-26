/*global kakao*/
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SmokeTab from '../components/SmokeTab';
import NonsmokeTab from '../components/NonsmokeTab';
import './Home.css';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

const Home = () => {

    const [tab, setTab] = useState({ "state": "null" });

    const setBtnLocationUp = () => {
        const btnLocation = document.getElementById('btnLocation');
        btnLocation.style.bottom = '151px';
    }

    const setBtnLocationDown = () => {
        const btnLocation = document.getElementById('btnLocation');
        btnLocation.style.bottom = '12px';
    }

    useEffect(() => {

        var lat, lng, locPosition;
        var isFocusMoved = false;
        var isInit = true;
        var mapContainer = document.getElementById('map'), // 지도 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.56240, 126.93853), // 지도의 중심좌표
                level: 4 // 지도의 확대 레벨
            };

        // 지도 생성
        var map = new kakao.maps.Map(mapContainer, mapOption);

        var imageSize = new kakao.maps.Size(40, 47), // 마커 이미지의 크기
            imageOption = { offset: new kakao.maps.Point(20, 47) }; // TODO: 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커 생성
        var markerSmokeDefault = new kakao.maps.MarkerImage('./images/ic_marker_smoke_default.png', imageSize, imageOption),
            markerSmokePressed = new kakao.maps.MarkerImage('./images/ic_marker_smoke_pressed.png', imageSize, imageOption),
            markerNonsmokeDefault = new kakao.maps.MarkerImage('./images/ic_marker_nonsmoke_default.png', imageSize, imageOption),
            markerNonsmokePressed = new kakao.maps.MarkerImage('./images/ic_marker_nonsmoke_pressed.png', imageSize, imageOption);


        // 구역 위치
        var selectedMarker = null, selectedMarkerType = "";

        const q = query(collection(db, "smokeInform"), where("smoke", "==", true));

        const smokeSnapshot = getDocs(q);
        smokeSnapshot.then((snapshot) => {
            snapshot.forEach((doc) => {
                var marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(doc.data().address.latitude, doc.data().address.longitude),
                    image: markerSmokeDefault, // 마커이미지 설정
                    clickable: true
                })

                marker.setMap(map);

                // 마커 클릭 이벤트
                kakao.maps.event.addListener(marker, 'click', function () {
                    if (!selectedMarker || selectedMarker !== marker) {
                        if (selectedMarkerType === "smoke") {
                            !!selectedMarker && selectedMarker.setImage(markerSmokeDefault);
                        } else {
                            !!selectedMarker && selectedMarker.setImage(markerNonsmokeDefault);
                        }
                        marker.setImage(markerSmokePressed);

                        // 흡연구역 정보 탭 띄우기
                        setTab({
                            "state": "smoke",
                            "data": doc.data()
                        });
                        setBtnLocationUp();

                        selectedMarker = marker;
                        selectedMarkerType = "smoke";
                    }
                    else if (selectedMarker === marker) {
                        setTab({ "state": "none" });
                        setBtnLocationDown();
                        if (selectedMarkerType === "smoke") {
                            !!selectedMarker && selectedMarker.setImage(markerSmokeDefault);
                        } else {
                            !!selectedMarker && selectedMarker.setImage(markerNonsmokeDefault);
                        }
                        marker.setImage(markerSmokeDefault);

                        selectedMarker = null;
                        selectedMarkerType = "";
                    }
                });
            });
        });

        // 금연구역 마커 생성

        const q2 = query(collection(db, "smokeInform"), where("smoke", "==", false));

        const nonsmokeSnapshot = getDocs(q2);
        nonsmokeSnapshot.then((snapshot) => {
            snapshot.forEach((doc) => {
                var marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(doc.data().address.latitude, doc.data().address.longitude),
                    image: markerNonsmokeDefault, // 마커이미지 설정
                    clickable: true
                });

                marker.setMap(map);

                // 마커 클릭 이벤트
                kakao.maps.event.addListener(marker, 'click', function () {
                    if (!selectedMarker || selectedMarker !== marker) {
                        if (selectedMarkerType === "smoke") {
                            !!selectedMarker && selectedMarker.setImage(markerSmokeDefault);
                        } else {
                            !!selectedMarker && selectedMarker.setImage(markerNonsmokeDefault);
                        }
                        marker.setImage(markerNonsmokePressed);

                        // 금연구역 정보 탭 띄우기
                        setTab({
                            "state": "nonsmoke",
                            "data": doc.data()
                        });
                        setBtnLocationUp();

                        selectedMarker = marker;
                        selectedMarkerType = "nonsmoke"
                    }
                    else if (selectedMarker === marker) {
                        setTab({ "state": "none" });
                        setBtnLocationDown();
                        if (selectedMarkerType === "smoke") {
                            !!selectedMarker && selectedMarker.setImage(markerSmokeDefault);
                        } else {
                            !!selectedMarker && selectedMarker.setImage(markerNonsmokeDefault);
                        }
                        marker.setImage(markerNonsmokeDefault);

                        selectedMarker = null;
                        selectedMarkerType = "";
                    }
                });
            });
        });


        // 현재위치 마커 생성
        var markerCurrent = new kakao.maps.MarkerImage(
            './images/ic_marker_current.svg',
            new kakao.maps.Size(32, 32),
            { offset: new kakao.maps.Point(0, 0) });

        var marker = new kakao.maps.Marker({
            image: markerCurrent,
            clickable: true
        });

        // 현재위치
        const locRefresher = setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {

                    // 현재위치 지정
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    locPosition = new kakao.maps.LatLng(lat, lng);

                    if (isInit) {
                        map.setLevel(1);
                        isInit = false;
                    }
                    marker.setPosition(locPosition);
                    marker.setMap(null);
                    marker.setMap(map);

                    if (!isFocusMoved) {
                        map.setCenter(locPosition);
                    }
                });

            } else { // HTML5 GeoLocation 사용할 수 없을 때
                var message = '위치정보를 사용할 수 없습니다. 다시 시도해주세요.'
                alert(message)
            }
        }, 1000);

        // 지도 움직였을 때
        kakao.maps.event.addListener(map, 'dragstart', function () {
            isFocusMoved = true;
            const btnLocation = document.getElementById('btnLocation');
            btnLocation.src = './images/ic_location_black.png';
        });

        // 현위치 버튼
        const btnLocation = document.getElementById('btnLocation');
        btnLocation.onclick = () => {
            isFocusMoved = false;
            btnLocation.src = './images/ic_location_orange.png';
            map.setCenter(locPosition);
        }

        // 배너 클릭 이벤트
        // const banner = document.getElementById('banner');
        // banner.onclick = () => {
        //     map.setLevel(4);
        //     isFocusMoved = true;
        //     const btnLocation = document.getElementById('btnLocation');
        //     btnLocation.src = './images/ic_location_black.png';
        //     map.setCenter(new kakao.maps.LatLng(37.56240, 126.93853));
        // }

        // 맵 클릭 시 
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            setTab({ "state": "none" });
            setBtnLocationDown();
            var latlng = mouseEvent.latLng;

            if (selectedMarkerType === "smoke") {
                !!selectedMarker && selectedMarker.setImage(markerSmokeDefault);
            } else {
                !!selectedMarker && selectedMarker.setImage(markerNonsmokeDefault);
            }
        });
    }, [])

    return (
        <>
            <Header />
            <div id="map" style={{ height: "calc(100vh - 56px)" }}>
                <Link to="/promotion" style={{ textDecoration: 'none', color: 'black' }}>
                    <div id='banner' style={{ display: 'flex' }}
                        onClick={() => {
                            ReactGA.event({
                                category: "Button",
                                action: "click PromotionBanner",
                                label: "PromotionBanner",
                            });
                        }}>
                        <div className="Banner">
                            <img src='./images/ic_gift.png'
                                style={{
                                    width: '58px',
                                    height: '58px'
                                }}
                                alt="banner" />
                            <div className='banner_textContainer'>
                                <span className='banner_title'>꽁초 제대로 버리고, 꽁짜로 선물 받자!</span>
                                <span className='banner_subtitle'>3초만에 리워드 이벤트 참여하기</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <img id="btnLocation"
                    className="btnLocation"
                    src='./images/ic_location_orange.png' />
                <div style={{ zIndex: '2', position: 'fixed', bottom: '13px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {tab.state === "smoke" &&
                        <SmokeTab data={tab.data}
                            onClick={() => {
                                ReactGA.event({
                                    category: "Button",
                                    action: "click SmokeArea",
                                    label: "SmokeArea",
                                });
                            }} />}
                    {tab.state === "nonsmoke" &&
                        <NonsmokeTab data={tab.data}
                            onClick={() => {
                                ReactGA.event({
                                    category: "Button",
                                    action: "click NonsmokeArea",
                                    label: "NonsmokeArea",
                                });
                            }} />}
                </div>
            </div>
        </>
    )
}

export default Home;