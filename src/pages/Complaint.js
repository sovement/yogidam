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
    const history = useHistory();

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }
    })

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setMessage(value);
    };

    const sendComplaint = () => {
        const field = {
            timestamp: serverTimestamp(),
            address: address,
            who: sessionStorage.getItem("uid"),
            message: message
        };

        if (message === "") {
            window.confirm("민원 내용을 입력해주세요.")
        } else {
            addDoc(collection(db, "help", "help", "compaint"), field);
            history.push('/complete');
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
                <Checkbox text="위치" data={address} setData={setAdress} />


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