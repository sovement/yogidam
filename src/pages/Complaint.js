import './Complaint.css';

const Complaint = () => {
    return (
        <>
            <div style={{ margin: '32px 16px' }}>
                <div className='Title Large-Title'>
                    민원을 작성해주세요
                </div>
                <div style={{ marginTop: '16px', color: 'var(--black-50)' }} className='Subtext Body-2'>
                    흡연구역, 수거함, 무단투기 등 담배와 관련된 민원을 적어주세요.<br />
                    상생 가능한 도시 조성을 위해 소중한 한마디 부탁드립니다.
                </div>
            </div>

            <div style={{ margin: '32px 16px' }}>
                <div className='text Headline'>위치</div>

                <div className='text Headline'>민원내용</div>
                <textarea style={{ whiteSpace: 'pre-wrap' }} className='message -Placeholder Placeholder-2' placeholder='
                민원 내용을 입력해주세요. &#13;
                내용을 검토한 후, 적합한 정부 부처에 전해 드립니다. &#13;
                요구 사항 / 민원 대상을 명시해주시면 더 빠른 처리가 가능해요. &#13; &#13;
                민원 예시 &#13;
                 • 흡연 구역을 더 설치해주세요. &#13;
                 • 담배 꽁초를 치워주세요. &#13;
                 • 수거함 위치를 변경해주세요.'>
                </textarea>
            </div>

            <div className='btnSubmit \- Large-Lable'>
                민원 신청
            </div>
        </>
    );
}

export default Complaint;