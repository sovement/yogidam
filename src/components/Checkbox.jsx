import React, {useState,useEffect} from 'react'
import styled from "styled-components";

export const Checkbox = ({text}) => {
    const [isAddressBox, setIsAddressBox] = useState(false);
    const [message, setMessage] = useState('');
    const [isCheckingBox, setIsCheckingBox] = useState(false);

    const changeState = (e) => {
        if (e.target.checked) {
            setIsCheckingBox(true)
            console.log('지도 주소 활성')
        } else {
            setIsCheckingBox(false)
            console.log('지도 주소 비활성')
        }
    }

    useEffect((e) => {
        if (isCheckingBox) {
            setIsAddressBox(true)
            console.log('주소창 활성')
        } else {
            setIsAddressBox(false)
            console.log('주소창 비활성')
        };
    })

    return (
        <> < StyledLabel htmlFor = {
            text
        } > <StyledInput type="checkbox" id={text} name={text}
        onClick={e=>changeState(e)}
        checked={isCheckingBox}
        />
        <StyledP>{text}</StyledP>
    </StyledLabel>
    <div>
        <input
            disabled={(!isAddressBox)}
            className="text-address"
            placeholder='서울특별시 서대문구 연세로5가길 16'
            type="text"></input>

    </div>
</>
    );
}

export default Checkbox;

const StyledInput = styled.input `
appearance: none;
border: 1.5px solid #757575;
//   border-radius: 0.35rem;
width: 21px;
height: 21px;
margin-left: 20px;

//   체크가 되어있을 때
&:checked {
  border-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #ff5519;
}
`;

const StyledLabel = styled.label `
display: flex;
align-items: center;
user-select: none;
`;

const StyledP = styled.p `
margin-left: 0.25rem;
font-size: 14px;
width: 31px;
height: 21px;
flex-grow: 0;
font-family: Pretendard;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: -0.36px;
text-align: left;
color: black;
`;
