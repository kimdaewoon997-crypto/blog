// ============================================================
//  posts.js — 지엘행정사사무소 블로그 데이터 파일
//  새 글 추가 방법: POSTS 배열 맨 앞에 객체 하나를 추가하세요.
//  id는 기존 최댓값 + 1로 부여하고, date는 YYYY-MM-DD 형식.
// ============================================================

const CATEGORIES = [
  { id: 0, label: "전체 글" },
  { id: 1, label: "식품제조가공업 등록" },
  { id: 2, label: "축산물가공업 허가" },
  { id: 3, label: "기타 영업 허가·등록·신고" },
  { id: 4, label: "해썹 (HACCP) 인증" },
  { id: 5, label: "소개글" }
];

const POSTS = [
  // ──────────────────────────────────────────────
  //  POST 1  |  식품제조가공업 정의 및 즉석판매제조업 비교 (성남시 소스 사례)
  // ──────────────────────────────────────────────
  {
    id: 1,
    category: 1,                           // 1번: 식품제조가공업 등록 카테고리 매칭
    title: "식품제조가공업의 법적 정의와 유통의 본질, 성남 소스 가공 사례로 쉽게 이해하기",
    summary: "식품위생법 시행령에 따른 식품제조가공업의 정확한 정의와 핵심 특징을 알아봅니다. 성남 소스 제조 사례를 통해 즉석판매제조가공업과의 유통 범위(B2B, B2C) 차이점을 명확히 정리해 드립니다.",
    date: "2026-06-30",
    tags: ["식품제조가공업", "식품위생법", "영업등록", "즉석판매제조가공업", "지엘행정사사무소"],
    thumbnail: "", 
    body: `
<article class="post-body" style="line-height: 2.0; letter-spacing: -0.02em;">

  <!-- ① 도입부: 검색의도 저격 및 결론 제시 -->
  <section class="intro-box" style="margin-bottom: 35px; padding: 22px;">
    <p style="margin-bottom: 15px;">
      "식품(소스 등)을 만들어 주변 식당들과 마트에 납품하려고 하는데, 지금 가지고 있는 일반음식점이나 즉석판매제조업 허가증으로 바로 유통해도 될까요?"
    </p>
    <p style="margin-bottom: 0;">
      결론부터 아주 명확하게 말씀드리면, <strong>단 1팩이라도 그렇게 유통하시면 식품위생법 위반입니다.</strong>
    </p>
    <p style="margin-top: 15px; margin-bottom: 0;">
      내가 만든 식품을 마트, 식당, 도매업자 등 '판매를 목적으로 하는 다른 영업자'에게 유통하는 행위는 오직 식품위생법상 <strong>'식품제조가공업 영업등록'</strong>을 마친 시설에서만 가능하기 때문입니다.
    </p>
  </section>

  <p style="margin-bottom: 30px;">
    안녕하세요, 식품·축산물 가공업 인허가와 HACCP인증 전문 팀입니다. 
  </p>
  
  <p style="margin-bottom: 40px;">
    식품 사업의 규모가 커져 본격적인 유통망을 뚫거나 대량 납품을 계획하실 때, 대표님들이 가장 먼저 마주하는 기본 과제가 바로 정확한 <strong>'업종의 정의'</strong>를 정립하는 것입니다.
  </p>

  <!-- ② 대주제 - 소주제 - 설명 구조 -->
  <h2>1. 식품위생법 시행령으로 보는 '식품제조·가공업'의 정확한 정의</h2>
  
  <p style="margin-bottom: 25px; margin-top: 20px;">
    <strong>「식품위생법 시행령」 제21조</strong>에 명시된 식품제조·가공업은 말 그대로 식품을 전문적으로 제조하고 가공하는 영업을 뜻합니다.
  </p>
  
  <p style="margin-bottom: 35px;">
    단순히 조리 기구로 음식을 만드는 것이 아닌, 하나의 완전한 '상품'으로서 유통하는 업종입니다. 이 업종이 가진 법적 특징은 크게 두 가지로 요약됩니다.
  </p>

  <div class="standard-box" style="margin-bottom: 40px; padding: 25px;">
    <h3 style="margin-bottom: 12px;">① 유통 및 직접 판매 (B2B, B2C)</h3>
    <p style="margin-bottom: 20px;">
      식품제조·가공업자가 적법한 제조 시설에서 가공하여 기준에 맞는 표시(원재료명, 소비기한 등)를 완료한 제품은 대형마트, 식당, 도매업소 등 <strong>다른 판매처로 제한 없이 유통하여 판매(B2B)</strong>할 수 있습니다.
    </p>
    <p style="margin-bottom: 25px;">
      이와 동시에, 별도의 유통 매장을 거치지 않고 해당 가공 공장(영업장)에서 최종 소비자에게 직접 제품을 판매(B2C)하는 행위 역시 법적으로 허용됩니다.
    </p><br>

    <h3 style="margin-bottom: 12px;">② 추가 영업신고 면제 (행정적 편의성)</h3>
    <p style="margin-bottom: 20px;">
      종종 "공장에서나 온라인에서 일반 소비자에게 소스를 직접 팔고 싶은데, 즉석판매제조가공업 신고를 추가로 해야 하나요?"라고 물으시는 분들이 계십니다.
    </p>
    <p style="margin-bottom: 0;">
      식품위생법에 따라 식품제조·가공업 영업등록을 마친 자는, <strong>최종 소비자에게 직접 판매하더라도 별도의 즉석판매제조·가공업 신고를 하지 않아도 됩니다.</strong> 등록증 하나로 도매 유통과 소매 판매를 동시에 해결할 수 있는 셈이죠.
    </p>
  </div>

  <!-- ③ 본문 중간 즉석판매제조가공업과의 유통 범위 비교 -->
  <h2>2. 핵심 비교: 식품제조가공업 VS 즉석판매제조가공업 유통 범위</h2>
  
  <p style="margin-bottom: 35px; margin-top: 20px;">
    두 업종의 차이를 이해하는 본질은 바로 <strong>'판매 대상 및 형태 (납품 가능 여부)'</strong>에 있습니다. 내가 만든 식품을 누구에게 판매할 것이냐에 따라 가야 할 길이 완전히 달라집니다.
  </p>

  <!-- 🎯 이미지 1번 전후 여백 강화 (마진 45px 적용) -->
  <div style="margin: 45px 0; text-align: center;">
    <img src="images/intro-compare.jpg" alt="식품제조가공업 즉석판매제조가공업 B2B B2C 유통 범위 비교 차이점" style="width:100%; max-width:720px; border-radius:8px; display:block; margin:0 auto; box-shadow: 0 4px 15px rgba(0,0,0,.06);">
    <p style="font-size: 13px; color: var(--muted); text-align: center; margin-top: 12px;">▲ 판매 형태에 따른 두 업종의 법적 비교</p>
  </div>

  <h3 style="margin-bottom: 15px;">💡 판매 대상 및 형태에 따른 업종 분리 기준</h3>
  <ul style="margin-bottom: 40px; padding-left: 20px;">
    <li style="margin-bottom: 12px;"><strong>식품제조·가공업:</strong> 식품을 다른 식당, 프랜차이즈 가맹점, 마트, 도매업소 등 <em>판매를 목적으로 하는 다른 영업자에게 납품 및 유통(B2B)</em>할 수 있으며, 온라인 등으로 최종 소비자에게 직접 판매(B2C)하는 것도 모두 허용됩니다.</li>
    <li style="margin-bottom: 0;"><strong>즉석판매제조·가공업:</strong> 내 영업장 안에서 또는 온라인으로 '최종 소비자'에게 직접 판매하거나, 개인 고객의 주문을 받아 택배로 배달(B2C)하는 것만 가능합니다. <strong>다른 식당이나 마트에 납품(B2B)하는 행위는 원칙적으로 금지</strong>됩니다. 다만, 과자·빵·떡류에 한해서만 당일 제조·판매 조건으로 일부 유통이 예외 허용됩니다.</li>
  </ul>

  <h2>3. 실제 사례로 보는 업종 정의의 중요성</h2>
  
  <p style="margin-bottom: 25px; margin-top: 20px;">
    최근 경기도 성남시 중원구에서 특제 갈비 소스와 찌개 양념장을 생산하고자 했던 대표님의 사례입니다. 처음에는 시설 기준이 덜 까다로운 즉석판매제조가공업으로 편하게 시작하려고 하셨습니다.
  </p>
  
  <p style="margin-bottom: 25px;">
    그러나 상담 과정에서 대표님의 핵심 비즈니스 모델이 <strong>'근교의 가맹점 식당들과 식자재 마트 납품(B2B)'</strong>에 있다는 것을 확인하고, 즉석판매제조가공업으로 진행할 경우 추후 유통 자체가 위법이 됨을 명확히 짚어드렸습니다.
  </p>
  
  <p style="margin-bottom: 45px;">
    결국 초기부터 방향을 틀어 지식산업센터 내에 시설기준을 맞춘 <strong>식품제조가공업 영업등록</strong>으로 안전하게 진행하셨고, 현재는 아무런 법적 제약 없이 성남 공장에서 생산된 소스를 성공적으로 납품하고 계십니다.
  </p>

  <!-- 🎯 요청하신 영업등록증 이미지 전후 여백 분리 및 크기 대폭 축소 (max-width: 400px 설정) -->
  <div style="margin: 50px 0; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
    <img src="images/certificate.jpg.jpg" alt="식품제조가공업 영업등록증 대행 성공 사례" style="width:100%; max-width:400px; border-radius:6px; display:block; margin:0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
    <p style="font-size: 13px; color: var(--navy); font-weight: 700; text-align: center; margin-top: 14px; margin-bottom: 4px;">▲ 대행을 통해 발급 완료된 정식 식품제조가공업 영업등록증</p>
    <p style="font-size: 11px; color: var(--muted); text-align: center; margin: 0;">(실제 성남시 중원구 식품제조가공업 현장 실사 후 교부된 영업등록증 입니다.)</p>
  </div>

  <h2>🙋 식품제조가공업 자주하는 질문 FAQ</h2>
  
  <div class="faq-box" style="margin-top: 20px; margin-bottom: 40px;">
    <div class="faq-item" style="margin-bottom: 15px;">
      <p class="faq-q" style="padding: 14px 18px;">소스를 만들어 식당에 납품하려는데, 무조건 '공장' 건물이어야 하나요?</p>
      <p class="faq-a" style="padding: 14px 18px; line-height: 1.9;">반드시 흔히 생각하는 거대한 독채 공장일 필요는 없습니다. 건축물대장상 용도가 '제2종 근린생활시설(제조업소)'로 되어 있다면 일반 상가 건물에서도 시설 기준만 맞추면 얼마든지 영업등록이 가능합니다. 단, 위반건축물이 없어야 하므로 부동산 계약 전 확인이 필수적입니다.</p>
    </div>
    <div class="faq-item" style="margin-bottom: 0;">
      <p class="faq-q" style="padding: 14px 18px;">그럼, 다음 등록 절차는 어떻게 되나요?</p>
      <p class="faq-a" style="padding: 14px 18px; line-height: 1.9;">건축물 용도 등이 적합하면 교차 오염을 방지하는 작업장 설치, 창고 설치, 영업 등록 신청에 필요한 서류를 준비하여 관할 지자체에 식품제조가공업 등록 신청을 하면 됩니다.</p>
    </div>
  </div>

  <h2>✅ 입지 검토부터 함께하세요</h2>
  
  <p style="margin-bottom: 25px; margin-top: 20px;">
    식품 인허가는 초기 업종 정의를 잘못 내리거나 입지 검토를 잘못 했다가 <em>큰 낭패를 보게</em> 될 수 있습니다.
  </p>
  
  <p style="margin-bottom: 45px;">
    저희 식품·축산물 가공업 인허가와 HACCP인증 팀은 대표님의 소중한 시간과 자본금을 단 하루도 낭비하지 않도록 정확하고 신속하게 업무 대행을 합니다. 어려운 행정 처리는 전문가에게 맡기시고 사업에만 전념하세요.
  </p>

  <!-- ⑧ CTA 영역 -->
  <div class="cta-box" style="padding: 35px 20px;">
    <p class="cta-title" style="font-size: 18px; margin-bottom: 10px;">🏢 식품제조가공업 영업등록 · 전국 제조소 입지 무료 사전 검토</p>
    <p style="margin-bottom: 22px;">식품·축산물 가공업 인허가와 HACCP인증 팀 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>

</article>
    `
  }
];
