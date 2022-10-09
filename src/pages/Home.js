/*global kakao*/
import React, { useEffect, useState } from 'react'
import './Home.css';

const Home = () => {

    const [showTab, setShowTab] = useState(false);

    useEffect(() => {
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

                    // 정보 탭 띄우기
                    setShowTab(true);


                    selectedMarker = marker;
                    selectedMarkerType = "smoke";
                }
                else if (selectedMarker === marker) {
                    setShowTab(false);
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

                    // 정보 탭 띄우기
                    setShowTab(true);

                    selectedMarker = marker;
                    selectedMarkerType = "nonsmoke"
                }
                else if (selectedMarker === marker) {
                    setShowTab(false);
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

        // 현재위치
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                // 현재위치 지정
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;
                var locPosition = new kakao.maps.LatLng(lat, lon);

                // 현재위치 마커 생성
                var markerCurrent = new kakao.maps.MarkerImage(
                    './images/ic_marker_current.svg',
                    new kakao.maps.Size(32, 32),
                    { offset: new kakao.maps.Point(0, 0) });

                var marker = new kakao.maps.Marker({
                    position: locPosition,
                    image: markerCurrent, // 마커이미지 설정
                    clickable: true
                });
                marker.setMap(map);
                map.setCenter(locPosition);

                // TODO: 1초에 한 번씩 갱신
            });

        } else { // HTML5 GeoLocation 사용할 수 없을 때
            var message = '위치정보를 사용할 수 없습니다. 다시 시도해주세요.'
            alert(message)
        }
    }, [])

    return (
        <div id="map" style={{ height: "calc(100vh - 56px)" }}>
            <img className="btnLocation" src='./images/ic_location_orange.png' />
            {showTab && <div className="infoTab" />}
        </div>
    )
}

export default Home;