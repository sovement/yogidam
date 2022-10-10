import './Login.css';


const Login = () => {

    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:3000/';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  

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
                <a style={{ position: 'fixed', bottom: '60.28px' }} href={KAKAO_AUTH_URI}>
                    <img className='kakaoLogin' src="./images/kakao_login_large_wide.png" />
                </a>
            </div>
        </>
    );
}

export default Login;