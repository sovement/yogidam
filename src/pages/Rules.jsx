import React from 'react'
import { Link } from 'react-router-dom'
import './Rules.css';

function Rules() {
    return (
        <>
            <Link to="/mypage" style={{ textDecoration: 'none', color: 'black' }} >
                <img style={{
                    position: 'fixed',
                    zIndex: '2',
                    top: '16px',
                    left: '16px',
                    width: '24px',
                    height: '24px',
                }}
                    src="../images/ic_arrow_back.svg" /> </Link>
            < div className='headerContainer' > <span className="text Headline" >이용약관</span></div>
            < div className="text-rules" > <span class="text-rules-font" > 개인위치정보사업 이용약관(안)<br></br><br></br> 제1조(목적)본 약관은(주)소브먼트(이하 “회사”라고 합니다)가 개인위치정보사업 약관에 동의한 개인위치정보주체(이하 “회원”이라고 합니다)의 개인위치정보를 수집하고,
                위치정보사업자의 지위에서 「위치정보의 보호 및 이용 등에 관한 법률」(이하 “위치정보법”이라 합니다)의 규정에 따라 위치기반서비스 사업자에게 회원의 개인위치정보를 제공함에 있어 회사와 회원의 권리·의무 및 기타 필요한 사항을 규정함을 목적으로 합니다.<br></br><br></br> 제2조(이용약관의 효력 및 변경)① 본 약관은 개인위치정보사업의 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사 소정의 절차에 따라 위치정보사업의 이용자로 등록함으로써 효력이 발생합니다.<br></br> ② 회원이 온라인에서 본 약관의 "동의하기" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며,
                그 적용에 동의한 것으로 봅니다.<br></br> ③ 회사는 위치정보사업의 변경사항을 반영하기 위하여 필요한 경우 등에는 위치정보의 보호 및 이용 등에 관한 법률,
                콘텐츠산업 진흥법,
                전자상거래 등에서의 소비자보호에 관한 법률,
                소비자기본법,
                약관의 규제에 관한 법률 등 관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.<br></br> ④ 회사가 약관을 개정할 경우에는 적용일자,
                개정사유,
                현행약관 및 개정약관의 내용과 개정약관 적용일까지 동의 또는 거부의 의사표시를 하지 아니하면 개정약관에 동의한 것으로 본다는 내용을 각 명시하여 다음과 같은 방법으로 게시 및 통지합니다.<br></br> 1. 위치정보사업자 홈페이지 등 게시 : 개정약관 적용일 30 일 전부터 적용일 이후 상당한 기간(30 일 기간)<br></br> 2. 회원에게 전자적 형태(전자우편, SMS 등)로 개별 통지 : 개정약관 적용일로부터 30 일 전<br></br> ⑤ 회사의 전항에 따른 게시 및 통지 후에도 회원이 개정약관 적용일까지 개정약관에 대해 동의 또는 거부의 의사표시를 하지 않을 때에는 회원이 해당 개정약관에 동의한 것으로 봅니다.<br></br> ⑥ 회원이 개정약관에 동의하지 않을 경우(회사 또는)회원은 이용계약을 해지할 수 있습니다.이 때,
                회사는 계약해지로 인하여 회원이 입은 손해를 배상합니다.<br></br><br></br> 제3조(관계법령의 적용)본 약관은 신의성실의 원칙에 따라 공정하게 적용하며,
                본 약관에 명시되지 아니한 사항에 대하여는 관계법령 또는 상관례에 따릅니다.<br></br><br></br> 제 4 조(개인위치정보 수집방법 등)① 회사가 위치기반서비스사업자에게 제공하는 개인위치정보 및 개인위치정보의 수집방법,
                보유목적과 보유기간은 아래와 같습니다.<br></br><br></br> 서비스 명<br></br> : 여기담<br></br> 수집방법<br></br> : GPS 기반 위치데이터<br></br> 서비스 내용 및<br></br>(보유)목적 : 개인위치정보<br></br> 보유기간<br></br> : 수집 이후 3 년간<br></br><br></br> ② 회사는 「위치정보의 보호 및 이용 등에 관한 법률」 제16조제2항에 따라 위치정보 수집·제공사실 확인자료를 자동 기록·보존하며,
                해당 자료는 6 개월간 보관합니다.<br></br> ③ 회사는 개인위치정보의 수집 또는 제공목적을 달성한 때에는 제3항의 위치정보 수집·제공사실 확인자료를 제외한 개인위치정보를 즉시 파기합니다.다만,
                다른 법률에 따라 보유하여야 하거나 회원이 개인위치정보의 보유에 별도로 동의한 경우에는 회원이 동의한 때로부터 최대 1 년간 이를 보유할 수 있습니다.<br></br><br></br> 제5조(서비스 이용요금 및 조건)<br></br> 기본 위치 제공서비스는 무료로 제공하되,
                이후 유료 약관이<br></br> 발생할 수 있습니다.<br></br><br></br> 제6조(서비스 추가·변경)회사가 위치기반서비스사업자에게 제공하고자 하는 서비스의 추가·변경이 필요한 경우,
                제4조에 그 내용을 반영하여 제2조 제4항 내지 제5항에 따라 게시 및 통지하여야 합니다.<br></br><br></br> 제7조(수집·제공 제한 및 중지)① 회사는 아래 각 호의 1 에 해당하는 사유가 발생한 경우 수집·제공을 제한하거나 중지할 수 있습니다.<br></br><br></br> 1. 여기담 서비스 운영 종료 및 내부적 사안으로 인한 중지 결정 시<br></br><br></br> ② 회사는 전항의 규정에 의하여 개인위치정보 수집·제공을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 위치정보사업자의 홈페이지 등에 게시하고 전자적 형태(전자우편, SMS 등)로 개별 통지하여야 합니다.<br></br> ③ 회사가 전항에 따른 게시 및 통지를 할 수 없는 부득이한 사유가 있는 경우 사후에 게시 및 통지할 수 있습니다.<br></br><br></br> 제8조(개인위치정보의 수집)① 회사는 개인위치정보를 수집하고자 하는 경우에는 미리 이용약관에 명시한 후 개인위치정보주체의 동의를 얻어야 합니다.<br></br> ② 회원이 개인위치정보의 수집에 동의를 하는 경우,
                개인위치정보 수집의 범위 및 이용약관의 내용 중 일부에 대하여 동의를 유보할 수 있습니다.<br></br> ③회사가 개인위치정보를 수집하는 경우에는 수집목적을 달성하기 위하여 필요한 최소한의 정보만을 수집합니다.<br></br><br></br> 제9조(위치정보사업자의 개인위치정보 제공 등)① 위치정보법 제19조제1항 또는 제2항에 따라 개인위치정보주체의 동의를 얻은 위치기반서비스사업자는 제19조제1항 또는 제2항의 이용 또는 제공목적을 달성하기 위하여 회사에게 해당 개인위치정보의 제공을 요청할 수 있습니다.이 경우 회사는 정당한 사유 없이 제공을 거절하여서는 안됩니다.<br></br> ② 위치기반서비스사업자는 다음 각 호의 사항을 갖추어 회사에게 개인위치정보를 요청하여야 합니다.<br></br> 1. 개인위치정보주체의 동의를 얻은 사실<br></br> 2. 개인위치정보의 범위 및 기간<br></br> ③ 제1항에 따른 요청을 받은 회사는 개인위치정보를 제공하려는 경우에는 미리 개인위치정보주체의 동의 여부를 확인하여야 합니다.<br></br><br></br> 제10조(개인위치정보의 수집 또는 제공의 제한)회사는 회원의 동의가 있거나 다음 각 호의 어느 하나에 해당하는 경우를 제외하고는 개인위치정보 또는 위치정보 수집·제공사실 확인자료를 이용약관에 명시 또는 고지한 범위를 넘어 이용하거나 제3자에게 제공할 수 없습니다.<br></br> 1. 위치기반서비스 요금정산을 위하여 위치정보 수집·제공사실 확인자료가 필요한 경우<br></br> 2. 통계작성,
                학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우<br></br><br></br> 제11조(개인위치정보주체의 권리 및 행사방법)① 회원은 회사에 대하여 언제든지 개인위치정보 수집·제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다.이 경우 회사는 수집·제공한 개인위치정보 및 위치정보 수집·제공사실 확인자료를 파기합니다.단,
                동의의 일부를 철회하는 경우에는 철회하는 부분의 개인위치정보 및 위치정보 수집·제공사실 확인자료에 한합니다.<br></br> ② 회원은 회사에 대하여 언제든지 개인위치정보 수집의 일시적인 중지를 요구할 수 있고,
                회사는 이를 거절할 수 없으며 이를 위한 기술적 수단을 갖추고 있습니다.<br></br> ③ 회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고,
                해당 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다.이 경우 회사는 정당한 사유 없이 회원의 요구를 거절할 수 없습니다.<br></br> 1. 본인에 대한 위치정보 수집·제공사실 확인자료<br></br> 2. 본인의 개인위치정보가 다른 법률 규정에 의하여 제3자에게 수집·제공된 이유 및 내용<br></br> ④ 회원은 제1항 내지 제3항의 권리행사를 위해(고객센터 등 구체적 절차 기술)를 통해 요구할 수 있습니다.<br></br><br></br> 제12조(법정대리인의 권리 및 행사방법)① 회사는 14 세 미만의 회원의 경우,
                개인위치정보 수집·제공에 대하여 해당 회원과 그 법정대리인 모두의 동의를 받아야 합니다.이 경우 법정대리인은 제11조에 의한 회원의 권리를 모두 가집니다.<br></br> ② 회사는 다음 각 호의 어느 하나에 해당하는 방법으로 법정대리인이 동의했는지를 확인합니다.<br></br> 1. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 위치정보사업자등이 그 동의 표시를 확인했음을 법정대리인의 휴대전화 문자메시지로 알리는 방법<br></br> 2. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 신용카드ㆍ직불카드 등의 카드정보를 제공받는 방법<br></br> 3. 동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 휴대전화 본인인증 등을 통해 본인 여부를 확인하는 방법<br></br> 4. 동의 내용이 적힌 서면을 법정대리인에게 직접 발급하거나,
                우편 또는 팩스를 통하여 전달하고 법정대리인이 동의 내용에 대하여 서명날인 후 제출하도록 하는 방법<br></br> 5. 동의 내용이 적힌 전자우편을 발송하여 법정대리인으로부터 동의의 의사표시가 적힌 전자우편을 전송받는 방법<br></br> 6. 전화를 통하여 동의 내용을 법정대리인에게 알리고 동의를 얻거나 인터넷주소 등 동의 내용을 확인할 수 있는 방법을 안내하고 재차 전화 통화를 통하여 동의를 얻는 방법<br></br> 7. 그 밖에 제1호부터 제6호까지의 규정에 따른 방법에 준하는 방법으로 법정대리인에게 동의 내용을 알리고 동의의 의사표시를 확인하는 방법<br></br><br></br> 제13조(8 세 이하의 아동 등의 보호의무자의 권리･의무 및 행사방법)① 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동”등이라 한다)의 보호의무자가 8 세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 수집 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다.<br></br> 1. 8 세 이하의 아동<br></br> 2. 피성년후견인<br></br> 3. 「장애인복지법」제2조제2항제2호의 규정에 의한 정신적 장애를 가진 자로서「장애인고용촉진 및 직업재활법」 제2조제2호의 규정에 의한 중증장애인에 해당하는 자(「장애인복지법」 제32조의 규정에 의하여 장애인등록을 한 자에 한한다)<br></br> ② 제1항에 따른 8 세 이하의 아동등의 보호의무자는 8 세 이하의 아동등을 사실상 보호하는 자로서 다음 각 호의 어느 하나에 해당하는 자를 말합니다.<br></br> 1. 8 세 이하의 아동의 법정대리인 또는 「보호시설에 있는 미성년자의 후견 직무에 관한 법률」 제3조에 따른 후견인<br></br> 2. 피성년후견인의 법정대리인<br></br> 3. 제1항제3호의 자의 법정대리인 또는 「장애인복지법」 제58조제1항제1호에 따른 장애인 거주시설(국가 또는 지방자치단체가 설치ㆍ운영하는 시설로 한정한다)의 장,
                「정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률」 제22조에 따른 정신요양시설의 장 및 같은 법 제26조에 따른 정신재활시설(국가 또는 지방자치단체가 설치ㆍ운영하는 시설로 한정한다)의 장<br></br> ③ 제1항에 따른 동의를 하고자 하는 8 세 이하 아동 등의 보호의무자는 각 호의 사항을 기재하여 기명날인 또는 서명한 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다.<br></br> 1. 8 세 이하의 아동등의 성명,
                주소 및 생년월일<br></br> 2. 보호의무자의 성명,
                주소 및 연락처<br></br> 3. 개인위치정보 수집 또는 제공의 목적이 8 세 이하의 아동등의 생명 또는 신체의 보호에 한정된다는 사실<br></br> 4. 동의의 연월일<br></br> ④ 보호의무자는 8 세 이하의 아동 등의 개인위치정보 수집 또는 제공에 동의하는 경우 제11조에 의한 회원의 권리 전부를 행사할 수 있습니다.<br></br><br></br> 제14조(위치정보관리책임자의 지정)① 회사는 위치정보를 적절히 관리․보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보관리책임자로 지정해 운영합니다.<br></br> ② 위치정보관리책임자는 위치정보를 수집·제공하는 부서의 부서장으로서 구체적인 사항은 본 약관의 부칙에 따릅니다.<br></br><br></br> 제15조(손해배상)회사가 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 제26조의 규정을 위반한 행위로 회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수 있습니다.이 경우 회사는 고의,
                과실이 없음을 입증하지 못하는 경우 책임을 면할 수 없습니다.<br></br><br></br> 제16조(준거법 및 재판관할)① 본 약관은 대한민국법령에 의하여 규정되고 이행됩니다.<br></br> ② 회원 및 법정대리인의 권리와 그 행사방법은 제소 당시의 이용자의 주소에 의하며,
                주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.다만,
                제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.<br></br><br></br> 제17조(분쟁의 조정 및 기타)① 회사는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 「위치정보의 보호 및 이용 등에 관한 법률」 제28조의 규정에 의해 방송통신위원회에 재정을 신청할 수 있습니다.<br></br> ② 회사 또는 회원은 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 「개인정보보호법」 제43조의 규정에 의한 개인정보분쟁조정위원회에 조정을 신청할 수 있습니다<br></br><br></br> 제18조(회사의 연락처)회사의 상호 및 주소 등은 다음과 같습니다.<br></br> 1. 상 호 : 소브먼트<br></br> 2. 대 표 자 : 이윤지<br></br> 3. 주 소 : 서울특별시 서대문구 연세로5가길 16 2 층,
                Proto<br></br> 4. 대표전화 : 010 - 3614 - 0135<br></br><br></br><br></br> 부 칙<br></br><br></br> 제1조(시행일)이 약관은 2022 년 10 월 15 일부터 시행한다.<br></br> 제2조 위치정보관리책임자는 2022 년 10 월을 기준으로 다음과 같이 지정합니다.<br></br> 1. 소 속 : 서비스개발팀<br></br> 박준하<br></br></span></div></>
    )
}

export default Rules