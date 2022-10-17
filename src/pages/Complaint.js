import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { db } from '../firebase';
import { addDoc, serverTimestamp, GeoPoint, collection } from "firebase/firestore";
import './Complaint.css';
import Checkbox from '../components/Checkbox';


const Complaint = () => {
    const [message, setMessage] = useState('');
    const [address, setAdress] = useState('');
    const [currentAddress, setCurrentAddress] = useState('서울특별시 서대문구 연세로5가길 16');
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }
    })

    useEffect(() => {
        var geocoder = new kakao.maps.services.Geocoder()
        // 현재위치
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {
                // 현재위치 지정
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                geocoder.coord2Address(lon, lat, function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        var roadAddress = !!result[0].road_address ? result[0].road_address.address_name : '';
                        setCurrentAddress(roadAddress);
                    }
                });
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
            address: checked ? (address === '' ? currentAddress : address) : '',
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
            <div>

                {/* 체크박스 선택하면 활성 비활성 */}
                <div className='text Headline' style={{ marginBottom: '12px' }}>
                    {/* 기본 체크박스 */}
                    {/* <input type='checkbox' className="check-position" onClick={e=> changeState(e)} checked={isCheckingBox}></input><span className="text-position">위치</span> */}
                </div>
                <Checkbox
                    text="위치"
                    data={address}
                    setData={setAdress}
                    placeholder={currentAddress}
                    isCheckingBox={checked}
                    setIsCheckingBox={setChecked} />


            </div>
            <div style={{ margin: '32px 16px' }}>

                {/* 지도부분 */}
                <div id="map" style={{ height: "0", paddingBottom: '0%' }}></div>


            </div>
            <div style={{ display: 'flex', margin: '32px 16px' }}>
                <div className='text Headline' style={{ marginTop: '24px' }}>민원내용</div>
                <textarea
                    style={{ whiteSpace: 'pre-wrap', flexGrow: '1' }}
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