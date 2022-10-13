import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import './Help.css';
import { db } from "../firebase";
import { addDoc, serverTimestamp, GeoPoint, collection } from "firebase/firestore";

function Help() {
    const history = useHistory();

    useEffect(() => {
        if (sessionStorage.getItem("kakao_token") == null) {
            history.push('/login');
        }
    })

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

    const applyConfirm = () => {
        history.push('/complete')
        console.log("접수완료")
    }
    const cancelConfirm = () => console.log("취소완료")

    const confirmNone = useConfirm(
        function(){
            const field = {
                timestamp: serverTimestamp(),
                address: new GeoPoint(30.3, 50.1),
                who: sessionStorage.getItem("uid"),
            };
            addDoc(collection(db, "help", "help", "non_here"), field);
            applyConfirm();
        },
        cancelConfirm,
        "지도에 표기된 위치에서\n수거함을 찾지 못하셨나요?"
    );

    const confirmDirt = useConfirm(
        function(){
            const field = {
                timestamp: serverTimestamp(),
                address: new GeoPoint(30.3, 50.1),
                who: sessionStorage.getItem("uid"),
            };
            addDoc(collection(db, "help", "help", "dirty"), field);
            applyConfirm();
        },
        cancelConfirm,
        "해당 위치 주변이 담배꽁초로 인해\n더러운 상황이 맞나요?"
    );

    const confirmDifferent = useConfirm(
        function(){
            const field = {
                timestamp: serverTimestamp(),
                address: new GeoPoint(30.3, 50.1),
                who: sessionStorage.getItem("uid"),
            };
            addDoc(collection(db, "help", "help", "different"), field);
            applyConfirm();
        },
        cancelConfirm,
        "지도에 표시된 수거함의 사진과\n실제 수거함의 모습이 다른가요?"
    );

    return (
        <div>
            <Header />
            <div className="text-title-box">
                <div className="text-title">도움이 필요해요</div>
                <div className="subtext-box">
                    <span className="text-subtext">
                        지도상의 수거함 정보와 거리 상황에 관련된 도움을 요청해주세요.
                        <br></br>
                        빠르게 반영하여 편리하고 정확한 서비스 제공에 힘쓰겠습니다.
                    </span>
                </div>
            </div>
            <div>
                <div onClick={confirmNone} className="tab-text-box">
                    <span className="tab-text">수거함이 여기 없어요</span>

                </div>

                <div onClick={confirmDirt} className="tab-text-box2">
                    <span className="tab-text">주변이 더러워요</span>
                </div>
                <div onClick={confirmDifferent} className="tab-text-box3">
                    <span className="tab-text">사진속 수거함과 달라요</span>
                </div>
            </div>

            <div className="text-title-box">
                <div className="text-solution">다른 해결책이 필요하신가요?</div>
                <div className="subtext-box">
                    <span className="text-subtext">
                        민원 의견을 남겨주시면 관련 정부 부처에 전달해드립니다.
                        <br></br>
                        더욱 상황에 밀접한 도움이 필요한 경우, 민원 기능을 이용해주세요.
                    </span>
                </div>
            </div>
            <Link to='/complaint'
                style={{ textDecoration: "none", color: 'black' }}>
                <div className="complainButton - Large-Lable">
                    민원 신청
                </div>
            </Link>
        </div>
    )
}

export default Help
