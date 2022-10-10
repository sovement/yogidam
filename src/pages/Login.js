import './Login.css';

const Login = () => {
    return (
        <>
            <div className="container">
                <div className='gradientBox' />
                <img style={{ width: '156px', height: '120px', margin: '48px 0 32px' }} src='./images/app_symbol.svg' />
                <span className='slogan'>
                    눈치 보지 말고, 센스 있는<br />
                    흡연자를 위한 흡연구역 플랫폼
                </span>

                <span style={{ position: 'fixed', color: 'var(--black-50)', bottom: '125px'}} class="Subtext Footnote">
                    SNS 계정으로 시작하기
                </span>
            </div>
        </>
    );
}

export default Login;