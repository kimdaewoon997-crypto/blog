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
    title: "식품제조가공업 등록을 위한 건축물 용도 규정과 입지 검토 필수 확인 사항",
    summary: "식품위생법 및 건축법에 따른 식품제조가공업 허가 가능 건축물 용도 기준을 상세히 분석합니다. 바닥면적 기준에 따른 제조업소 및 공장 분류, 하수도 원인자부담금과 위반건축물 확인 등 계약 전 필수 입지 검토 지침을 제공합니다.",
    date: "2026-07-12",
    tags: ["식품제조가공업", "건축물용도", "입지검토", "제2종근린생활시설", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "식품제조가공업 등록의 첫 단추는 합법적인 건축물 용도 확보와 철저한 공법상 제한 검토에서 시작됩니다. 용도가 맞지 않거나 위반사항이 있는 건축물은 시설 공사를 완료하더라도 행정 등록이 전면 불가능합니다."
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      지엘행정사사무소에서 식품위생법 및 관계 법령에 의거하여 계약 전 반드시 검토해야 하는 건축물 입지 기준의 핵심 팩트를 정리해 드립니다.
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 요약</strong><br><br>
      · <strong>면적 500㎡ 미만:</strong> 건축물대장상 용도가 '제2종 근린생활시설(제조업소)' 또는 '공장'이어야 함.<br>
      · <strong>면적 500㎡ 이상:</strong> 근린생활시설 용도로는 불가능하며, 오직 '공장' 용도만 등록 가능.<br>
      · <strong>행정 제약:</strong> 건축물대장상 '위반건축물' 표기가 있거나 무단 증축 등 불법 구조물이 존재하는 건물은 등록 불가.
    </p>
  </div>

  <h2>1. 건축법에 따른 식품제조가공업 건축물 용도 정의</h2>
  <p>
    식품제조가공업을 영위하고자 하는 사업장은 건축법 시행령 제3조의5에 따른 용도별 건축물의 종류 기준을 충족해야 합니다. 영업소로 사용하는 바닥면적의 합계에 따라 요구되는 법적 용도가 다릅니다.
  </p>
  <ul>
    <li><strong>제2종 근린생활시설(제조업소):</strong> 동일한 건축물 안에서 식품제조가공업의 용도로 쓰는 바닥면적의 합계가 <strong>500제곱미터(약 150평) 미만</strong>인 경우에 해당합니다.</li>
    <li><strong>공장 (Factory):</strong> 해당 용도로 사용하는 바닥면적의 합계가 <strong>500제곱미터 이상</strong>인 경우에는 근린생활시설 상가건물에 입점할 수 없으며, 건축물 용도가 반드시 '공장'이어야 합니다.</li>
    <li><strong>지식산업센터 입지 원칙:</strong> 지식산업센터(구 아파트형 공장)의 경우, 정당한 '제조형 호실'이어야 등록이 가능하며, 건축물대장상 용도가 '지원시설(업무시설 또는 근린생활시설)'로 분류된 호실은 대량 생산 목적의 식품제조가공업 등록이 제한될 수 있으므로 호실별 세부 용도를 전수 조사해야 합니다.</li>
  </ul>

  <h2>2. 부동산 계약 전 필수 공법상 입지 검토 절차</h2>
  <p>
    임대차 계약을 체결하기 전에 관할 지자체 조례 및 환경 법령에 따른 아래 3가지 행정적 규제를 반드시 사전 필터링해야 합니다.
  </p>
  
  <h3 style="margin-top:20px;">① 건축물대장 및 토지이용계획확인원 검증</h3>
  <p>
    해당 주소지의 토지이용계획을 조회하여 '국토의 계획 및 이용에 관한 법률'상 식품제조공장이 들어설 수 없는 용도지역(예: 전용주거지역, 보존녹지지역 등)인지 확인해야 합니다. 또한, 건축물대장에 무단 용도변경이나 불법 증축으로 인한 <strong>'노란색 위반건축물' 표기</strong>가 있는 경우, 해당 건물 전체의 위반사항이 해소되기 전까지는 신규 영업등록증 발급이 반려됩니다.
  </p>

  <h3 style="margin-top:20px;">② 하수도법에 따른 오수발생량 및 원인자부담금 검토</h3>
  <p>
    식품제조가공업은 하수도법 시행령 제24조에 의거하여 일반 소매점이나 사무실 대비 단위면적당 오수발생량이 매우 높게 책정됩니다. 건축물 용도를 '제조업소'로 변경하거나 업종을 변경할 때, 건물 전체의 하루 오수발생량 증가분이 10세제곱미터(10톤)를 초과하는 경우 <strong>하수도 원인자부담금</strong>이 원인 유발자(사업자)에게 청구되므로 지자체 조례에 따른 비용 부담 주체를 명확히 산정해야 합니다.
  </p>

  <h3 style="margin-top:20px;">③ 정화조 용량 및 인입 전력(승압) 확인</h3>
  <p>
    건물에 매립된 정화조의 용량이 식품제조업 기준 배출량을 수용할 수 있는지 확인해야 합니다. 용량이 부족할 경우 정화조 내부청소 주기를 단축(연 1회 ➔ 반기별 1회 등)하겠다는 건물주 동의서 서류를 구청 환경과에 제출해야 행정 승인이 가능합니다. 더불어, 동력 기계 가동을 위한 동력 전력(삼상 380V) 인허가 용량이 충분한지 한국전력공사(HEN) 공급 규정을 대조해야 합니다.
  </p>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">건축물대장상 용도가 일반 '사무실(업무시설)'이나 '제1종 근생(소매점)'이면 아예 불가능한가요?</p>
      <p class="faq-a">
        현재 상태로는 식품제조가공업 등록이 불가능합니다. 다만, 해당 건축물이 위치한 용도지역에서 제조업소가 허용되고 정화조 용량 및 하수도법상 기준을 충족한다면, 표시변경 또는 <strong>'건축물 용도변경 행정절차'</strong>를 거쳐 '제2종 근린생활시설(제조업소)'로 전환한 뒤 영업등록을 진행할 수 있습니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">🏢 식품제조가공업 영업등록 · 전국 제조소 입지 법률 사전 검토 전문</p>
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
    title: "식품제조가공업 시설 기준 지침, 교차 오염 방지를 위한 작업장 도면 설계 규칙",
    summary: "식품위생법 시행규칙 제36조 [별표 14]에 명시된 식품제조가공업소의 세부 시설 기준을 해부합니다. 청결구역과 일반구역 분리벽 설치 규정, 바닥 배수 트렌치 및 방충·방서 시설 기준을 안내합니다.",
    date: "2026-07-12",
    tags: ["시설기준", "작업장분리", "바닥트렌치", "교차오염방지", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "식품제조가공업소의 실무 핵심은 교차 오염을 원천적으로 차단할 수 있는 구조적 분리와 구획화에 있습니다. 일반 식당의 주방 인테리어 개념으로 임의 시공할 경우, 구청 위생과의 현장 실사 합격 기준을 통과할 수 없습니다."
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      지엘행정사사무소에서 식품위생법 시행규칙 기준에 부합하는 제조 시설 및 동선 획정의 법적 기준을 명확히 제시해 드립니다.
    </p>
  </section>

  <div class="standard-box">
    <p style="margin:0;line-height:2.0;">
      💡 <strong>핵심 시설 기준</strong><br><br>
      · <strong>작업장 분리:</strong> 식품의 특성에 따라 청결구역과 일반구역을 독립된 벽체로 완벽히 분리해야 함.<br>
      · <strong>바닥 마감:</strong> 내수성 재질로 시공하고, 배수가 원활하도록 구배(기울기) 공사 및 트렌치 설치 필수.<br>
      · <strong>공조·환기:</strong> 응축수나 곰팡이 발생을 막기 위해 가열실 상부에 충분한 배기(후드) 시설을 갖추어야 함.
    </p>
  </div>

  <h2>1. 청결구역과 일반구역의 공간 분리 및 동선 규칙</h2>
  <p>
    식품위생법 제36조에 의거한 작업장 분리의 대원칙은 원료의 입고, 전처리, 제조, 포장, 제품 출고 과정에서 <strong>역행이나 동선 교차로 인한 오염이 없도록 설계(One-way)</strong>하는 것입니다.
  </p>
  <ul>
    <li><strong>독립된 공간 분리:</strong> 원료를 세척하고 다듬는 '전처리실'과 식품을 가열·조리하는 '제조실', 그리고 최종 완제품을 밀봉하는 '내포장실'은 각각 천장까지 완전히 막힌 <strong>고정식 격벽(가벽)으로 분리</strong>하는 것이 원칙입니다. 천장이 뚫려 있거나 단순 커튼으로 차단 시 시설 기준 위반으로 반려됩니다.</li>
    <li><strong>위생전실 및 탈의실 배치:</strong> 작업자가 외부에서 제조실(청결구역)로 진입할 때 유기적으로 연결된 탈의실을 거쳐 손 세척, 소독 및 위생모·위생복 착용을 강제할 수 있는 구조적 동선(위생전실)이 도면상 확보되어야 합니다.</li>
  </ul>

  <h2>2. 바닥, 벽면, 천장 및 배수 시설(트렌치) 시공 기준</h2>
  <p>
    제조설비 가동 시 발생하는 물과 부산물의 처리를 위해 바닥과 하수 구조는 고도의 위생 규격을 준수해야 합니다.
  </p>
  <ul>
    <li><strong>R자형 라운드 마감 및 방수:</strong> 작업장 바닥은 물 청소 및 살균 소독이 용이하도록 방수 에폭시, 내산성 라이닝 등으로 시공되어야 하며, 벽면과 바닥이 만나는 직각 모서리 부위는 먼지와 오물이 고이지 않도록 둥글게 처리(R자 앵글 마감)해야 합니다.</li>
    <li><strong>스테인리스 트렌치 매립:</strong> 배수구는 내부 부식이 없고 청소가 용이한 스테인리스 스틸 자재의 트렌치를 설치해야 합니다. 바닥면 전체가 트렌치를 향해 비스듬히 기울어지도록 구배(역구배 방지)를 완벽히 잡아야 물 고임으로 인한 세균 번식을 억제할 수 있습니다.</li>
    <li><strong>결로 및 곰팡이 방지:</strong> 천장 재질은 수증기가 스며들지 않는 불침투성 자재를 사용해야 하며, 열 가공 공정이 수반되는 제조실 상부에는 강제 배기 시스템(후드 및 환풍기)을 시공하여 천장에 결로(물방울)가 맺혀 식품으로 떨어지는 것을 방지해야 합니다.</li>
  </ul>

  <h2>3. 방충·방서 및 용수 관리 시설 규칙</h2>
  <p>
    외부 오염원 및 매개충의 진입을 막기 위한 방어망 구축이 의무화되어 있습니다.
  </p>
  <ul>
    <li><strong>배수구 차단막 조치:</strong> 바닥 트렌치 최종 배출구와 외부 연결 하수관 사이에는 쥐나 해충의 역유입을 방지할 수 있는 잔그물망 형태의 트랩 또는 걸음망을 상시 장착해야 합니다.</li>
    <li><strong>밀폐형 창호 및 포충등:</strong> 외기가 통하는 모든 창문에는 촘촘한 방충망을 설치하고, 작업장 출입구 내부에는 비래해충을 포집할 수 있는 포충등을 벽면에 고정 배치해야 합니다. 환풍기 출구에는 배기 작동 시에만 열리는 자동 셔터식 댐퍼가 장착되어야 합니다.</li>
  </ul>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">식품 공장 내부에 반드시 화장실을 설치해야 하나요?</p>
      <p class="faq-a">
        작업장에 영향을 미치지 않는 건물 내부의 화장실을 이용할 수 있습니다. 다만, 화장실 문이 식품을 제조하는 '작업장 내부'를 향해 직접 열리는 구조는 오염 우려로 인해 법적으로 엄격히 금지됩니다. 반드시 작업장과 격리된 외부에 위치하거나, 전실을 한 번 더 거치는 구조여야 합니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 식품위생법 시설 규격에 맞춘 완벽한 도면 설계 및 레이아웃 검수 지원</p>
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
    title: "식품제조가공업 영업등록 필수 서류 명세 및 행정 절차 총정리",
    summary: "지자체 관할 부서 접수를 위한 신규 영업등록 신청 서류와 행정 처리 단계를 해부합니다. 위생교육 이수증, 건강진단결과서 발급부터 제조시설배치도 작성, 품목제조보고 연동 단계까지의 표준 실무 프로세스를 설명합니다.",
    date: "2026-07-12",
    tags: ["영업등록서류", "행정절차", "위생교육", "품목제조보고", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "식품제조가공업 등록의 종착지는 흠결 없는 서류 준비와 법적 절차 이행에 있습니다. 관할 지자체 청문 접수 시 구비 서류 양식이나 도면이 미비할 경우 현장 실사 자체가 무기한 지연됩니다."
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      지엘행정사사무소에서 식품위생법 시행규칙 제42조에 따른 신규 영업등록 행정 서류 및 처리 절차의 정석을 정리해 드립니다.
    </p>
  </section>

  <h2>1. 신규 영업등록 신청 시 구청 위생과 필수 제출 서류 목록</h2>
  <p>
    식품제조가공업 면허 발급을 위해 관할 자치단체(시·군·구청 위생과)에 접수해야 하는 법정 구비 서류 명세는 다음과 같습니다.
  </p>
  <ul>
    <li><strong>식품영업등록 신청서:</strong> 관할 관청 비치 표준 서식 작성</li>
    <li><strong>제조시설 배치도 및 평면도:</strong> 작업장 내부의 칸막이 구조, 기계·설비의 위치, 각 방의 명칭(제조실, 포장실 등)을 명확히 투영한 시설 도면 (행정사 서식 연동)</li>
    <li><strong>임대차계약서 복사본:</strong> 건축물대장상의 주소, 호실과 명확히 일치해야 함 (자가 건물인 경우 등기부등본 확인)</li>
    <li><strong>신규 식품위생교육 수료증:</strong> 한국식품산업협회에서 주관하는 '식품제조가공업 신규 영업자 과정' 오프라인 또는 온라인 교육 이수증 (8시간 과정)</li>
    <li><strong>건강진단결과서(구 보건증):</strong> 식품위생법 제40조에 의거, 영업자 본인 및 현장 종사자 전원의 유효한 보건증 (발급일 기준 1년 이내 양식)</li>
    <li><strong>법인 제출 시 추가 서류:</strong> 법인등기부등본, 법인인감증명서, 위임장 및 사용인감계 (대리인 접수 시 필요)</li>
    <li><strong>지하수 수질검사 성적서:</strong> 상수도가 아닌 지하수를 식품의 제조·용수로 사용하는 경우에 한하여 공인기관의 음용수 적합 성적서 첨부 필수</li>
  </ul>

  <h2>2. 입지 검토부터 등록증 발급까지의 5단계 행정 표준 절차</h2>
  <p>
    식품제조가공업 영업등록은 서류 접수 전 시설 완비가 선행되어야 하는 정식 대관 업무입니다. 전체 동선 흐름은 아래 단계로 집행됩니다.
  </p>
  <div class="step-box" style="background:#f0f4ff;border-left:4px solid #16a34a;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#2a3a5a;margin:24px 0;line-height:2.1;">
    <strong>[식품 공장 등록 표준 행정 프로세스]</strong><br>
    <strong>1단계: 사전 행정 원칙 검토</strong> - 건축물대장 용도 확인 및 위생교육·보건증 선제적 확보<br>
    <strong>2단계: 제조 시설 공사 및 도면 매칭</strong> - 법적 시설 기준에 의거한 인테리어 시공 및 배치도 작성<br>
    <strong>3단계: 관할 관청 서류 접수</strong> - 지자체 위생과에 구비 서류 일체 제출 및 수수료 납부<br>
    <strong>4단계: 주무관 현장 실사 검증</strong> - 담당 공무원이 제조 현장에 출동하여 시설 기준 부합 여부 육안 검측<br>
    <strong>5단계: 영업등록증 발급 및 면허세 납부</strong> - 실사 합격 시 영업등록증 발급 완료 및 등록세정 완료
  </div>

  <h2>3. 등록 완료 후 최종 제품 유통을 위한 후속 필수 행정</h2>
  <p>
    영업등록증이 발급되었다고 해서 즉시 제품을 외부로 반출하거나 유통할 수 없습니다. 식품위생법에 의거한 최종 관문이 존재합니다.
  </p>
  <p>
    영업등록 완료 후 **제품 생산 개시 전 또는 생산 개시 후 20일 이내에 반드시 '품목제조보고'를 완료**해야 합니다. 제품의 구체적인 명칭, 식품유형, 원료 성분 및 배합 비율(%), 소비기한 설정 사유서를 식품안전나라 시스템을 통해 제출하여 최종 승인을 받아야 비로소 합법적인 유통망 판매 및 세금계산서 발행이 가능해집니다.
  </p>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">위생교육 수료증은 반드시 대표자 명의여야 하나요?</p>
      <p class="faq-a">
        원칙적으로 영업등록증상에 등재되는 대표자가 이수해야 합니다. 다만, 법인 사업자이거나 대표자가 직접 위생 관리를 할 수 없는 부득이한 사유가 인정되는 경우, 식품위생법 규정에 따라 현장 지정을 통해 '식품위생관리인'을 대리인으로 임명하여 해당 관리인의 위생교육 수료증으로 대체 접수할 수 있습니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 까다로운 서류 작성부터 구청 위생과 현장 실사 대응까지 완벽 대행</p>
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
    title: "식품제조가공업 허가 시 사업자가 절대 놓쳐서는 안 될 행정적 주의사항 및 불이익 예방 가이드",
    summary: "식품제조가공업 등록 과정 및 운영 중 발생할 수 있는 중대한 법적 리스크와 주의사항을 고찰합니다. 미등록 유통 행위 처벌 규정, 자가품질검사 의무 위반 시 처분 기준 등 필수 행정 준수사항을 안내합니다.",
    date: "2026-07-12",
    tags: ["주의사항", "행정처분", "자가품질검사", "법적리스크", "지엘행정사사무소"],
    thumbnail: "",
    body: `
${RESPONSIVE_STYLE}
<article class="post-body">
  <section class="intro-box">
    <p style="margin:0;font-size:15px;font-style:italic;color:#3a4a6a;">
      "식품 인허가는 일시적인 등록증 취득보다 사후 법적 규제 준수가 더욱 중요합니다. 위생 법령을 오인하거나 필수 의무 조치를 누락할 경우 막대한 행정처분과 형사 처벌의 대상이 될 수 있습니다."
    </p>
    <p style="margin-top:14px;margin-bottom:0;">
      지엘행정사사무소에서 식품제조가공업 영업자가 안정적인 사업 영위를 위해 반드시 방어해야 하는 핵심 법적 주의사항을 공지합니다.
    </p>
  </section>

  <h2>1. 무등록 식품 제조 및 유통 행위에 대한 형사 처벌 수위</h2>
  <p>
    식품위생법 제37조에 따른 영업등록을 하지 아니하고 식품을 제조·가공하여 판매하거나 유통한 자는 <strong>식품위생법 제94조에 의거하여 10년 이하의 징역 또는 1억원 이하의 벌금</strong>에 처해질 수 있으며, 이 경우 처벌과 별개로 해당 불법 제품의 생산 매출액에 상당하는 금액이 전액 몰수·추징될 수 있는 중대한 형사 리스크입니다. 일반음식점이나 즉석판매제조가공업 면허만으로 타사 유통망에 납품하는 행위 역시 무등록 식품제조가공 행위와 동일하게 취급되므로 엄격히 제한되어야 합니다.
  </p>

  <h2>2. 자가품질검사 의무 이행 시 주의사항 및 과태료 규정</h2>
  <p>
    식품제조가공업자는 식품위생법 제31조에 따라 생산하는 제품의 유형별 고시 주기에 맞춰 공인된 식품위생검사기관에 <strong>자가품질검사</strong>를 의뢰해야 할 법적 의무가 있습니다.
  </p>
  <ul>
    <li><strong>검사 주기 위반 시 처분:</strong> 소스류, 복합조미식품 등은 3개월에 1회 이상 검사를 실시해야 하며, 이를 태만히 하여 주기를 단 하루라도 누락할 경우 <strong>1차 위반 시 품목제조정지 및 영업정지 처분</strong>이 가해질 수 있습니다. 특히 즉석조리식품이나 밀키트 유형은 매달 1회 의무 검사이므로 관리 대장을 철저히 수불해야 합니다.</li>
    <li><strong>부적합 판정 시 즉시 대응:</strong> 자가품질검사 결과 세균수나 식중독균 등 대장균 규격 기준 부적합 판정이 나오면, 식약처에 자동 통보됨과 동시에 해당 날짜에 생산된 제품 배치 물량을 <strong>즉시 유통 차단하고 자진 회수 및 폐기 조치</strong>해야 합니다. 이를 은폐하거나 유통할 경우 영업허가 취소 사유가 됩니다.</li>
  </ul>

  <h2>3. 원료수불관계서류 및 생산일지 작성·보관 의무</h2>
  <p>
    식품제조가공업소는 구청 위생과나 식약처의 정기·수시 위생 점검 시 서류 검증의 의무를 집행해야 합니다.
  </p>
  <p>
    식품위생법 제42조에 의거하여, 공장에 입고되는 모든 원료의 출처와 사용량을 기록하는 <strong>'원료수불부'</strong>, 매일 생산하는 품목과 수량을 기록하는 <strong>'작업일지(생산일지)'</strong>, 그리고 어떤 업체로 제품이 출고되었는지 증빙하는 <strong>'제품거래기록서'</strong>를 반드시 수기로 작성하거나 전자적 시스템으로 기록하고, <strong>최종 작성일로부터 3년간 의무 보관</strong>해야 합니다. 점검 시 해당 서류가 누락되어 있거나 허위 작성된 팩트가 적발되면 영업정지 행정처분이 부과됩니다.
  </p>

  <h2>🙋 자주 묻는 질문 (FAQ)</h2>
  <div class="faq-box">
    <div class="faq-item">
      <p class="faq-q">공장 내부 인테리어 구조나 제조 기계를 변경할 때도 매번 신고해야 하나요?</p>
      <p class="faq-a">
        식품위생법 시행령 제26조에 따라, 영업등록 사항 중 <strong>'작업장의 변경면적이 일정 규모 이상이거나 주요 제조 공정 라인(예: 살균·멸균기 추가 등)이 변경'</strong>되는 경우, 사전에 관할 지자체에 '영업등록 변경신고'를 득한 후 시공해야 합니다. 사전 신고 없이 시설을 임의 확장·변경 시 시설기준 위반으로 행정 제재를 받게 됩니다.
      </p>
    </div>
  </div>

  <div class="cta-box">
    <p class="cta-title">📣 식품위생법 위반 행정처분 사전 방어 및 영업자 준수사항 법률 자문</p>
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
