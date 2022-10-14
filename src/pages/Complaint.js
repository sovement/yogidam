/*global kakao*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { db } from '../firebase';
import { addDoc, serverTimestamp, GeoPoint, collection } from "firebase/firestore";
import './Complaint.css';
import Checkbox from "./components/Checkbox";

const Complaint = () => {
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }

        var mapContainer = document.getElementById('map'), // 지도 표시할 div
            mapOption = {
                draggable: false,
                center: new kakao.maps.LatLng(37.55634, 126.93635), // 지도의 중심좌표
                level: 1 // 지도의 확대 레벨
            };

        // 지도 생성
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 현재위치
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                // 현재위치 지정
                var lat = position.coords.latitude,
                    lon = position.coords.longitude;
                var locPosition = new kakao.maps.LatLng(lat, lon);

                setLat(lat);
                setLon(lon);

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

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setMessage(value);
    };

    const sendComplaint = () => {
        const field = {
            timestamp: serverTimestamp(),
            address: new GeoPoint(lat, lon),
            who: sessionStorage.getItem("uid"),
            message: message
        };
        if (message === "") {
            window.confirm("민원 내용을 입력해주세요.")
        } else {
            addDoc(collection(db, "help", "help", "compaint"), field);
            history.push({
                pathname: '/complete',
                state: 'complaint',
            });
        }
    }

    const cancelConfirm = () => console.log("취소완료")

    const useConfirm = (onConfirm, onCancel, message = "Are you sure?") => {
        if (!onConfirm && typeof onConfirm !== "function") {
            return;
        }

        if (!onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {

                onConfirm();

            } else {
                onCancel();
            }
        };

        return confirmAction;
    };

    const complaintConfirm = useConfirm(sendComplaint, cancelConfirm, "민원을 접수하시겠습니까?");


    return (
        <>
            <Header />
            <div style={{ margin: '32px 16px' }}>
                <div className='Title Large-Title'>
                    민원을 작성해주세요
                </div>
                <div style={{ marginTop: '16px', color: 'var(--black-50)' }} className='Subtext Body-2'>
                    흡연구역, 수거함, 무단투기 등 담배와 관련된 민원을 적어주세요.<br />
                    상생 가능한 도시 조성을 위해 소중한 한마디 부탁드립니다.
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '32px 16px'
            }}>
                <div className='text Headline' style={{ marginBottom: '12px' }}>위치</div>
                <div id="map" style={{ height: "0", paddingBottom: '40%' }}></div>

                <div className='text Headline' style={{ marginTop: '24px' }}>민원내용</div>
                <textarea
                    style={{ whiteSpace: 'pre-wrap' }}
                    className='message -Placeholder Placeholder-2'
                    onChange={onChange}
                    placeholder='
                민원 내용을 입력해주세요. &#13;
                내용을 검토한 후, 적합한 정부 부처에 전해 드립니다. &#13;
                요구 사항 / 민원 대상을 명시해주시면 더 빠른 처리가 가능해요. &#13; &#13;
                민원 예시 &#13;
                 • 흡연 구역을 더 설치해주세요. &#13;
                 • 담배 꽁초를 치워주세요. &#13;
                 • 수거함 위치를 변경해주세요.'>
                </textarea>
            </div>

            <div className='btnSubmit \- Large-Lable' onClick={complaintConfirm}>
                민원 신청
            </div>
        </>
    );
}

export default Complaint;
