// ============================================================
//  posts.js — 지엘행정사사무소 블로그 데이터 파일
//
//  ⚠️ 2026-07 업데이트: 이 파일은 이제 "손으로 편집하는 파일"이 아니라
//  홈페이지 우측 하단의 "✍️ 글 작성" 관리자 패널이 GitHub API를 통해
//  자동으로 커밋하는 파일입니다.
//
//  · 새 글 추가 → 관리자 패널에서 "발행하기"를 누르면 이 배열의
//    맨 앞(가장 최근 글 위치)에 새 글 객체가 자동으로 삽입되고,
//    저장소에 커밋됩니다.
//  · 물론 필요하다면 지금처럼 직접 이 파일을 편집해도 됩니다.
//    (id는 기존 최댓값 + 1, date는 YYYY-MM-DD 형식)
//
//  이미지 삽입 방법:
//  ① 슬롯 방식 (기존 글 썸네일/본문 고정 위치):
//     <div class="slot-img-wrap" data-img-slot="슬롯-이름"></div>
//     그리고 post 객체에 imageSlots 배열로 라벨/설명을 등록해두면
//     "🖼️ 이미지 관리" 패널에 표시됩니다.
//  ② 관리자 글쓰기 패널에서 "이미지 삽입" 버튼으로 올리면, 이미지가
//     images/ 폴더에 저장되고 본문 커서 위치에 <img> 태그가 자동으로
//     삽입됩니다. (슬롯 등록 없이 바로 사용 가능)
// ============================================================

const CATEGORIES = [
  { id: 0, label: "전체 글" },
  { id: 1, label: "식품제조가공업 등록" },
  { id: 2, label: "축산물가공업 허가" },
  { id: 3, label: "기타 영업 허가·등록·신고" },
  { id: 4, label: "해썹 (HACCP) 인증" },
  { id: 5, label: "소개글" }
];

/* ──────────────────────────────────────────────────────────
   공통 반응형 스타일 블록
   · 모든 post body 앞에 한 번만 삽입
   · 테이블 → 모바일에서 카드형으로 전환
   · 박스·섹션 패딩 → 모바일에서 축소
   · 폰트 크기 → 모바일에서 14px
   · 관리자 패널에서 발행하는 새 글에도 자동으로 삽입됩니다.
────────────────────────────────────────────────────────── */
const RESPONSIVE_STYLE = `
<style>
/* ── 포스트 본문 기본 ── */
.post-body {
  font-size: 15px;
  line-height: 2.2;
  letter-spacing: -0.02em;
  color: #2d2d2d;
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* ── 반응형 테이블: 모바일에서 카드형 ── */
@media (max-width: 600px) {
  .post-body {
    font-size: 14px;
    line-height: 2.1;
  }
  .resp-table { display: none !important; }
  .resp-cards { display: block !important; }
  .intro-box,
  .standard-box,
  .case-box-gold {
    padding: 16px 14px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .post-body h2 { font-size: 17px !important; }
  .post-body h3 { font-size: 15px !important; }
  .faq-item .faq-q,
  .faq-item .faq-a { padding: 12px 14px !important; }
  .cta-box { padding: 24px 16px !important; }
  .cta-btn {
    display: block !important;
    width: 100% !important;
    margin: 8px 0 0 !important;
    text-align: center !important;
  }
  .result-box { padding: 14px 16px !important; }
}
@media (min-width: 601px) {
  .resp-cards { display: none !important; }
  .resp-table { display: table !important; }
}

/* ── 카드형 테이블 (모바일) ── */
.resp-cards .r-card {
  border: 1px solid #e8ecf5;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.8;
}
.resp-cards .r-head {
  background: #1a2e5a;
  color: #fff;
  font-weight: 700;
  padding: 9px 14px;
  font-size: 13px;
}
.resp-cards .r-row {
  display: flex;
  border-bottom: 1px solid #eef0f6;
}
.resp-cards .r-row:last-child { border-bottom: none; }
.resp-cards .r-label {
  background: #f0f4ff;
  color: #1a2e5a;
  font-weight: 700;
  padding: 9px 12px;
  width: 38%;
  flex-shrink: 0;
  font-size: 12px;
}
.resp-cards .r-val {
  padding: 9px 12px;
  color: #3a3a3a;
  font-size: 13px;
  flex: 1;
}
</style>
`;

