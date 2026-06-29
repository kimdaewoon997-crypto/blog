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
  //  POST 2  |  식육가공업 정의 및 식육포장처리업 비교 (인천 염지 닭 사례)
  // ──────────────────────────────────────────────
  {
    id: 2,
    category: 2,                           // 2번: 축산물가공업 허가 카테고리
    title: "식육가공업이란 무엇인가요? 식육포장처리업과 같은 업종이라고 생각하셨다면 꼭 읽어보세요",
    summary: "염지·양념·가열 등 가공 행위가 있으면 식육가공업, 절단·포장만 하면 식육포장처리업입니다. 두 업종을 같은 것으로 알고 잘못 준비하는 사례가 실제로 있습니다. 인천 염지 닭 사례와 함께 핵심 차이점을 정리합니다.",
    date: "2026-07-01",
    tags: ["식육가공업", "식육포장처리업", "축산물위생관리법", "해썹인증", "염지닭허가", "지엘행정사사무소"],
    thumbnail: "",
    body: `
<article class="post-body" style="line-height: 2.0; letter-spacing: -0.02em;">

  <!-- 도입부 -->
  <section class="intro-box" style="margin-bottom: 35px; padding: 22px;">
    <p style="margin-bottom: 15px;">
      "염지 닭을 생산해서 납품하고 싶은데, 식육 관련 허가 받으면 되는 거 아닌가요?"
    </p>
    <p style="margin-bottom: 15px;">
      상담 전화에서 꽤 자주 듣는 질문입니다. 대부분의 분들이 식육가공업과 식육포장처리업을 <strong>비슷한 업종이거나 같은 업종</strong>으로 알고 계시는 경우가 많거든요.
    </p>
    <p style="margin-bottom: 0;">
      결론부터 말씀드리면, 두 업종은 이름은 비슷하지만 <strong>법적으로 완전히 다른 업종</strong>입니다. 특히 양념을 하거나 염지 처리를 하는 제품을 만들고 싶다면, 어떤 허가를 받아야 하는지부터 정확히 짚고 가야 합니다.
    </p>
  </section>

  <div class="standard-box" style="margin-bottom: 40px;">
    <p style="margin: 0;">
      💡 <strong>핵심 정리</strong> : 식육에 양념·염지·가열 등 <strong>가공 행위</strong>가 들어간다면 <strong>식육가공업</strong>, 단순히 자르고 포장만 한다면 <strong>식육포장처리업</strong>입니다. 이 차이를 모르고 잘못된 업종으로 허가를 냈다가 뒤늦게 다시 준비하게 되는 경우가 실제로 있습니다.
    </p>
  </div>

  <!-- 섹션 1: 식육가공업 정의 -->
  <h2>1. 식육가공업이란? – 법적 정의</h2>

  <p>
    <strong>식육가공업</strong>은 「축산물 위생관리법」 제2조 및 제21조에 따라 <strong>허가</strong>를 받아야 하는 영업입니다.
  </p>
  <p>
    법령상 정의는 <strong>"식육가공품을 만들거나, 식육 또는 포장육을 원료로 가공한 제품을 제조·가공하는 영업"</strong>입니다. 여기서 가공이란 단순한 절단이나 포장이 아니라, <strong>염지·양념·가열·훈연·건조·성형</strong> 등의 처리 공정이 포함된 것을 말합니다.
  </p>
  <p>
    쉽게 말씀드리면, 원료 고기를 받아서 <strong>무언가를 더하거나 변형시키는 과정</strong>을 거쳐 새로운 형태의 제품을 만들어내는 것이 식육가공업입니다. 염지 닭, 소시지, 햄, 육포, 양념갈비, 패티 같은 제품들이 여기에 해당합니다.
  </p>

  <!-- 이미지 자리 1 -->
  <div style="margin: 32px 0; background: #f8fafc; border: 1px dashed #c8d0e0; border-radius: 8px; padding: 36px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 1.8;">
    <p style="font-size: 22px; margin-bottom: 8px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 4px;">이미지 삽입 위치 : 식육가공품 종류 예시 사진</p>
    <p style="margin: 0;">염지 닭, 소시지, 햄, 양념육, 육포 등 대표 식육가공품 이미지<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>

  <!-- 섹션 2: 식육포장처리업 정의 -->
  <h2>2. 식육포장처리업이란? – 법적 정의</h2>

  <p>
    <strong>식육포장처리업</strong>은 같은 법에 따라 <strong>허가</strong>를 받아야 하는 영업이지만, 할 수 있는 것의 범위가 다릅니다.
  </p>
  <p>
    법령상 정의는 <strong>"포장육을 만드는 영업"</strong>입니다. 포장육이란 식육을 절단하거나 분쇄해서 위생적으로 포장한 것을 말합니다. 즉, 원료 고기를 <strong>자르고 포장하는 것</strong>이 이 업종이 할 수 있는 범위입니다.
  </p>
  <p>
    양념을 더하거나, 염지액에 담그거나, 가열·훈연 공정을 거치는 것은 식육포장처리업의 범위에 포함되지 않습니다.
  </p>

  <!-- 이미지 자리 2 -->
  <div style="margin: 32px 0; background: #f8fafc; border: 1px dashed #c8d0e0; border-radius: 8px; padding: 36px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 1.8;">
    <p style="font-size: 22px; margin-bottom: 8px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 4px;">이미지 삽입 위치 : 포장육 제품 예시 사진</p>
    <p style="margin: 0;">정육 절단 후 트레이 포장된 포장육 이미지<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>

  <!-- 섹션 3: 비교표 -->
  <h2>3. 두 업종, 핵심 차이점만 비교해 보면</h2>

  <p>
    두 업종의 가장 큰 차이는 딱 하나입니다. <strong>가공 행위가 있느냐, 없느냐</strong>입니다.
  </p>

  <div class="standard-box" style="margin: 24px 0; padding: 0; overflow: hidden;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <thead>
        <tr>
          <th style="background: #1a2e5a; color: #fff; padding: 12px 16px; text-align: center; width: 26%;">구분</th>
          <th style="background: #1a2e5a; color: #fff; padding: 12px 16px; text-align: center;">식육가공업</th>
          <th style="background: #1a2e5a; color: #fff; padding: 12px 16px; text-align: center;">식육포장처리업</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">할 수 있는 것</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">염지, 양념, 가열, 훈연, 건조, 성형 등 가공 공정을 포함한 제품 제조</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">원료 식육을 절단·분쇄하여 포장하는 것</td>
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 12px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">가공 행위 여부</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">✅ <strong>있음</strong><br><span style="font-size: 12px; color: #6b7280;">원료에 변형을 가함</span></td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">❌ <strong>없음</strong><br><span style="font-size: 12px; color: #6b7280;">절단·포장에 한정</span></td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">대표 제품 예시</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">염지 닭, 양념갈비, 소시지, 햄, 육포, 패티</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">절단 포장육 (정육 트레이팩 등)</td>
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 12px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center;">해썹(HACCP)</td>
          <td style="padding: 12px 16px; color: #3a3a3a;">✅ 의무 적용</td>
          <td style="padding: 12px 16px; color: #3a3a3a;">✅ 의무 적용</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    한 줄로 정리하면 이렇습니다. <strong>고기에 무언가를 더하거나, 열을 가하거나, 형태를 바꾸는 공정이 하나라도 있다면 식육가공업 허가가 필요합니다.</strong>
  </p>

  <div class="standard-box" style="margin: 20px 0;">
    <p style="margin: 0;">
      📌 염지(소금·향신료 등을 스며들게 하는 처리)는 가공 행위에 해당합니다. 따라서 <strong>염지 닭을 생산·납품하려면 식육포장처리업이 아닌 식육가공업 허가</strong>를 받아야 합니다.
    </p>
  </div>

  <!-- 섹션 4: 해썹 -->
  <h2>4. 식육가공업은 해썹(HACCP) 의무 업종입니다</h2>

  <p>
    식육가공업은 「축산물 위생관리법」 제9조에 따라 <strong>해썹(HACCP) 적용 의무 업종</strong>으로 지정되어 있습니다. 허가를 받은 후 반드시 해썹 인증을 취득해야 합니다.
  </p>

  <h3>해썹(HACCP)이란?</h3>
  <p>
    해썹은 <strong>Hazard Analysis and Critical Control Points</strong>의 약자로, 우리말로는 <strong>'위해요소 중점관리기준'</strong>입니다. 식품을 제조하는 전 과정에서 발생할 수 있는 위험 요소(미생물 오염, 이물질 혼입 등)를 미리 파악하고, 중요한 단계마다 체계적으로 관리하는 국제적인 식품 안전 관리 시스템입니다.
  </p>
  <p>
    쉽게 말씀드리면 <strong>"어디서 위험이 생길 수 있는지 찾아내고, 그 지점을 집중 관리하자"</strong>는 개념입니다. 식육가공업처럼 원료 고기를 직접 가공해서 제품을 만드는 업종은 식중독균 오염 등 위해 요소가 발생할 수 있는 지점이 많기 때문에, 법적으로 해썹 인증이 의무화되어 있습니다.
  </p>

  <!-- 이미지 자리 3 -->
  <div style="margin: 32px 0; background: #f8fafc; border: 1px dashed #c8d0e0; border-radius: 8px; padding: 36px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 1.8;">
    <p style="font-size: 22px; margin-bottom: 8px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 4px;">이미지 삽입 위치 : 해썹(HACCP) 인증 마크 이미지</p>
    <p style="margin: 0;">공식 HACCP 인증 로고 또는 인증서 사진<br>※ 제품 포장에 HACCP 마크 부착을 위해서는 인증 취득이 선행되어야 합니다.</p>
  </div>

  <!-- 섹션 5: 실제 사례 -->
  <h2>5. 실제 사례 – 염지 닭 생산을 준비하던 의뢰업체 이야기</h2>

  <div class="standard-box" style="margin-bottom: 24px; background: #fffbf0; border: 1px solid #c8a951;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0;">📌 실제 상담 사례 요약</h3>
    <ul style="padding-left: 20px; margin: 0;">
      <li style="margin-bottom: 6px;">업종 목적 : 가금류(염지 닭) 제조·납품</li>
      <li style="margin-bottom: 6px;">위치 : 인천</li>
      <li style="margin-bottom: 6px;">상담 전 인식 : 식육가공업과 식육포장처리업이 같은 업종이라고 알고 있었음</li>
      <li style="margin-bottom: 0;">상담 후 결과 : 식육가공업 허가 취득 + 해썹 인증 완료</li>
    </ul>
  </div>

  <p>
    인천에서 가금류(염지 닭) 생산을 준비 중이던 업체가 저희 사무소에 상담을 요청해 오셨습니다. 식육 관련 허가가 필요하다는 것은 알고 계셨는데, 식육가공업과 식육포장처리업을 같은 업종으로 알고 계셔서 어느 쪽으로 진행해야 할지 정확히 파악하지 못한 상태였습니다.
  </p>
  <p>
    상담 과정에서 저희가 먼저 확인한 것은 <strong>어떤 제품을 어떤 공정으로 만들 것이냐</strong>였습니다. 말씀하신 염지 닭은 닭고기에 염지액을 주입하거나 침지하는 공정이 들어가는 제품입니다. 이는 가공 행위에 해당하기 때문에 식육포장처리업이 아닌 <strong>식육가공업 허가 대상</strong>임을 안내드렸습니다.
  </p>

  <div class="standard-box" style="margin: 24px 0; background: #fffbf0; border: 1px solid #c8a951;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0;">💬 상담 당시 실제로 드린 말씀</h3>
    <p style="margin: 0; font-size: 14px; line-height: 1.9; color: #5a4200;">
      "염지는 단순 포장이 아니라 원료 고기에 직접적인 변형을 가하는 공정입니다. 식육포장처리업으로는 이 제품을 생산할 수 없습니다. 처음부터 식육가공업으로 준비하셔야 하고, 해썹 인증도 함께 준비하셔야 합니다. 두 가지를 처음부터 병행해서 진행하는 것이 시간도 비용도 절약됩니다."
    </p>
  </div>

  <p>
    이후 식육가공업 허가 절차와 해썹 준비를 함께 진행했고, 최종적으로 <strong>허가 취득과 해썹 인증을 모두 완료</strong>하셨습니다. 만약 처음부터 식육포장처리업으로 잘못 진행했다면, 허가가 나더라도 염지 닭 생산은 불가능하고 결국 처음부터 다시 해야 하는 상황이 됩니다.
  </p>

  <div style="background: #f8f9fd; border-radius: 8px; padding: 16px 18px; font-size: 14px; color: #555; margin: 18px 0;">
    <strong style="color: #1a2e5a;">✅ 진행 결과</strong><br>
    업종 : 식육가공업 &nbsp;|&nbsp; 품목 : 가금류 식육가공품(염지 닭) &nbsp;|&nbsp; 소재지 : 인천<br>
    식육가공업 허가 취득 + 해썹(HACCP) 인증 완료
  </div>

  <!-- FAQ -->
  <h2>🙋 자주 묻는 질문 (FAQ)</h2>

  <div class="faq-box" style="margin-top: 20px; margin-bottom: 40px;">
    <div class="faq-item">
      <p class="faq-q">양념육도 식육가공업 허가가 필요한가요?</p>
      <p class="faq-a">네, 필요합니다. 원료 식육에 양념·소스류를 혼합하거나 염지 처리를 하는 것은 가공 행위에 해당합니다. 양념갈비, 양념돼지갈비, 염지 닭 등은 모두 식육가공업 허가 대상 제품입니다.</p>
    </div>
    <div class="faq-item">
      <p class="faq-q">닭고기나 오리고기도 식육가공업 허가로 제조할 수 있나요?</p>
      <p class="faq-a">네, 가능합니다. 법령상 식육의 범위에는 소·돼지뿐 아니라 닭·오리·칠면조 등 가금류도 포함됩니다. 가금류를 원료로 염지·가열 등의 공정을 거친 제품을 제조하려면 동일하게 식육가공업 허가를 받아야 합니다.</p>
    </div>
    <div class="faq-item">
      <p class="faq-q">식육가공업 허가 후 해썹 인증까지 얼마나 걸리나요?</p>
      <p class="faq-a">업체 상황에 따라 다르지만 시설 준비 기간을 포함해 통상 4~6개월 정도를 예상하시면 됩니다. 허가와 해썹 준비를 처음부터 병행하면 전체 일정을 단축하는 데 유리합니다.</p>
    </div>
    <div class="faq-item" style="margin-bottom: 0;">
      <p class="faq-q">온라인이나 배달로 염지 닭을 판매하려고 하는데, 그래도 허가가 필요한가요?</p>
      <p class="faq-a">네, 판매 방식이나 판매 규모에 관계없이 염지 닭을 직접 제조해서 판매한다면 식육가공업 허가가 필요합니다. 무허가 영업은 법적 처벌 대상이 될 수 있으니 사전에 반드시 확인하시기 바랍니다.</p>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-box" style="padding: 35px 20px;">
    <p class="cta-title">🥩 식육가공업 허가 · 해썹 인증, 업종 판단부터 함께합니다</p>
    <p>식품·축산물 가공업 인허가와 HACCP인증 팀 | 대표 김대운 행정사</p>
    <a href="tel:010-3538-3098" class="cta-btn">📞 010-3538-3098 직통 상담</a>
    <a href="http://gladmin.co.kr" target="_blank" rel="noopener" class="cta-btn cta-btn-outline">🌐 공식 홈페이지 이동</a>
  </div>

</article>
    `
  },

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
  </p><br>

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
  </div><br>

  <!-- ③ 본문 중간 즉석판매제조가공업과의 유통 범위 비교 -->
  <h2>2. 핵심 비교: 식품제조가공업 VS 즉석판매제조가공업 유통 범위</h2>
  
  <p style="margin-bottom: 35px; margin-top: 20px;">
    두 업종의 차이를 이해하는 본질은 바로 <strong>'판매 대상 및 형태 (납품 가능 여부)'</strong>에 있습니다. 내가 만든 식품을 누구에게 판매할 것이냐에 따라 가야 할 길이 완전히 달라집니다.
  </p>

  <div style="margin: 45px 0; text-align: center;">
    <img src="images/intro-compare.jpg" alt="식품제조가공업 즉석판매제조가공업 B2B B2C 유통 범위 비교 차이점" style="width:100%; max-width:720px; border-radius:8px; display:block; margin:0 auto; box-shadow: 0 4px 15px rgba(0,0,0,.06);">
    <p style="font-size: 13px; color: var(--muted); text-align: center; margin-top: 12px;">▲ 판매 형태에 따른 두 업종의 법적 비교</p>
  </div>

  <h3 style="margin-bottom: 15px;">💡 판매 대상 및 형태에 따른 업종 분리 기준</h3>
  <ul style="margin-bottom: 40px; padding-left: 20px;">
    <li style="margin-bottom: 12px;"><strong>식품제조·가공업:</strong> 식품을 다른 식당, 프랜차이즈 가맹점, 마트, 도매업소 등 <em>판매를 목적으로 하는 다른 영업자에게 납품 및 유통(B2B)</em>할 수 있으며, 온라인 등으로 최종 소비자에게 직접 판매(B2C)하는 것도 모두 허용됩니다.</li><br>
    <li style="margin-bottom: 0;"><strong>즉석판매제조·가공업:</strong> 내 영업장 안에서 또는 온라인으로 '최종 소비자'에게 직접 판매하거나, 개인 고객의 주문을 받아 택배로 배달(B2C)하는 것만 가능합니다. <strong>다른 식당이나 마트에 납품(B2B)하는 행위는 원칙적으로 금지</strong>됩니다. 다만, 과자·빵·떡류에 한해서만 당일 제조·판매 조건으로 일부 유통이 예외 허용됩니다.</li>
  </ul><br>

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
