/*global kakao*/
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SmokeTab from '../components/SmokeTab';
import NonsmokeTab from '../components/NonsmokeTab';
import './Home.css';

const Home = ({ userInform }) => {

    const [tab, setTab] = useState("none");
    const [currentLat, setCurrentLat] = useState(37.55634);
    const [currentLng, setCurrentLng] = useState(126.93635); // 이곳은 신촌 어딘가..

    useEffect(() => {
        var isFirst = true;
        var lat, lng, locPosition;
        var mapContainer = document.getElementById('map'), // 지도 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.55634, 126.93635), // 지도의 중심좌표
                level: 1 // 지도의 확대 레벨
            };

        // 지도 생성
        var map = new kakao.maps.Map(mapContainer, mapOption);

        var imageSize = new kakao.maps.Size(40, 47), // 마커 이미지의 크기
            imageOption = { offset: new kakao.maps.Point(0, 0) }; // TODO: 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커 생성
        var markerSmokeDefault = new kakao.maps.MarkerImage('./images/ic_marker_smoke_default.png', imageSize, imageOption),
            markerSmokePressed = new kakao.maps.MarkerImage('./images/ic_marker_smoke_pressed.png', imageSize, imageOption),
            markerNonsmokeDefault = new kakao.maps.MarkerImage('./images/ic_marker_nonsmoke_default.png', imageSize, imageOption),
            markerNonsmokePressed = new kakao.maps.MarkerImage('./images/ic_marker_nonsmoke_pressed.png', imageSize, imageOption);

        // 구역 위치
        var posSmoke = [ // TODO: 흡연구역 위치 저장
            new kakao.maps.LatLng(37.55630, 126.93635),
            new kakao.maps.LatLng(37.55640, 126.93635),
            new kakao.maps.LatLng(37.55650, 126.93635),
            new kakao.maps.LatLng(37.55660, 126.93635)
        ],
            posNonsmoke = [ // TODO: 금연구역 위치 저장
                new kakao.maps.LatLng(37.55530, 126.93635),
                new kakao.maps.LatLng(37.55540, 126.93635),
                new kakao.maps.LatLng(37.55550, 126.93635),
                new kakao.maps.LatLng(37.55560, 126.93635)
            ],
            selectedMarker = null,
            selectedMarkerType = "";

        // 흡연구역 마커 생성
        posSmoke.forEach(function (position) {
            var marker = new kakao.maps.Marker({
                position: position,
                image: markerSmokeDefault, // 마커이미지 설정
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
                    marker.setImage(markerSmokePressed);

                    // 흡연구역 정보 탭 띄우기
                    setTab("smoke");


                    selectedMarker = marker;
                    selectedMarkerType = "smoke";
                }
                else if (selectedMarker === marker) {
                    setTab("none");
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

        // 금연구역 마커 생성
        posNonsmoke.forEach(function (position) {
            var marker = new kakao.maps.Marker({
                position: position,
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
                    setTab("nonsmoke");

                    selectedMarker = marker;
                    selectedMarkerType = "nonsmoke"
                }
                else if (selectedMarker === marker) {
                    setTab("none");
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

        // 현재위치 마커 생성
        var markerCurrent = new kakao.maps.MarkerImage(
            './images/ic_marker_current.svg',
            new kakao.maps.Size(32, 32),
            { offset: new kakao.maps.Point(0, 0) });

        var currentMarker = new kakao.maps.Marker({
            image: markerCurrent,
            clickable: true,
        });

        let locationRefresher = setInterval(() => {
            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(function (position) {

                    // 현재위치 지정
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    locPosition = new kakao.maps.LatLng(lat, lng);

                    currentMarker.setPosition(locPosition);
                    currentMarker.setMap(null);
                    currentMarker.setMap(map);

                    if (isFirst) {
                        map.setCenter(locPosition);
                        isFirst = false;
                    }
                });

            } else { // HTML5 GeoLocation 사용할 수 없을 때
                var message = '위치정보를 사용할 수 없습니다. 다시 시도해주세요.'
                alert(message)
            }
        }, 1000);
        return () => { clearTimeout(locationRefresher) }
    });

    return (
        <>
            <Header userInform={userInform} />
            <div id="map" style={{ height: "calc(100vh - 56px)" }}>
                <img className="btnLocation" src='./images/ic_location_orange.png' />
                {tab === "smoke" && <SmokeTab />}
                {tab === "nonsmoke" && <NonsmokeTab />}
            </div>
        </>
    )
}

export default Home;