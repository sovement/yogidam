/*global kakao*/
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SmokeTab from '../components/SmokeTab';
import NonsmokeTab from '../components/NonsmokeTab';
import './Home.css';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Home = () => {

    const [tab, setTab] = useState({ "state": "null" });

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


                        selectedMarker = marker;
                        selectedMarkerType = "smoke";
                    }
                    else if (selectedMarker === marker) {
                        setTab({ "state": "none" });
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

                        selectedMarker = marker;
                        selectedMarkerType = "nonsmoke"
                    }
                    else if (selectedMarker === marker) {
                        setTab({ "state": "none" });
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

        // 지도 움직였을 때
        kakao.maps.event.addListener(map, 'dragstart', function() {
            var btnLocation = document.getElementById('btnLocation');
            btnLocation.src='./images/ic_location_black.png';
        });
    }, [])

    return (
        <>
            <Header />
            <div id="map" style={{ height: "calc(100vh - 56px)" }}>
                    <img id="btnLocation" className="btnLocation" src='./images/ic_location_orange.png' />
                <div style={{ zIndex: '2', position: 'fixed', bottom: '13px', display: 'flex', width: '100%' }}>
                    {tab.state === "smoke" && <SmokeTab data={tab.data} />}
                    {tab.state === "nonsmoke" && <NonsmokeTab data={tab.data} />}
                </div>
            </div>
        </>
    )
}

export default Home;