const POSTS = [
  {
    id: 12,
    category: 1,
    title: "식품제조가공업 등록 절차와 핵심 서류, 25평 상가에서 허가 받아낸 시설 기준의 비밀",
    summary: "일반 상가 건물이나 지식산업센터에서 식품 공장(제조원)을 차릴 때 반드시 거쳐야 하는 법적 절차와 필수 구비 서류를 총정리합니다. 위반건축물 확인부터 작업장 분리 규칙까지 실패 없는 등록 가이드를 제공합니다.",
    date: "2026-07-12",
    tags: ["식품제조가공업", "식품위생법", "영업등록절차", "시설기준", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "임대차 계약서 다 쓰고 인테리어 공사까지 반쯤 끝났는데, 구청 위생과에서 위반건축물이라 식품제조가공업 등록이 아예 안 된답니다. 보증금이랑 시설비 날리게 생겼는데 어쩌죠?"
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      지엘행정사사무소로 인허가 긴급 구조 요청을 하시는 소상공인 대표님들의 단골 사연입니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      결론부터 단호하게 말씀드리면, <strong>식품제조가공업은 건물 계약 전에 부동산의 '건축물대장'과 '위반건축물 여부'를 확인하지 않으면 사업 자체가 무산될 수 있습니다.</strong>
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 정리</strong><br><br>
      · <strong>입지 확인:</strong> 건축물 용도가 '제2종 근린생활시설(제조업소)' 혹은 '공장'이어야 함 (위반건축물 절대 불가).<br>
      · <strong>시설 기준:</strong> 원료 입고부터 제조, 포장, 출고까지 '교차 오염'이 없도록 작업장을 완벽히 분리·구획해야 함.<br>
      · <strong>행정 절차:</strong> 신규 위생교육 수령 ➔ 보건증 발급 ➔ 시설 공사 ➔ 구청 서류 접수 및 현장 실사.
    </p>
  </div>

  <h2>1. 식품제조가공업 신규 영업등록 처리 절차</h2>
  <p>
    식품위생법에 따라 유통 목적의 식품을 제조하기 위해서는 관할 지자체(구청 위생과 또는 시청)에 '영업등록'을 완료해야 합니다. 전체적인 행정 흐름은 다음과 같습니다.
  </p>
  <div class="step-box" style="background:#f0f4ff;border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0;line-height:2.1;">
    <strong>[5단계 핵심 프로세스]</strong><br>
    <strong>1단계: 입지 및 도면 검토</strong> - 상가/지산 용도 확인 및 위반건축물 조회<br>
    <strong>2단계: 사전 준비</strong> - 대표자 보건증(건강진단결과서) 발급 및 한국식품산업협회 위생교육 이수<br>
    <strong>3단계: 시설 시공</strong> - 교차 오염 방지를 위한 격벽(가벽) 공사, 배수구 트렌치, 환기 시설 설치<br>
    <strong>4단계: 서류 접수</strong> - 영업등록 신청서, 시설배치도, 임대차계약서 등 제출<br>
    <strong>5단계: 현장 실사</strong> - 주무관이 영업장에 직접 방문하여 도면과 일치하는지 시설 검무 후 등록증 발급
  </div>

  <h2>2. 구청 위생과 제출 필수 구비 서류 명세</h2>
  <p>
    인허가 서류를 접수할 때 서류가 하나라도 누락되거나 시설배치도가 엉망이면 실사 일정이 뒤로 밀려 임대료만 낭비하게 됩니다. 아래 서류를 완벽히 체킹하셔야 합니다.
  </p>
  <ul>
    <li><strong>식품영업등록 신청서:</strong> 구청 비치 서식 작성</li>
    <li><strong>제조시설 배치도:</strong> 기계, 설비 위치와 세척실, 탈의실 등을 구획한 도면 (지엘에서 직접 작성 대행)</li>
    <li><strong>사업자등록증 또는 법인 등기부등본:</strong> 법인인 경우 인감증명서 및 위임장 추가</li>
    <li><strong>임대차계약서 원본:</strong> 건축물대장상의 주소와 정확히 일치해야 함</li>
    <li><strong>신규 위생교육 수료증:</strong> 한국식품산업협회 온라인 교육 이수증</li>
    <li><strong>보건증:</strong> 영업자 및 종사자 전원 필수 (유효기간 1년 체크)</li>
    <li><strong>지하수 수질검사 성적서:</strong> 수돗물이 아닌 지하수를 용수로 사용하는 경우에만 해당</li>
  </ul>

  <h2>3. 실패 없는 작업장 내부 시설 기준 (25평 제조소 성공 사례)</h2>
  <p>
    인천 남동구의 한 상가 건물 2층(25평)에 소스 및 복합조미식품 제조 공장을 차리려던 의뢰인의 실제 사례입니다. 공간이 협소하다 보니 자칫 동선이 꼬여 구청 실사에서 반려될 위험이 컸습니다.
  </p>
  <div class="case-box-gold standard-box" style="background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 25평 소규모 제조소 인허가 성공 조건</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      · <strong>조건:</strong> 제2종 근린생활시설(제조업소) 용도 상가, 배수 트렌치 무(無) 상태.<br>
      · <strong>설계:</strong> 원료창고 ➔ 전처리실 ➔ 가열실 ➔ 내포장실 ➔ 외포장실로 이어지는 <strong>'일방통행(One-way)' 동선</strong> 마크.<br>
      · <strong>보완:</strong> 가열실 바닥에 R자형 앵글 마감 및 부식 없는 스테인리스 트렌치 보완 시공.<br>
      · <strong>결과:</strong> 구청 위생과 1차 현장 실사에서 지적 사항 단 한 건 없이 영업등록증 즉시 발급 완료.
    </p>
  </div>
  <p>
    많은 인테리어 업체들이 "예쁘게 칸막이만 치면 된다"고 하지만, 식품위생법상의 '청결구역'과 '일반구역' 분리 개념을 모르면 공사를 다 해놓고도 격벽을 허물고 재공사를 해야 하는 불상사가 생깁니다.
  </p>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">아파트나 주택방 한 칸을 개조해서 식품제조업을 할 수 있나요?</p>
      <p class="faq-a">
        <strong>절대 불가능합니다.</strong> 식품위생법상 식품제조가공업은 주거용 건축물(아파트, 빌라, 단독주택)이나 위반건축물, 창고시설(상가 용도가 아닌 경우)에서는 등록이 나오지 않습니다. 무조건 건축물 용도가 '제2종 근린생활시설(제조업소)'이나 '공장'인 곳만 타겟팅하셔야 합니다.
      </p>
    </div>
    <div class="faq-item">
      <p class="faq-q">영업등록증이 나오면 바로 판매(유통)할 수 있나요?</p>
      <p class="faq-a">
        등록증 발급 후 <strong>제품 생산 개시 전 혹은 개시 후 20일 이내에 '품목제조보고'</strong>를 완료해야 비로소 적법한 유통이 가능합니다. 제품의 성분 정보, 배합 비율, 제조 방법 설명서를 식품안전나라를 통해 보고해야 하며, 이 단계를 빼먹으면 무보고 제품 생산으로 행정처분을 받게 됩니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 도면 설계부터 구청 실사 동행까지, 번거로운 인허가를 원스톱으로 해결합니다</p>
    <p>지엘행정사사무소 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>
</article>
    `
  },
  {
    id: 11,
    category: 1,
    title: "식품제조가공업 품목제조보고 방법, 배합비율과 유통기한 설정실험 매뉴얼",
    summary: "식품 공장 등록 후 제품 유통을 위해 반드시 거쳐야 하는 품목제조보고서 작성법과 서류 규정을 분석합니다. 원료배합비 이스케이프 규칙 및 소비기한(유통기한) 설정 기준을 알기 쉽게 풀어드립니다.",
    date: "2026-07-12",
    tags: ["품목제조보고", "식품안전나라", "소비기한설정", "원료배합비", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "영업등록증은 어렵게 받았는데, 식품안전나라에서 품목제조보고를 하려니 원료 배합비율 총합이 100%가 안 된다고 계속 오류가 납니다. 정제수나 소량 들어가는 첨가물은 어떻게 적어야 하죠?"
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      인허가 이후 실제 제품 출시 단계에서 가로막히는 소상공인 대표님들이 정말 많습니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      명쾌한 정답을 드리면, <strong>품목제조보고 시 원료 배합비율은 가열 공정으로 증발하는 양과 관계없이 '투입 시점'을 기준으로 총합이 반드시 100.0%로 맞아떨어져야 합니다.</strong>
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 정리</strong><br><br>
      · <strong>원료 배합비:</strong> 주원료, 부원료, 식품첨가물, 정제수 등 모든 원료의 투입 백분율 합계가 정확히 100%여야 함.<br>
      · <strong>소비기한 설정:</strong> 의무실험 대상 여부를 파악하고, 유사제품 비교보고 시 근거 사유서를 명확히 제출해야 함.<br>
      · <strong>기한 규칙:</strong> 생산 시작 전 또는 생산 후 20일 이내에 반드시 전자 보고를 완료해야 법적 불이익이 없음.
    </p>
  </div>

  <h2>1. 식품안전나라 품목제조보고 가이드 및 순서</h2>
  <p>
    품목제조보고는 공장에서 어떤 원료로 어떤 제품을 만드는지 정부 시스템에 등록하는 절차입니다. 누락 시 1차 위반만으로도 대량의 과태료와 품목 제조정지 처분이 내려집니다.
  </p>
  <div class="step-box" style="background:#f0f4ff;border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0;line-height:2.1;">
    <strong>[품목제조보고 4단계 서류 제출 절차]</strong><br>
    <strong>1단계: 제품명 및 유형 확정</strong> - 식품공전 규격에 맞는 정확한 유형 매칭 (예: 소스, 즉석섭취식품 등)<br>
    <strong>2단계: 배합비율 계산</strong> - 소수점 첫째 자리까지 모든 원료의 중량 백분율을 100%로 환산<br>
    <strong>3단계: 유통기한(소비기한) 설정</strong> - 설정실험 성적서를 첨부하거나 과학적 근거를 담은 사유서 작성<br>
    <strong>4단계: 온라인 접수</strong> - 식품안전나라 관청 업무 승인 접수 (평균 2~3일 소요)
  </div>

  <h2>2. 소비기한(구 유통기한) 설정실험 생략 기준과 근거 사유서</h2>
  <p>
    모든 신제품이 수백만 원짜리 유통기한 설정실험을 직접 해야 하는 것은 아닙니다. 식품의약품안전처 지침에 따라 아래의 조건을 만족하면 <strong>'소비기한 설정 사유서'</strong> 제출로 실험을 갈음할 수 있습니다.
  </p>
  <ul>
    <li><strong>유사제품 비교군 존재:</strong> 내가 만들고자 하는 제품과 식품유형, 성상, 포장재질, 보관방법이 동일한 기존 제품이 시장에 이미 유통 중인 경우</li>
    <li><strong>권장소비기한 이내 설정:</strong> 식약처가 고시한 '식품별 권장소비기한' 가이드라인 표보다 짧게 기한을 설정하는 경우</li>
    <li><strong>실험 면제 항목 확인:</strong> 수분활성도가 극히 낮거나(육포, 건조식품), 살균·멸균 공정을 완벽히 거쳐 부패 우려가 없는 경우</li>
  </ul>

  <h2>3. 실제 실패 사례 분석: 복합원재료 숨김으로 인한 실사 지적 사례</h2>
  <p>
    경기도 성남시에서 떡볶이 분말 소스를 개발해 품목제조보고를 직접 진행하셨던 대표님의 실제 리스크 극복 사례입니다.
  </p>
  <div class="case-box-gold standard-box" style="background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 원료명 표기 오류 보완 사례</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      · <strong>상황:</strong> 대기업에서 구매한 '카레분말'을 소스 원료로 사용하며 배합비에 단순 '카레분말 5%'로 기재함.<br>
      · <strong>문제:</strong> 카레분말 내부에 포함된 정제염, 혼합제제 등 하위 복합원재료(괄호 표기 항목)를 누락하여 식약처 시스템 승인 반려.<br>
      · <strong>해결:</strong> 지엘행정사가 원재료 시험성적서(MSDS)를 추적 분석하여 <strong>'카레분말[강황, 정제염, 혼합총량]' 구조로 하위 원료를 완벽히 쪼개어 재보고</strong> 승인 성공.
    </p>
  </div>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">제품 포장지에 들어갈 디자인(표시사항) 문구도 품목제조보고 기준과 맞춰야 하나요?</p>
      <p class="faq-a">
        <strong>당연합니다.</strong> 식품 표시광고법에 따라 제품 라벨에 인쇄되는 원재료명 서열과 소비기한은 구청에 품목제조보고한 내용과 단 한 글자도 틀리지 않고 일치해야 합니다. 만약 매칭이 다르면 유통 프로세스 도중 위생점검에서 '표시기준 위반'으로 전량 회수 및 폐기 명령이 떨어질 수 있습니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 복잡한 식품안전나라 전자 보고부터 성분 표시 라벨 검수까지, 법적 책임을 완벽히 방어해 드립니다</p>
    <p>지엘행정사사무소 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>
</article>
    `
  },
  {
    id: 10,
    category: 1,
    title: "식품제조가공업 건축물 용도 용도변경 체크리스트, 제2종근린생활시설 제조업소 허가 조건",
    summary: "상가나 지식산업센터 부동산 계약 전 반드시 확인해야 할 식품 공장 입지 기준을 제시합니다. 바닥면적 500㎡ 기준에 따른 용도변경 규정과 위반건축물 예방법을 확인하세요.",
    date: "2026-07-12",
    tags: ["건축물용도", "제2종근린생활시설", "제조업소", "용도변경", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "인천 남동구 공단 근처 상가 1층이 마음에 들어 계약 직전인데, 용도가 '제1종 근린생활시설(소매점)'로 되어 있습니다. 여기서 즉석판매업이 아니라 유통 소스를 대량 생산하는 식품제조가공업을 할 수 있나요?"
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      상가 매물을 직접 보러 다니시는 대표님들이 가장 혼동하기 쉬운 부동산 공법 규정입니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      팩트 기반의 결론을 드리면, <strong>제1종 근생 소매점에서는 대량 납품용 식품제조가공업이 원칙적으로 불가능합니다. 면적이 500㎡(약 150평) 미만이라면 반드시 '제2종 근린생활시설(제조업소)'로 용도를 변경해야만 구청 허가가 나옵니다.</strong>
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 정리</strong><br><br>
      · <strong>면적 기준 500㎡ 미만:</strong> 건축물대장상 용도가 반드시 '제2종 근린생활시설(제조업소)'이어야 함.<br>
      · <strong>면적 기준 500㎡ 이상:</strong> 근생 건물로는 허가가 나오지 않으며, 반드시 용도가 '공장'인 건축물이어야 함.<br>
      · <strong>지산 체크유형:</strong> 지식산업센터(공장형 아파트)라 하더라도 '제조형 호실'이 아닌 '업무 지원시설 호실'은 인허가가 반려됨.
    </p>
  </div>

  <h2>1. 건축물대장 용도별 식품제조업 입지 기준</h2>
  <p>
    국토의 계획 및 이용에 관한 법률 및 건축법에 따라 영업소의 바닥면적 합계에 따라 들어갈 수 있는 건축물의 종류가 엄격히 제한됩니다.
  </p>
  
  <div class="resp-table standard-box" style="padding:0;overflow:hidden;margin:20px 0;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.9;">
      <thead>
        <tr>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">작업장 바닥면적 합계</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">허가 가능한 합법 건축물 용도</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">불가능한 건축물 용도 (계약 금지)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">500㎡ (약 150평) 미만</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#3a3a3a;font-weight:600;">제2종 근린생활시설(제조업소), 공장</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#dc2626;">제1종 근린생활시설, 일반업무시설, 주거지역 주택</td>
        </tr>
        <tr style="background:#f8f9fd;">
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;">500㎡ (약 150평) 이상</td>
          <td style="padding:12px 14px;color:#3a3a3a;font-weight:600;">오직 '공장' (Factory) 용도만 가능</td>
          <td style="padding:12px 14px;color:#dc2626;">근린생활시설 전체 건축물 마크 불가</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="resp-cards" style="margin:20px 0;">
    <div class="r-card">
      <div class="r-head">150평 미만 소규모 공장</div>
      <div class="r-row"><div class="r-label">필수 용도</div><div class="r-val">제2종 근생(제조업소) 또는 공장</div></div>
      <div class="r-row"><div class="r-label">금지 용도</div><div class="r-val" style="color:#b91c1c;">제1종 근생, 소매점, 주택 방칸</div></div>
    </div>
    <div class="r-card">
      <div class="r-head">150평 이상 대형 공장</div>
      <div class="r-row"><div class="r-label">필수 용도</div><div class="r-val">오직 건축물대장상 '공장'만 가능</div></div>
      <div class="r-row"><div class="r-label">금지 용도</div><div class="r-val" style="color:#b91c1c;">모든 근린생활시설 상가건물 불가</div></div>
    </div>
  </div>

  <h2>2. 상가 부동산 계약 전 반드시 거쳐야 할 '3대 입지 필터링'</h2>
  <p>
    마음에 드는 자리를 찾으셨다면 인테리어 계약금이나 부동산 가계약금을 걸기 전에 반드시 아래 3가지 리스크 요소를 행정사에게 검수받으셔야 자본금을 지킬 수 있습니다.
  </p>
  <ul>
    <li><strong>하수도 원인자부담금 조회:</strong> 식품제조업은 일반 업종보다 물 사용량(오수 발생량)이 월등히 많아, 용도변경 시 구청 환경과에서 수백만 원에서 수천만 원에 달하는 하수도 분담금을 청구할 수 있습니다. 지엘행정사가 직접 사전 시뮬레이션을 통해 비용 부담 주체를 명확히 정리해 드립니다.</li>
    <li><strong>정전 및 인입 전력량 확인:</strong> 식품 공장 기계(대형 가열기, 냉동 콤프레셔 등)를 돌리려면 최소 30kW~50kW 이상의 삼상 전력이 들어와야 합니다. 상가 전체 계약 전력이 부족하면 '한전 승압 공사'에만 수백만 원의 추가 지출이 발생합니다.</li>
    <li><strong>위반건축물 테두리 스캔:</strong> 건축물대장 우측 상단에 노란색 '위반건축물' 표기가 없더라도, 무단 증축된 가설건축물(판넬 천막, 주차장 무단 전용)이 건물 내에 존재하면 구청 위생과에서 인허가 서류 접수 자체를 차단합니다.</li>
  </ul>

  <h2>3. 실제 사례: 용도변경 불가 판정으로 보증금 날릴 위기를 구한 입지 검토</h2>
  <div class="case-box-gold standard-box" style="background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 인천 남동구 지식산업센터 입지 구제 사례</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      · <strong>상황:</strong> 대표님이 밀키트 도매업 유통을 위해 지산(지식산업센터) 건물 3층 40평을 부동산 중개인 말만 믿고 가계약함.<br>
      · <strong>문제:</strong> 지산 건물이지만 해당 호실의 용도가 '공장'이 아닌 '지원시설(업무시설)'로 명시되어 있어 용도변경 마크가 불가능했던 조건.<br>
      · <strong>해결:</strong> 가계약금 특약 조건에 "식품인허가 불가 시 조건 없는 해약" 조항을 지엘행정사의 자문으로 미리 삽입해 둔 덕분에, <strong>계약금 500만 원 전액을 안전하게 환수처리</strong>하고 옆 동의 합법 공장 호실로 재매칭 성공.
    </p>
  </div>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">정화조 용량도 식품제조가공업 등록에 영향을 주나요?</p>
      <p class="faq-a">
        <strong>치명적인 영향을 줍니다.</strong> 식품 공장은 일반 소매 상가보다 정화조 모수 처리 단량이 대폭 상승합니다. 정화조 용량이 부족할 경우, 건물 전체의 정화조 청소 주기를 연 1회에서 반기별 1회로 단축하겠다는 '정화조 내부 청소 주동의서'를 건물주 및 전체 임차인에게 받아 구청 환경과에 제출해야 허가가 나옵니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 "여기가 진짜 인허가가 나오는 자리일까?" 고민하지 마세요. 주소지만 주시면 공법상 규제를 무료로 정밀 분석해 드립니다</p>
    <p>지엘행정사사무소 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>
</article>
    `
  },
  {
    id: 9,
    category: 1,
    title: "식품제조가공업 위수탁 제조(OEM) 계약 규칙과 의무 자가품질검사의 모든 것",
    summary: "내 브랜드로 식품을 타사 공장에 맡겨 제조(OEM)할 때 발생하는 위수탁 인허가 법령과 품질 검사 주기를 분석합니다. 대행 계약 시 품목제조보고 주체 규정을 알기 쉽게 정리합니다.",
    date: "2026-07-12",
    tags: ["위수탁제조", "OEM계약", "자가품질검사", "위생법준수", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "저희는 유통 전문 판매업 면허만 있고 실제 생산 시설이 없어서, 다른 식품 가공 공장에 저희 레시피를 주고 OEM(위탁생산)을 맡기려고 합니다. 이 경우 자가품질검사비나 품목제조보고는 어느 공장에서 책임져야 하나요?"
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      공장 설립 자본금을 아끼기 위해 위수탁 유통 비즈니스를 구상하시는 대표님들이 반드시 숙지해야 하는 행정 책임론입니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      행정법상 명확한 결론을 정리해 드리면, <strong>실제 기계를 돌려 제품을 생산하는 주체인 '수탁 공장(제조 공장)'의 대표자가 품목제조보고와 법적 자가품질검사를 수행할 주체입니다. 다만 위탁을 맡긴 브랜드 본사 역시 연대 위생 책임을 집니다.</strong>
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 정리</strong><br><br>
      · <strong>품목제조보고 주체:</strong> 위탁자가 아닌, 실제 생산 시설을 갖춘 '수탁 제조업자'의 명의로 구청에 보고해야 함.<br>
      · <strong>자가품질검사 주기:</strong> 식품위생법 고시에 따라 식품 유형별로 1개월~3개월 주기로 공인 검사기관에 의뢰해야 함.<br>
      · <strong>위반 시 리스크:</strong> 수탁자가 검사를 누락하면 영업정지 처분을 받으며, 위탁자의 브랜드 제품 역시 전량 판매 중지 및 회수됨.
    </p>
  </div>

  <h2>1. 식품 위수탁 제조(OEM) 진행 시 법적 행정 순서</h2>
  <p>
    제조 시설이 없는 유통사(위탁자)와 식품제조가공업 공장(수탁자) 간의 안전한 비즈니스를 위한 행정 조치 순서는 다음과 같습니다.
  </p>
  <div class="step-box" style="background:#f0f4ff;border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0;line-height:2.1;">
    <strong>[위수탁 제조 표준 인허가 프로세스]</strong><br>
    <strong>1단계: 위수탁 계약서 체결</strong> - 책임 소지 명시 (원료 공급, 배상 책임, 상표권 배합 설정 등)<br>
    <strong>2단계: 수탁 공장 품목제조보고</strong> - 제조 공장 주소지로 신제품 성분 배합 보고 완료<br>
    <strong>3단계: 유통전문판매업 신고</strong> - 위탁 본사는 관할 구청에 유통 면허증(유통전문판매업)을 받아야 대기업처럼 완제품 판매 가능<br>
    <strong>4단계: 표시사항(라벨) 확정</strong> - 제품 전면에 '제조원: 수탁공장', '유통전문판매원: 위탁회사'를 동시에 표기
  </div>

  <h2>2. 식품위생법상 카테고리별 자가품질검사 필수 주기 표</h2>
  <p>
    식품제조가공업자는 생산하는 제품이 안전한지 스스로 검사해야 하는 의무가 있습니다. 유형별로 법정 검사 주기가 다르므로 매달 체크리스트를 관리해야 합니다.
  </p>

  <div class="resp-table standard-box" style="padding:0;overflow:hidden;margin:20px 0;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.9;">
      <thead>
        <tr>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;width:40%;">식품 카테고리 및 유형</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">의무 검사 주기</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">주요 법정 검사 항목</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">과자류, 소스류, 복합조미식품</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#3a3a3a;text-align:center;font-weight:600;">3개월에 1회 이상</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#555;">타르색소, 보존료, 대장균군</td>
        </tr>
        <tr style="background:#f8f9fd;">
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">즉석섭취식품, 즉석조리식품 (밀키트 등)</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#3a3a3a;text-align:center;font-weight:600;">1개월에 1회 이상</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#555;">세균수, 대장균, 살모넬라, 리스테리아</td>
        </tr>
        <tr>
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;">음료류, 주류, 빵류</td>
          <td style="padding:12px 14px;color:#3a3a3a;text-align:center;font-weight:600;">2개월에 1회 이상</td>
          <td style="padding:12px 14px;color:#555;">세균수, 총아플라톡신, 납, 세레우스</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="resp-cards" style="margin:20px 0;">
    <div class="r-card">
      <div class="r-head">소스류 및 일반 가공식품</div>
      <div class="r-row"><div class="r-label">검사 주기</div><div class="r-val">3개월에 최소 1회</div></div>
      <div class="r-row"><div class="r-label">핵심 항목</div><div class="r-val">보존료, 타르색소 검출 여부</div></div>
    </div>
    <div class="r-card">
      <div class="r-head">밀키트 및 즉석조리식품</div>
      <div class="r-row"><div class="r-label">검사 주기</div><div class="r-val" style="color:#b91c1c;">매달 1회 의무 시행</div></div>
      <div class="r-row"><div class="r-label">핵심 항목</div><div class="r-val">식중독균(살모넬라, 리스테리아) 팩트 체크</div></div>
    </div>
  </div>

  <h2>3. 베테랑 행정사가 전하는 위수탁 공장 위생 점검 디테일</h2>
  <p>
    위탁회사 대표님들은 생산 시설이 없으니 위생 책임에서 자유롭다고 오해하십니다. 하지만 식품위생법 제44조에 따라, **수탁 가공 공장이 자가품질검사를 빼먹거나 불량 식품을 생산하면 위탁회사의 브랜드 면허(유통전문판매업) 역시 동시에 영업정지 처분**을 받게 됩니다.
  </p>
  <div class="case-box-gold standard-box" style="background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 브랜드 가치를 지키는 위수탁 관리 팁</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      · 수탁 공장 계약 전, 해당 공장의 **HACCP인증 유효성**과 과거 구청 행정처분 이력을 반드시 조회해 유연성을 확보해야 합니다.<br>
      · 매 분기별로 자가품질검사 성적서 원본 카피본을 수탁 공장으로부터 전달받아 보관하는 조항을 계약서 특약에 강제 매칭하셔야 브랜드 신뢰도를 방어할 수 있습니다.
    </p>
  </div>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">자가품질검사 결과 부적합 판정(세균수 초과 등)이 나오면 어떻게 되나요?</p>
      <p class="faq-a">
        검사기관에서 부적합 결과가 나오는 즉시 식약처와 구청에 실시간으로 통보됩니다. 해당 배치로 생산된 당일 제품은 즉시 유통이 차단되며 전량 회수·폐기해야 합니다. 또한 수탁 공장은 즉각적인 원인 분석과 함께 시설 소독 조치를 취해야 하며, 이를 이행하지 않으면 공장 등록 취소 사유가 됩니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 불리한 계약서 조항 검토부터 유통전문판매업 면허 취득까지, 안전한 유통망 비즈니스를 호위합니다</p>
    <p>지엘행정사사무소 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>
</article>
    `
  },
  {
    id: 8,
    category: 1,
    title: "식품제조가공업 시설공사 주의점, 바닥 트렌치와 청결·일반구역 동선 동선획정 가이드",
    summary: "인테리어 평면도 설계 시 구청 주무관들이 현장 실사에서 현미경 검증하는 핵심 초점을 해부합니다. 교차 오염을 방지하는 격벽 공사 지침을 확인하세요.",
    date: "2026-07-12",
    tags: ["시설공사", "바닥트렌치", "작업장동선", "인테리어설계", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "인테리어 업체가 일반 식당 주방처럼 타일 깔고 슬라이딩 도어 달면 식품 공장 허가가 나온다고 해서 공사 다 끝내놨는데, 구청 실사관이 와서 원료 동선이랑 제품 동선이 겹친다고 탈의실이랑 벽을 다 다시 세우라네요. 공사비 이중으로 들게 생겼습니다."
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      식품 위생 공법을 전혀 모르는 일반 주방 인테리어 업자에게 시공을 맡겼다가 발생하는 소상공인 대표님들의 눈물 섞인 피해 사례입니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      골든타임을 지킬 수 있는 팩트를 짚어드리면, <strong>식품제조공장의 인테리어는 '예쁜 디자인'이 아니라 '위생과 주무관의 허가 기준'에 맞춘 공학적 벽체 분리와 바닥 배수(트렌치) 공사가 본질입니다.</strong>
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 정리</strong><br><br>
      · <strong>일방통행 원칙:</strong> 원료 입고 ➔ 전처리 ➔ 제조·가공 ➔ 포장 ➔ 완제품 출고 동선이 절대 교차(U턴)하면 안 됨.<br>
      · <strong>바닥 마감 기술:</strong> 물이 고이지 않도록 역구배(경사 공사)를 잡고, 부식과 세균 번식이 없는 R자형 스텐 트렌치를 매립해야 함.<br>
      · <strong>격벽 구획화:</strong> 탈의실, 원료창고, 제조실, 포장실은 반드시 천장까지 완전히 막힌 고정식 격벽으로 분리해야 함.
    </p>
  </div>

  <h2>1. 구청 실사관이 현장에서 확인하는 3대 핵심 시설 기준</h2>
  <p>
    구청 위생과 공무원들이 현장 실사를 나올 때 주머니에서 도면을 꺼내 들고 가장 먼저 체킹하는 법적 시설 요소입니다.
  </p>
  <div class="step-box" style="background:#f0f4ff;border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0;line-height:2.1;">
    <strong>[구청 실사 프리패스 3대 시공 지침]</strong><br>
    <strong>1) 교차 오염 원천 차단:</strong> 오염 구역(원료 전처리, 세척실)의 외부 공기나 오수가 청결 구역(조리 가열실, 내포장실)으로 넘어가지 않도록 벽체 배치.<br>
    <strong>2) 바닥 및 벽면 재질:</strong> 청소와 살균이 용이하도록 방수성 재질(에폭시, 라이닝 또는 FRP 판넬)을 시공하고 무공성 마감 처리.<br>
    <strong>3) 방충·방서 시설:</strong> 외부 해충과 쥐 침입을 막기 위해 모든 배수구에 잔그물망 걸음망을 설치하고 환풍기에는 자동 셔터식 댐퍼 장착.
  </div>

  <h2>2. 식품 공장의 심장, 바닥 트렌치와 구배(경사) 공사 실패 유형</h2>
  <p>
    일반 한식당 주방 공사를 하듯 바닥에 구멍 뚫린 '자바라 배수구' 몇 개 던져놓으면 공장 등록증은 영원히 나오지 않습니다. 식품 제조업 바닥 공사는 차원이 다릅니다.
  </p>
  <ul>
    <li><strong>R자형 라운드 마감:</strong> 벽면과 바닥이 만나는 직각 모서리에는 때가 끼고 곰팡이가 피기 쉽습니다. 반드시 모서리를 둥글게 깎아내는 R자형 아크 아웃 마감을 해야 주무관들이 흡족해합니다.</li>
    <li><strong>스테인리스 트렌치 시공:</strong> 제조 시설 내부 배수로는 물이 순식간에 빠져나가도록 너비 150mm 이상의 스테인리스 트렌치를 매립하고, 바닥면 전체가 트렌치를 향해 비스듬히 기울어지도록 구배 공사를 정밀하게 잡아야 바닥에 고인 물이 썩지 않습니다.</li>
    <li><strong>천장 환기 강제 배기 시스템:</strong> 가열 공정이 있는 방에는 후드 시설 외에 외부 공기를 강제로 인입시키는 '급기'와 내부 열기를 뽑아내는 '배기'의 공조 밸런스를 맞춰야 벽면에 결로(물방울)가 생겨 곰팡이가 피는 대형 사고를 막을 수 있습니다.</li>
  </ul>

  <h2>3. 실제 사례: 동선 꼬임으로 반려된 인테리어 도면 심폐소생 구제 사례</h2>
  <p>
    인천 남동구에서 HACCP인증까지 염두에 두고 밀키트 및 양념육 제조 시설을 셀프로 시공하시던 소상공인 대표님의 사례입니다.
  </p>
  <div class="case-box-gold standard-box" style="background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 레이아웃 전면 리모델링 교정 디테일</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      · <strong>실태:</strong> 작업자가 화장실을 거쳐 제조실로 들어갈 때 탈의실을 거치지 않는 '위생 동선 붕괴' 평면도 확인.<br>
      · <strong>처방:</strong> 지엘행정사가 직접 현장에 출동하여 인테리어 업자와 미팅 후, 이미 세워진 경량 가벽 두 칸을 허물고 **'위생 전실(손세척기, 에어샤워 공간) ➔ 탈의실 ➔ 청결제조실'로 이어지는 삼단계 차단 관문 도면**으로 긴급 수정.<br>
      · <strong>결과:</strong> 재설계 도면을 구청 주무관에게 사전 컨펌받은 후 시공하여, 최종 실사 당일 지적 사항 제로(0)로 영업등록증 발급 안착.
    </p>
  </div>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">벽면 칸막이를 칠 때 샌드위치 판넬을 그냥 써도 구청에서 넘어가 주나요?</p>
      <p class="faq-a">
        일반 내부 판넬은 통과될 수 있지만 내부 충전재가 화재에 취약한 스티로폼인 경우 건축법상 '방화구획 위반'으로 걸릴 수 있습니다. 따라서 반드시 난연 성능이 검증된 '글라스울 판넬'이나 '난연 우레탄 판넬'을 사용해야 하며, 표면이 부식되거나 가루가 날리지 않도록 코팅 마감된 자재 규격을 쓰셔야 인허가와 소방 기준을 동시에 클리어할 수 있습니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 인테리어 도면 그리기 전 단계부터 함께하세요. 도면 한 장의 차이가 수백만 원의 재공사 비용을 결정합니다</p>
    <p>지엘행정사사무소 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>
</article>
    `
  },
  {
    id: 7,
    category: 2,
    title: "식육가공업이란 무엇인가요? 업종을 잘 못 선택하면 처음부터 허가를 다시 받아야 합니다.",
    summary: "염지·양념·가열 등 가공 행위가 있으면 식육가공업, 절단(세절, 분쇄 등)·포장·냉장 또는 냉동을 하면 식육포장처리업입니다. 두 업종을 같은 것으로 알고 잘못 준비하는 사례가 실제로 있습니다. 인천 염지 닭 사례와 함께 핵심 차이점을 정리합니다.",
    date: "2026-07-09",
    tags: [],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
<p style="text-align: center;"><em>"식육가공업 허가? 어떤 경우에 받는 건가요?"</em></p><p style="text-align: center; margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">상담 전화에서 꽤 자주 듣는 말입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">결론부터 말씀드리면, 식육가공업은 <strong>식육가공품</strong>을 만드는 영업으로, <strong>식육가공품</strong>은 식육 또는 식육가공품을 주원료로 하여, 염지·양념·가열 등의 가공 처리를 한 것을 말합니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">오늘은 어떤 경우에 식육가공업 허가를 받아야 하는지에 대해 알아보도록 하겠습니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">💡 <strong>핵심 정리</strong></p><p style="margin:0 0 14px;line-height:2.0;">식육에 &nbsp;<strong>양념·염지·가열 등 가공 행위</strong>가 들어간다면 → <strong>식육가공업</strong></p><p style="margin:0 0 14px;line-height:2.0;">식육을<strong> </strong>단순히 자르고 포장만 한다면 → <strong>식육포장처리업</strong></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">이 차이를 모르고 잘못된 업종으로 허가를 냈다가 처음부터 다시 준비하게 됩니다.</p><p style="margin: 0px 0px 6px;"><br></p><h2>1. 식육가공업이란? – 법적 정의</h2><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><strong>식육가공업</strong>은 「축산물 위생관리법」 제2조 및 제21조에 따라 <strong>허가</strong>를 받아야 하는 영업입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">식육가공업 정의는 이렇습니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><span style="color: rgb(42, 58, 90);">"</span><strong style="color: rgb(42, 58, 90);">식육가공품</strong><span style="color: rgb(42, 58, 90);">을 만드는 </span><strong style="color: rgb(42, 58, 90); font-size: 15px;">영업</strong><span style="color: rgb(42, 58, 90);">으로, </span><strong style="color: rgb(42, 58, 90);">식육가공품</strong><span style="color: rgb(42, 58, 90);">은 식육 또는 식육가공품 등을 주 원료로 하여 가공한 제품"을 말합니다.</span></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">여기서 핵심은 <strong>'가공'</strong>이라는 단어입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">단순한 절단이나 포장이 아니라, <strong>염지·양념·가열·훈연·건조·성형</strong> &nbsp;등의 처리 공정이 포함된 것을 말합니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">쉽게 말씀드리면, 원료 고기에 <strong>무언가를 더하거나 변형시키는 과정</strong>을 거쳐 새로운 형태의 제품을 만들어내는 것입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">염지 닭, 소시지, 햄, 육포, 양념갈비, 패티 같은 제품들이 모두 여기에 해당합니다.</p><p style="margin: 0px 0px 6px;"><br></p><h2>2. 업종 비교- 식육포장처리업</h2><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">많은 분들이 식육가공업과 식육포장처리업을 헷갈려 하십니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><strong>식육포장처리업</strong>은 같은 법에 따라 <strong>허가</strong>를 받아야 하는 영업이지만, 할 수 있는 것의 범위가 다릅니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">법령상 정의는 이렇습니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><strong style="color: rgb(42, 58, 90);">"포장육을 만드는 영업"</strong></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"> <span style="color: rgb(107, 114, 128);">※ 포장육 : 식육을 절단(세절 등)하거나 분쇄해서 위생적으로 포장한 후 냉장 또는 냉동한 것</span></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">즉, 원료 고기를 <strong>자르고 포장하는 것</strong>이 이 업종이 할 수 있는 범위입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">따라서 양념을 더하거나, 염지액에 담그거나, 가열·훈연 공정을 거치는 것은 <strong>식육포장처리업의 범위에 포함되지 않습니다.</strong></p><p style="margin: 0px 0px 6px;"><br></p><h2>3. 식육가공업은 해썹(HACCP) 의무 업종입니다.</h2><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">식육가공업은 「축산물 위생관리법」 제9조에 따라 <strong>해썹(HACCP) 적용 의무 업종</strong>으로 지정되어 있습니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">허가를 받은 후 반드시 해썹 인증을 취득해야 합니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">해썹(HACCP)이란?</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">해썹은 <strong>Hazard Analysis and Critical Control Points</strong>의 약자입니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><span style="color: rgb(42, 58, 90);">식품을 만드는 </span><strong style="color: rgb(42, 58, 90);">전 과정에서 위험이 생길 수 있는 지점을 미리 찾아내고,</strong></p><p style="margin:0 0 14px;line-height:2.0;"><span style="color: rgb(42, 58, 90);">그 지점을 집중적으로 관리하는 식품 안전 시스템입니다.</span></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;"><strong style="font-size: 17px;">🏪 마무리 하며</strong></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">오늘은 식육가공업 정의에 대해 알아보았는데요, 식육가공업 준비를 하시는 분들께 조금이나마 도움이 되셨으면 좋겠습니다.</p><p style="margin: 0px 0px 6px;"><br></p><p style="margin: 0px 0px 6px;"><br></p><p style="margin:0 0 14px;line-height:2.0;">식품·축산물 가공업 인허가와 HACCP인증 팀 | 대표 김대운 행정사</p><p style="margin:0 0 14px;line-height:2.0;"><a href="tel:010-3538-3098" target="_blank">📞 010-3538-3098 직통 상담</a><a href="http://gladmin.co.kr" target="_blank">🌐 공식 홈페이지 이동</a></p><p style="margin: 0px 0px 6px;"><br></p>
</article>
    `
  },
  // ──────────────────────────────────────────────
  //  POST 3  |  즉석판매제조가공업 - 온라인·매장 판매 (인천 식당 사례)
  // ──────────────────────────────────────────────
  {
    id: 3,
    category: 3,
    title: "식당에서 만든 반찬·소스, 온라인으로 팔고 싶다면? 즉석판매제조가공업 정의",
    summary: "식당이나 반찬가게를 운영하면서 온라인으로 제품을 판매하고 싶은 분들이 많습니다. 매장 내 판매와 온라인 판매 모두 가능한지, 어디까지 허용되는지 즉석판매제조가공업을 중심으로 정리합니다.",
    date: "2026-07-02",
    tags: ["즉석판매제조가공업", "즉석판매제조가공업신고", "식당온라인판매", "반찬온라인판매", "식품위생법", "식품인허가", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">

  <section class="intro-box" style="margin-bottom:40px;padding:22px 24px;">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "식당을 운영하고 있는데, 제가 직접 만든 김치나 반찬을 온라인에서도 팔고 싶어요.<br>따로 허가를 받아야 하나요?"
    </p>
    <p style="margin-top:18px;margin-bottom:0;">
      음식점을 운영하다 보면 자연스럽게 생기는 고민입니다.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      매장에서 잘 팔리는 반찬, 직접 개발한 소스, 정성껏 담근 김치를 온라인으로도 팔고 싶은데 — 기존 음식점 영업으로 그냥 팔면 되는지, 따로 신고가 필요한지 헷갈리시는 거죠.
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      결론부터 말씀드리면, <strong>음식점 영업만으로는 온라인 판매나 포장(진열) 판매를 할 수 없습니다.</strong>
    </p>
    <p style="margin-top:12px;margin-bottom:0;">
      별도로 <strong>즉석판매제조가공업 신고</strong>를 해야 합니다.
    </p>
  </section>

  <div class="standard-box" style="margin-bottom:48px;">
    <p style="margin:0;line-height:2.1;">
      💡 <strong>핵심 정리</strong><br><br>
      음식점 영업 → 매장에서 <strong>조리한 음식을 식사로 제공</strong>하는 것만 가능<br>
      즉석판매제조가공업 → 직접 만든 식품을 <strong>포장(진열)해서 판매하거나 온라인으로 판매</strong> 가능<br><br>
      <span style="font-size:13px;color:#6b7280;">※ 다른 식당·마트에 납품하려면 식품제조가공업 등록이 별도로 필요합니다.</span>
    </p>
  </div>


  <h2>1. 즉석판매제조가공업이란? – 법적 정의</h2>

  <p style="margin-top:20px;">
    <strong>즉석판매제조가공업</strong>은 「식품위생법 시행령」 제21조에 따라 <strong>신고</strong>를 하고 운영하는 영업입니다.
  </p>
  <p style="margin-top:14px;">
    법령상 정의는 이렇습니다.
  </p>

  <div class="standard-box" style="margin:18px 0 24px;padding:18px 22px;">
    <p style="margin:0;font-size:14px;color:#2a3a5a;line-height:2.0;">
      "총리령에서 정하는 식품을 제조·가공업소에서 직접 최종 소비자에게 판매하는 영업"<br>
      <span style="font-size:12px;color:#6b7280;">— 식품위생법 시행령 제21조 제5호</span>
    </p>
  </div>

  <p>여기서 핵심 키워드는 두 가지입니다.</p>

  <p style="margin-top:12px;">
    <strong>① 제조·가공업소에서</strong> — 매장 내 진열 판매 또는 온라인으로 판매하는 것<br>
    <strong>② 최종 소비자에게 판다</strong> — 영업을 목적으로 하는 사람이 아닌 최종 소비자에게 직접 파는 것
  </p>

  <p style="margin-top:14px;margin-bottom:36px;">
    이 두 가지가 충족된다면, 매장에서 파는 것이든 온라인으로 파는 것이든 즉석판매제조가공업의 범위에 해당합니다.
  </p>


  <h2>2. 기존 음식점 허가로는 왜 안 되나요?</h2>

  <p style="margin-top:20px;">
    "이미 음식점 허가가 있는데 왜 또 신고를 해야 하나요?"라고 물어보시는 분들이 많습니다.
  </p>
  <p style="margin-top:14px;">
    이유는 법적으로 <strong>영업 허가의 목적이 다르기 때문</strong>입니다.
  </p>
  <p style="margin-top:14px;margin-bottom:24px;">
    일반음식점 허가는 손님이 자리에 앉아 드시는 '식사 제공'이 목적입니다. 반면 진열 판매나 온라인 판매는 '식품을 제조해서 포장된 제품을 파는 것'으로, 법적으로 다른 행위입니다.
  </p>

  <!-- PC 테이블 -->
  <div class="resp-table standard-box" style="padding:0;overflow:hidden;margin:0 0 20px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.9;">
      <thead>
        <tr>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;width:26%;">구분</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">일반음식점 영업</th>
          <th style="background:#1a2e5a;color:#fff;padding:12px 14px;text-align:center;">즉석판매제조가공업</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">목적</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">매장에서 식사 제공</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">포장된 제품을 판매</td>
        </tr>
        <tr style="background:#f8f9fd;">
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">매장 내 식사 제공</td>
          <td style="padding:12px 14px;text-align:center;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">✅ 가능</td>
          <td style="padding:12px 14px;text-align:center;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">해당 없음</td>
        </tr>
        <tr>
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;border-bottom:1px solid #e8ecf5;">진열·포장 판매</td>
          <td style="padding:12px 14px;text-align:center;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">❌ 불가</td>
          <td style="padding:12px 14px;text-align:center;border-bottom:1px solid #e8ecf5;color:#3a3a3a;">✅ 가능</td>
        </tr>
        <tr style="background:#f8f9fd;">
          <td style="padding:12px 14px;background:#f0f4ff;font-weight:700;color:#1a2e5a;text-align:center;">온라인 판매</td>
          <td style="padding:12px 14px;text-align:center;color:#3a3a3a;">❌ 불가</td>
          <td style="padding:12px 14px;text-align:center;color:#3a3a3a;">✅ 가능</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 모바일 카드 -->
  <div class="resp-cards" style="margin:0 0 20px;">
    <div class="r-card">
      <div class="r-head">일반음식점 영업</div>
      <div class="r-row"><div class="r-label">목적</div><div class="r-val">매장에서 식사 제공</div></div>
      <div class="r-row"><div class="r-label">식사 제공</div><div class="r-val">✅ 가능</div></div>
      <div class="r-row"><div class="r-label">진열·포장 판매</div><div class="r-val">❌ 불가</div></div>
      <div class="r-row"><div class="r-label">온라인 판매</div><div class="r-val">❌ 불가</div></div>
    </div>
    <div class="r-card">
      <div class="r-head">즉석판매제조가공업</div>
      <div class="r-row"><div class="r-label">목적</div><div class="r-val">포장된 제품을 판매</div></div>
      <div class="r-row"><div class="r-label">식사 제공</div><div class="r-val">해당 없음</div></div>
      <div class="r-row"><div class="r-label">진열·포장 판매</div><div class="r-val">✅ 가능</div></div>
      <div class="r-row"><div class="r-label">온라인 판매</div><div class="r-val">✅ 가능</div></div>
    </div>
  </div>

  <div class="standard-box" style="margin:20px 0 48px;">
    <p style="margin:0;line-height:2.1;">
      📌 <strong>음식점을 운영하면서 온라인 판매를 함께 하고 싶다면,</strong><br>
      기존 음식점 영업은 유지하면서 즉석판매제조가공업을 <strong>추가로 신고</strong>하는 방식으로 진행합니다.<br>
      두 영업을 함께 운영하는 것은 법적으로 가능합니다.
    </p>
  </div>


  <h2>3. 즉석판매제조가공업으로 어디까지 팔 수 있나요?</h2>

  <p style="margin-top:20px;margin-bottom:20px;">
    이 업종으로 가능한 판매 방식과 안 되는 방식을 구체적으로 정리했습니다.
  </p>

  <h3 style="margin-top:24px;">✅ 가능한 것</h3>
  <div class="standard-box" style="margin:12px 0 24px;padding:18px 22px;">
    <p style="margin:0;font-size:14px;line-height:2.5;color:#2a3a5a;">
      <strong>· 매장 내 직접 판매</strong><br>
      <span style="color:#555;padding-left:12px;">내 가게 안에서 손님에게 직접 판매, 반찬 소분·진열 판매 포함.</span><br>
      <strong>· 스마트스토어·쿠팡·네이버쇼핑 등 온라인 판매</strong><br>
      <span style="color:#555;padding-left:12px;">개인 소비자 대상 온라인 쇼핑몰 판매 가능.</span><br>
      <strong>· SNS 주문 판매 (인스타그램·카카오채널 등)</strong><br>
      <span style="color:#555;padding-left:12px;">DM·카톡으로 주문받아 판매하는 형태도 가능.</span><br>
      <strong>· 택배·배달 발송</strong><br>
      <span style="color:#555;padding-left:12px;">개인 소비자에게 직접 택배로 발송하는 것 가능.</span><br>
      <strong>· 배달앱 포장 상품 판매</strong><br>
      <span style="color:#555;padding-left:12px;">배달의민족·쿠팡이츠 등에서 포장 상품으로 판매 가능.</span>
    </p>
  </div>

  <h3>❌ 안 되는 것</h3>
  <div class="standard-box" style="margin:12px 0 24px;padding:18px 22px;background:#fff8f8;border-left-color:#c0392b;">
    <p style="margin:0;font-size:14px;line-height:2.5;color:#2a3a5a;">
      <strong>· 다른 식당·카페에 납품</strong><br>
      <span style="color:#555;padding-left:12px;">프랜차이즈 가맹점, 급식업체, 인근 식당 등 다른 영업자에게 납품 불가.</span><br>
      <strong>· 마트·편의점 등 유통</strong><br>
      <span style="color:#555;padding-left:12px;">대형마트, 슈퍼, 편의점 등에 제품을 입점시켜 유통하는 것 불가.</span><br>
      <strong>· 도매상·식자재업체 납품</strong><br>
      <span style="color:#555;padding-left:12px;">식자재 도매업체나 유통 대행사를 통한 B2B 유통 불가.</span>
    </p>
  </div>

  <div class="standard-box" style="margin:0 0 48px;">
    <p style="margin:0;line-height:2.1;">
      📌 <strong>납품·유통이 목적이라면 식품제조가공업 등록이 필요합니다.</strong><br><br>
      즉석판매제조가공업은 어디까지나 <strong>내가 만들어서 개인 소비자에게 직접 파는 것</strong>이 전제입니다.<br>
      다른 업체에 납품하거나 유통망을 통해 파는 순간, 식품제조가공업 등록 대상이 됩니다.
    </p>
  </div>


  <h2>4. 온라인으로 팔 때 반드시 챙겨야 할 것</h2>

  <p style="margin-top:20px;">
    즉석판매제조가공업 신고를 마쳤다고 해서 바로 온라인 판매를 시작할 수 있는 건 아닙니다.
  </p>
  <p style="margin-top:14px;margin-bottom:22px;">
    온라인 판매를 시작하려면 영업 신고 외에 아래 사항을 추가로 갖춰야 합니다.
  </p>

  <div class="standard-box" style="margin:0 0 20px;padding:18px 22px;">
    <p style="margin:0;font-size:14px;line-height:2.5;color:#2a3a5a;">
      <strong>① 식품 표시 기준 준수</strong><br>
      <span style="color:#555;padding-left:12px;">제품 포장에 제품명, 식품유형, 원재료명, 소비기한, 보관방법, 영업소 명칭·소재지 등을 표시해야 합니다.</span><br>
      <strong>② 통신판매업 신고</strong><br>
      <span style="color:#555;padding-left:12px;">온라인으로 판매하려면 관할 지자체에 통신판매업 신고를 별도로 해야 합니다. (자사몰, SNS 판매 모두 해당)</span><br>
      <strong>③ 위생적인 포장·배송 관리</strong><br>
      <span style="color:#555;padding-left:12px;">냉장·냉동 제품은 보관 운송 기준에 적합한 포장을 갖춰야 합니다.</span>
    </p>
  </div>

  <p style="margin-bottom:40px;">
    처음 온라인 판매를 시작하시는 분들이 가장 많이 놓치는 부분이 <strong>식품 표시</strong>입니다. 즉석판매제조가공업 신고와 함께 꼭 확인하시기 바랍니다.
  </p>


  <h2>5. 실제 사례 – 인천 한식당 온라인 판매 문의 사례</h2>

  <div class="case-box-gold standard-box" style="margin:22px 0 30px;background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">📌 사례 개요</h3>
    <p style="margin:0;line-height:2.1;font-size:14px;color:#4a3a00;">
      상황 : 인천 한식당 운영 중, 직접 만든 반찬을 온라인으로 판매하고 싶었음<br>
      기존 허가 : 일반음식점 영업 신고증 보유<br>
      고민 : 기존 음식점 영업으로 온라인 판매가 가능한지 몰랐음<br>
      결과 : 즉석판매제조가공업 추가 신고 + 통신판매업 신고 완료 후 온라인 판매 시작
    </p>
  </div>

  <p>
    인천에서 한식당을 운영하시는 대표님이 상담을 요청해 오셨습니다.
  </p>
  <p style="margin-top:14px;">
    단골손님들이 "이 반찬 집에서도 먹고 싶다", "소스 따로 살 수 있냐"는 말을 자주 해서 온라인 판매를 고민하게 되셨다고 했습니다.
  </p>
  <p style="margin-top:14px;">
    기존 음식점 허가로 그냥 팔면 되는 거 아니냐고 물어보셨는데, 저희가 상황을 확인해 드렸습니다.
  </p>

  <div class="case-box-gold standard-box" style="margin:24px 0;background:#fffbf0;border:1px solid #c8a951;padding:20px 22px;">
    <h3 style="color:#8a6400;border-left-color:#c8a951;margin-top:0;margin-bottom:12px;">💬 상담 당시 실제로 드린 말씀</h3>
    <p style="margin:0;font-size:14px;line-height:2.2;color:#5a4200;font-style:italic;">
      "음식점 영업은 매장에서 식사를 제공하는 업종입니다.<br>
      매장 내 진열 판매나 온라인 판매는 별개의 영업 행위이기 때문에,<br>
      즉석판매제조가공업을 추가로 신고하셔야 합니다.<br><br>
      기존 음식점 영업은 그대로 두고 즉석판매제조가공업을 추가 신고하는 방식이라 어렵지 않습니다.<br>
      온라인 판매를 위한 통신판매업 신고도 함께 진행하시면<br>
      바로 스마트스토어나 SNS에서 판매를 시작하실 수 있습니다."
    </p>
  </div>

  <p>이후 즉석판매제조가공업 영업 신고를 진행했습니다.</p>
  <p style="margin-top:14px;">
    신고 완료 후 스마트스토어를 개설하고, 현재는 매장 영업과 온라인 판매를 병행하고 계십니다. 매장에서 팔던 반찬이 온라인에서도 꾸준히 판매되고 있다고 하셨습니다.
  </p>

  <div class="result-box" style="background:#f0f4ff;border-left:4px solid #1a2e5a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0 48px;line-height:2.1;">
    <strong>✅ 진행 결과</strong><br>
    기존 영업 : 일반음식점 (유지)<br>
    추가 신고 : 즉석판매제조가공업 영업 신고 완료<br>
    부가 신고 : 통신판매업 신고 완료<br>
    판매 채널 : 매장 판매 + 스마트스토어 온라인 판매 병행
  </div>


  <h2>🙋 자주 묻는 질문 (FAQ)</h2>

  <div class="faq-box" style="margin-top:22px;margin-bottom:48px;">

    <div class="faq-item">
      <p class="faq-q">배달의민족·쿠팡이츠에서 반찬 메뉴를 팔고 싶은데, 음식점으로는 안 되나요?</p>
      <p class="faq-a" style="line-height:2.0;">
        배달앱에서 '식사 메뉴'로 파는 건 음식점 영업으로 가능합니다.<br>
        하지만 반찬·김치·소스류를 <strong>미리 포장한 상품</strong>으로 별도 판매하는 경우에는 즉석판매제조가공업 신고가 필요합니다.<br>
        어떤 형태로 파느냐에 따라 달라지므로, 판매 방식을 먼저 확인하시는 게 좋습니다.
      </p>
    </div>

    <div class="faq-item">
      <p class="faq-q">나중에 마트나 다른 식당에도 납품하고 싶어지면요?</p>
      <p class="faq-a" style="line-height:2.0;">
        즉석판매제조가공업만으로는 납품이 불가능합니다.<br>
        다른 업체에 납품하려면 <strong>식품제조가공업 등록</strong>이 별도로 필요합니다.<br>
        처음부터 납품까지 계획하고 계신다면, 즉석판매제조가공업보다 식품제조가공업으로 준비하시는 것이 더 효율적입니다.
      </p>
    </div>

    <div class="faq-item" style="margin-bottom:0;">
      <p class="faq-q">즉석판매제조가공업 신고 후 바로 온라인 판매를 시작할 수 있나요?</p>
      <p class="faq-a" style="line-height:2.0;">
        즉석판매제조가공업 신고 외에 <strong>통신판매업 신고</strong>를 함께 하셔야 합니다.<br>
        또한 제품 포장에 식품 표시 사항(원재료, 소비기한, 영업소 정보 등)을 갖춰야 판매가 가능합니다.<br>
        두 가지 신고와 표시 기준까지 함께 준비하시면 바로 온라인 판매를 시작하실 수 있습니다.
      </p>
    </div>

  </div>

  <div class="cta-box" style="padding:34px 22px;">
    <p class="cta-title">🏪 즉석판매제조가공업 신고 · 온라인 판매 인허가, 처음부터 함께합니다</p>
    <p>식품·축산물 가공업 인허가와 HACCP인증 팀 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>

</article>
    `
  },

  // ──────────────────────────────────────────────
  //  POST 2  |  식육가공업 정의 및 식육포장처리업 비교 (인천 염지 닭 사례)
  // ──────────────────────────────────────────────


  // ──────────────────────────────────────────────
  //  POST 1  |  식품제조가공업 정의 및 즉석판매제조업 비교 (성남시 소스 사례)
  // ──────────────────────────────────────────────
  {
    id: 1,
    category: 1,
    title: "식품제조가공업의 법적 정의와 유통의 본질, 성남 소스 가공 사례로 쉽게 이해하기",
    summary: "식품위생법 시행령에 따른 식품제조가공업의 정확한 정의와 핵심 특징을 알아봅니다. 성남 소스 제조 사례를 통해 즉석판매제조가공업과의 유통 범위(B2B, B2C) 차이점을 명확히 정리해 드립니다.",
    date: "2026-06-30",
    tags: ["식품제조가공업", "식품위생법", "영업등록", "즉석판매제조가공업", "지엘행정사사무소"],
    thumbnail: "",
    // 이 글에는 이미지 슬롯 2개가 있습니다. (본문의 slot-img-wrap 참고)
    // "이미지 관리" 패널에서 slot-img-wrap과 매칭되는 이름으로 등록해두면
    // 관리자 패널에 라벨/설명이 표시됩니다.
    imageSlots: [
      { key: "post1-compare", label: "업종 비교 이미지", desc: "식품제조가공업 vs 즉석판매제조가공업 B2B/B2C 비교" },
      { key: "post1-cert", label: "영업등록증 사진", desc: "성남 사례 발급 완료된 식품제조가공업 영업등록증" }
    ],
    body: `
<article class="post-body">

  <section class="intro-box" style="margin-bottom:35px;padding:20px 22px;">
    <p style="margin-bottom:14px;">
      "식품(소스 등)을 만들어 주변 식당들과 마트에 납품하려고 하는데, 지금 가지고 있는 일반음식점이나 즉석판매제조업 허가증으로 바로 유통해도 될까요?"
    </p>
    <p style="margin-bottom:0;">
      결론부터 아주 명확하게 말씀드리면, <strong>단 1팩이라도 그렇게 유통하시면 식품위생법 위반입니다.</strong>
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      내가 만든 식품을 마트, 식당, 도매업자 등 '판매를 목적으로 하는 다른 영업자'에게 유통하는 행위는 오직 식품위생법상 <strong>'식품제조가공업 영업등록'</strong>을 마친 시설에서만 가능하기 때문입니다.
    </p>
  </section>

  <p style="margin-bottom:28px;">
    안녕하세요, 식품·축산물 가공업 인허가와 HACCP인증 전문 팀입니다.
  </p>
  <p style="margin-bottom:36px;">
    식품 사업의 규모가 커져 본격적인 유통망을 뚫거나 대량 납품을 계획하실 때, 대표님들이 가장 먼저 마주하는 기본 과제가 바로 정확한 <strong>'업종의 정의'</strong>를 정립하는 것입니다.
  </p>


  <h2>1. 식품위생법 시행령으로 보는 '식품제조·가공업'의 정확한 정의</h2>

  <p style="margin-bottom:22px;margin-top:18px;">
    <strong>「식품위생법 시행령」 제21조</strong>에 명시된 식품제조·가공업은 말 그대로 식품을 전문적으로 제조하고 가공하는 영업을 뜻합니다.
  </p>
  <p style="margin-bottom:32px;">
    단순히 조리 기구로 음식을 만드는 것이 아닌, 하나의 완전한 '상품'으로서 유통하는 업종입니다. 이 업종이 가진 법적 특징은 크게 두 가지로 요약됩니다.
  </p>

  <div class="standard-box" style="margin-bottom:36px;padding:22px 24px;">
    <h3 style="margin-bottom:10px;">① 유통 및 직접 판매 (B2B, B2C)</h3>
    <p style="margin-bottom:18px;">
      식품제조·가공업자가 적법한 제조 시설에서 가공하여 기준에 맞는 표시(원재료명, 소비기한 등)를 완료한 제품은 대형마트, 식당, 도매업소 등 <strong>다른 판매처로 제한 없이 유통하여 판매(B2B)</strong>할 수 있습니다.
    </p>
    <p style="margin-bottom:0;">
      이와 동시에, 별도의 유통 매장을 거치지 않고 해당 가공 공장(영업장)에서 최종 소비자에게 직접 제품을 판매(B2C)하는 행위 역시 법적으로 허용됩니다.
    </p>

    <h3 style="margin-top:24px;margin-bottom:10px;">② 추가 영업신고 면제 (행정적 편의성)</h3>
    <p style="margin-bottom:18px;">
      종종 "공장에서나 온라인에서 일반 소비자에게 소스를 직접 팔고 싶은데, 즉석판매제조가공업 신고를 추가로 해야 하나요?"라고 물으시는 분들이 계십니다.
    </p>
    <p style="margin-bottom:0;">
      식품위생법에 따라 식품제조·가공업 영업등록을 마친 자는, <strong>최종 소비자에게 직접 판매하더라도 별도의 즉석판매제조·가공업 신고를 하지 않아도 됩니다.</strong> 등록증 하나로 도매 유통과 소매 판매를 동시에 해결할 수 있는 셈이죠.
    </p>
  </div>


  <h2>2. 핵심 비교: 식품제조가공업 VS 즉석판매제조가공업 유통 범위</h2>

  <p style="margin-bottom:22px;margin-top:18px;">
    두 업종의 차이를 이해하는 본질은 바로 <strong>'판매 대상 및 형태 (납품 가능 여부)'</strong>에 있습니다. 내가 만든 식품을 누구에게 판매할 것이냐에 따라 가야 할 길이 완전히 달라집니다.
  </p>

  <div class="slot-img-wrap" data-img-slot="post1-compare"></div>

  <h3 style="margin-bottom:14px;">💡 판매 대상 및 형태에 따른 업종 분리 기준</h3>
  <ul style="margin-bottom:36px;padding-left:18px;">
    <li style="margin-bottom:14px;">
      <strong>식품제조·가공업:</strong> 식품을 다른 식당, 프랜차이즈 가맹점, 마트, 도매업소 등 <em>판매를 목적으로 하는 다른 영업자에게 납품 및 유통(B2B)</em>할 수 있으며, 온라인 등으로 최종 소비자에게 직접 판매(B2C)하는 것도 모두 허용됩니다.
    </li>
    <li style="margin-bottom:0;">
      <strong>즉석판매제조·가공업:</strong> 내 영업장 안에서 또는 온라인으로 '최종 소비자'에게 직접 판매하거나, 개인 고객의 주문을 받아 택배로 배달(B2C)하는 것만 가능합니다. <strong>다른 식당이나 마트에 납품(B2B)하는 행위는 원칙적으로 금지</strong>됩니다. 다만, 과자·빵·떡류에 한해서만 당일 제조·판매 조건으로 일부 유통이 예외 허용됩니다.
    </li>
  </ul>


  <h2>3. 실제 사례로 보는 업종 정의의 중요성</h2>

  <p style="margin-bottom:22px;margin-top:18px;">
    최근 경기도 성남시 중원구에서 특제 갈비 소스와 찌개 양념장을 생산하고자 했던 대표님의 사례입니다. 처음에는 시설 기준이 덜 까다로운 즉석판매제조가공업으로 편하게 시작하려고 하셨습니다.
  </p>
  <p style="margin-bottom:22px;">
    그러나 상담 과정에서 대표님의 핵심 비즈니스 모델이 <strong>'근교의 가맹점 식당들과 식자재 마트 납품(B2B)'</strong>에 있다는 것을 확인하고, 즉석판매제조가공업으로 진행할 경우 추후 유통 자체가 위법이 됨을 명확히 짚어드렸습니다.
  </p>
  <p style="margin-bottom:36px;">
    결국 초기부터 방향을 틀어 지식산업센터 내에 시설기준을 맞춘 <strong>식품제조가공업 영업등록</strong>으로 안전하게 진행하셨고, 현재는 아무런 법적 제약 없이 성남 공장에서 생산된 소스를 성공적으로 납품하고 계십니다.
  </p>

  <div class="slot-img-wrap" data-img-slot="post1-cert"></div>


  <h2>🙋 식품제조가공업 자주하는 질문 FAQ</h2>

  <div class="faq-box" style="margin-top:20px;margin-bottom:36px;">
    <div class="faq-item" style="margin-bottom:12px;">
      <p class="faq-q">소스를 만들어 식당에 납품하려는데, 무조건 '공장' 건물이어야 하나요?</p>
      <p class="faq-a" style="line-height:1.9;">반드시 흔히 생각하는 거대한 독채 공장일 필요는 없습니다. 건축물대장상 용도가 '제2종 근린생활시설(제조업소)'로 되어 있다면 일반 상가 건물에서도 시설 기준만 맞추면 얼마든지 영업등록이 가능합니다. 단, 위반건축물이 없어야 하므로 부동산 계약 전 확인이 필수적입니다.</p>
    </div>
    <div class="faq-item" style="margin-bottom:0;">
      <p class="faq-q">그럼, 다음 등록 절차는 어떻게 되나요?</p>
      <p class="faq-a" style="line-height:1.9;">건축물 용도 등이 적합하면 교차 오염을 방지하는 작업장 설치, 창고 설치, 영업 등록 신청에 필요한 서류를 준비하여 관할 지자체에 식품제조가공업 등록 신청을 하면 됩니다.</p>
    </div>
  </div>

  <h2>✅ 입지 검토부터 함께하세요</h2>

  <p style="margin-bottom:22px;margin-top:18px;">
    식품 인허가는 초기 업종 정의를 잘못 내리거나 입지 검토를 잘못 했다가 <em>큰 낭패를 보게</em> 될 수 있습니다.
  </p>
  <p style="margin-bottom:36px;">
    저희 식품·축산물 가공업 인허가와 HACCP인증 팀은 대표님의 소중한 시간과 자본금을 단 하루도 낭비하지 않도록 정확하고 신속하게 업무 대행을 합니다. 어려운 행정 처리는 전문가에게 맡기시고 사업에만 전념하세요.
  </p>

  <div class="cta-box" style="padding:34px 22px;">
    <p class="cta-title">🏢 식품제조가공업 영업등록 · 전국 제조소 입지 무료 사전 검토</p>
    <p>식품·축산물 가공업 인허가와 HACCP인증 팀 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>

</article>
    `
  }
];
