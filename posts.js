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
  //  POST 3  |  즉석판매제조가공업 정의 - 온라인·매장 판매 초점 (인천 식당 사례)
  // ──────────────────────────────────────────────
  {
    id: 3,
    category: 3,                           // 3번: 기타 영업 허가·등록·신고 카테고리
    title: "식당에서 만든 반찬·소스, 온라인으로 팔고 싶다면? 즉석판매제조가공업 정의",
    summary: "식당이나 반찬가게를 운영하면서 온라인으로 제품을 판매하고 싶은 분들이 많습니다. 매장 내 판매와 온라인 판매 모두 가능한지, 어디까지 허용되는지 즉석판매제조가공업을 중심으로 정리합니다.",
    date: "2026-07-02",
    tags: ["즉석판매제조가공업", "즉석판매제조가공업신고", "식당온라인판매", "반찬온라인판매", "식품위생법", "식품인허가", "지엘행정사사무소"],
    thumbnail: "",
    body: `
<article class="post-body" style="line-height: 2.2; letter-spacing: -0.02em; font-size: 15px;">

  <!-- 도입부 -->
  <section class="intro-box" style="margin-bottom: 40px; padding: 24px 26px;">

    <p style="margin-bottom: 0; font-size: 15px; font-style: italic; color: #3a4a6a;">
      "식당을 운영하고 있는데, 제가 직접 만든 김치나 반찬을 온라인에서도 팔고 싶어요. 따로 허가를 받아야 하나요?"
    </p>

    <p style="margin-top: 20px; margin-bottom: 0;">
      음식점을 운영하다 보면 자연스럽게 생기는 고민입니다.
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      매장에서 손님들한테 잘 팔리는 반찬, 직접 개발한 소스, 정성껏 담근 김치를 온라인으로도 판매하고 싶은데 — 기존 음식점 영업으로 그냥 팔면 되는지, 아니면 뭔가 따로 허가를 받아야 하는지 헷갈리시는 거죠.
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      결론부터 말씀드리면, <strong>음식점 영업허가만으로는 온라인 판매나 포장(진열) 판매를 할 수 없습니다.</strong>
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      별도로 <strong>즉석판매제조가공업 신고</strong>를 해야 합니다.
    </p>

  </section>

  <div class="standard-box" style="margin-bottom: 48px;">
    <p style="margin: 0; line-height: 2.1;">
      💡 <strong>핵심 정리</strong><br>
      <br>
      음식점 영업 → 매장에서 <strong>조리한 음식을 식사로 제공</strong>하는 것만 가능<br>
      즉석판매제조가공업 → 직접 만든 식품을 <strong>포장(진열)해서 판매하거나 온라인으로 판매</strong> 가능<br>
      <br>
      <span style="font-size: 13px; color: #6b7280;">※ 다른 식당·마트에 납품하려면 식품제조가공업 등록이 별도로 필요합니다.</span>
    </p>
  </div>


  <!-- 섹션 1: 법적 정의 -->
  <h2>1. 즉석판매제조가공업이란? – 법적 정의</h2>

  <p style="margin-top: 20px;">
    <strong>즉석판매제조가공업</strong>은 「식품위생법 시행령」 제21조에 따라 <strong>신고</strong>를 하고 운영하는 영업입니다.
  </p>

  <p style="margin-top: 16px;">
    법령상 정의는 이렇습니다.
  </p>

  <div class="standard-box" style="margin: 20px 0 24px; padding: 20px 24px;">
    <p style="margin: 0; font-size: 14px; color: #2a3a5a; line-height: 2.0;">
      "총리령에서 정하는 식품을 제조·가공업소에서 직접 최종 소비자에게 판매하는 영업"<br>
      <span style="font-size: 13px; color: #6b7280;">— 식품위생법 시행령 제21조 제5호</span>
    </p>
  </div>

  <p>
    여기서 핵심 키워드는 두 가지입니다.
  </p>

  <p style="margin-top: 12px;">
    <strong>① 제조·가공업소에서</strong> — 매장 내에서 진열 판매 또는 온라인으로 판매하는 것<br>
    <strong>② 최종 소비자에게 판다</strong> — 영업을 목적으로하는 사람이 아닌 최종소비자에게 직접 파는 것
  </p>

  <p style="margin-top: 16px; margin-bottom: 32px;">
    이 두 가지가 충족된다면, 매장에서 파는 것이든 온라인으로 파는 것이든 즉석판매제조가공업의 범위에 해당합니다.
  </p>

  <!-- 이미지 자리 1 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 매장 판매 + 온라인 판매 동시 운영 예시</p>
    <p style="margin: 0;">반찬 진열 매장 사진과 스마트스토어·쿠팡 판매 화면을 나란히 배치<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>


  <!-- 섹션 2: 음식점과 뭐가 다른가 -->
  <h2>2. 기존 음식점 허가로는 왜 안 되나요?</h2>

  <p style="margin-top: 20px;">
    많은 분들이 "나는 이미 음식점 허가가 있는데 왜 또 신고를 해야 하나요?"라고 물어보십니다.
  </p>

  <p style="margin-top: 14px;">
    이유는 법적으로 <strong>영업 허가의 목적이 다르기 때문</strong>입니다.
  </p>

  <p style="margin-top: 14px; margin-bottom: 24px;">
    일반음식점 허가는 '식사를 제공하는 것'을 목적으로 합니다. 손님이 자리에 앉아서 드시는 음식을 파는 영업이에요. 반면 진열 판매나 온라인 판매는 '식품을 제조해서 포장된 제품을 판매하는 것'에 해당합니다. 법적으로 다른 행위입니다.
  </p>

  <div class="standard-box" style="margin: 0 0 20px; padding: 0; overflow: hidden;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.9;">
      <thead>
        <tr>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center; width: 28%;">구분</th>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center;">일반음식점 영업</th>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center;">즉석판매제조가공업</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 13px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">목적</td>
          <td style="padding: 13px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">매장에서 식사 제공</td>
          <td style="padding: 13px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">포장된 제품을 판매</td>
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 13px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">매장 내 식사 제공</td>
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">✅ 가능</td>
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">(해당 없음)</td>
        </tr>
        <tr>
          <td style="padding: 13px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">진열 판매</td>
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">❌ 불가<br><span style="font-size:12px;color:#888;">
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">✅ 가능<br><span style="font-size:12px;color:#888;">
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 13px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">온라인 판매</td>
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">❌ 불가</td>
          <td style="padding: 13px 16px; text-align: center; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">✅ 가능</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="standard-box" style="margin: 24px 0 48px;">
    <p style="margin: 0; line-height: 2.1;">
      📌 <strong>음식점을 운영하면서 온라인 판매를 함께 하고 싶다면,</strong><br>
      기존 음식점 허가는 유지하면서 즉석판매제조가공업을 <strong>추가로 신고</strong>하는 방식으로 진행합니다.<br>
      두 영업을 함께 운영하는 것은 법적으로 가능합니다.
    </p>
  </div>


  <!-- 섹션 3: 어디까지 팔 수 있나 -->
  <h2>3. 즉석판매제조가공업으로 어디까지 팔 수 있나요?</h2>

  <p style="margin-top: 20px; margin-bottom: 14px;">
    이 업종으로 가능한 판매 방식과 안 되는 방식을 구체적으로 정리했습니다.
  </p>

  <!-- 가능한 것 -->
  <h3 style="margin-top: 28px;">✅ 가능한 것</h3>

  <div class="standard-box" style="margin: 14px 0 28px; padding: 20px 24px;">
    <p style="margin: 0; font-size: 14px; line-height: 2.5; color: #2a3a5a;">
      <strong>· 매장 내 직접 판매</strong><br>
      <span style="color: #555; padding-left: 14px;">내 가게 안에서 손님에게 직접 판매, 반찬 소분 판매, 진열 판매 포함.</span><br>

      <strong>· 스마트스토어·쿠팡·네이버쇼핑 등 온라인 판매</strong><br>
      <span style="color: #555; padding-left: 14px;">개인 소비자를 대상으로 한 온라인 쇼핑몰 판매 가능.</span><br>

      <strong>· SNS 주문 판매 (인스타그램·카카오채널 등)</strong><br>
      <span style="color: #555; padding-left: 14px;">DM·카톡으로 주문받아 판매하는 형태도 가능.</span><br>

      <strong>· 택배·배달 발송</strong><br>
      <span style="color: #555; padding-left: 14px;">개인 소비자에게 직접 택배로 발송하는 것 가능.</span><br>

      <strong>· 배달앱 포장 주문</strong><br>
      <span style="color: #555; padding-left: 14px;">배달의민족·쿠팡이츠 등에서 포장 상품으로 판매하는 것 가능.</span>
    </p>
  </div>

  <!-- 안 되는 것 -->
  <h3>❌ 안 되는 것</h3>

  <div class="standard-box" style="margin: 14px 0 28px; padding: 20px 24px; background: #fff8f8; border-left-color: #c0392b;">
    <p style="margin: 0; font-size: 14px; line-height: 2.5; color: #2a3a5a;">
      <strong>· 다른 식당·카페에 납품</strong><br>
      <span style="color: #555; padding-left: 14px;">프랜차이즈 가맹점, 급식업체, 인근 식당 등 다른 영업자에게 납품 불가.</span><br>

      <strong>· 마트·편의점 등 유통</strong><br>
      <span style="color: #555; padding-left: 14px;">대형마트, 슈퍼, 편의점 등에 제품을 입점시켜 유통하는 것 불가.</span><br>

      <strong>· 도매상·식자재업체 납품</strong><br>
      <span style="color: #555; padding-left: 14px;">식자재 도매업체나 유통 대행사를 통한 B2B 유통 불가.</span>
    </p>
  </div>

  <div class="standard-box" style="margin: 0 0 48px;">
    <p style="margin: 0; line-height: 2.1;">
      📌 <strong>납품·유통이 목적이라면 식품제조가공업 등록이 필요합니다.</strong><br><br>
      즉석판매제조가공업은 어디까지나 <strong>내가 만들어서 개인 소비자에게 직접 파는 것</strong>이 전제입니다.<br>
      다른 업체에 납품하거나 유통망을 통해 파는 순간, 식품제조가공업 등록 대상이 됩니다.
    </p>
  </div>

  <!-- 이미지 자리 2 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 온라인 판매 가능 채널 예시 이미지</p>
    <p style="margin: 0;">스마트스토어·쿠팡·인스타그램 판매 화면 예시 이미지<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>


  <!-- 섹션 4: 온라인 판매 시 추가로 챙길 것 -->
  <h2>4. 온라인으로 팔 때 반드시 챙겨야 할 것</h2>

  <p style="margin-top: 20px;">
    즉석판매제조가공업 신고를 마쳤다고 해서 바로 온라인 판매를 시작할 수 있는 건 아닙니다.
  </p>

  <p style="margin-top: 14px; margin-bottom: 24px;">
    온라인으로 식품을 판매하려면 영업 신고 외에 아래 사항을 추가로 갖춰야 합니다.
  </p>

  <div class="standard-box" style="margin: 0 0 20px; padding: 22px 24px;">
    <p style="margin: 0; font-size: 14px; line-height: 2.5; color: #2a3a5a;">
      <strong>① 식품 표시 기준 준수</strong><br>
      <span style="color: #555; padding-left: 14px;">제품 포장에 제품명, 식품유형, 원재료명, 소비기한, 보관방법, 영업소 명칭·소재지 등을 표시해야 합니다.</span><br>

      <strong>② 통신판매업 신고</strong><br>
      <span style="color: #555; padding-left: 14px;">온라인으로 판매하려면 관할 지자체에 통신판매업 신고를 별도로 해야 합니다. (스마트스토어, 자사몰, SNS 판매 모두 해당)</span><br>

      <strong>③ 위생적인 포장·배송 관리</strong><br>
      <span style="color: #555; padding-left: 14px;">냉장·냉동이 필요한 제품은 보관 운송기준에 적합한 포장을 갖춰야 하며, 식품 안전을 위한 운송 기준을 준수해야 합니다.</span>
    </p>
  </div>

  <p style="margin-bottom: 40px;">
    처음 온라인 판매를 시작하시는 분들이 가장 많이 놓치는 부분이 바로 <strong>식품 표시</strong>입니다. 즉석판매제조가공업 영업 신고와 함께 꼭 확인하시기 바랍니다.
  </p>


  <!-- 섹션 5: 실제 사례 -->
  <h2>5. 실제 사례 – 인천 식당 운영 중 온라인 판매 문의 사례</h2>

  <div class="standard-box" style="margin: 24px 0 32px; background: #fffbf0; border: 1px solid #c8a951; padding: 22px 24px;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0; margin-bottom: 14px;">📌 사례 개요</h3>
    <p style="margin: 0; line-height: 2.1; font-size: 14px; color: #4a3a00;">
      상황 : 인천에서 한식당을 운영 중이며, 직접 만든 반찬을 온라인으로도 판매하고 싶었음<br>
      기존 허가 : 일반음식점 영업 신고증 보유<br>
      고민 : 기존 음식점 영업으로 온라인 판매가 가능한지, 따로 신고가 필요한지 몰랐음<br>
      결과 : 즉석판매제조가공업 추가 영업신고 + 통신판매업 신고 완료 후 온라인 판매 시작
    </p>
  </div>

  <p>
    인천에서 한식당을 운영하시는 대표님이 상담을 요청해 오셨습니다.
  </p>

  <p style="margin-top: 14px;">
    단골손님들이 "이 반찬 집에서도 먹고 싶다", "소스 따로 살 수 있냐"는 말을 자주 해서, 온라인으로 판매해 보면 어떨까 생각하게 되셨다고 했습니다.
  </p>

  <p style="margin-top: 14px;">
    기존 음식점 허가로 그냥 팔면 되는 거 아니냐고 물어보셨는데, 저희가 상황을 확인해 드렸습니다.
  </p>

  <div class="standard-box" style="margin: 28px 0; background: #fffbf0; border: 1px solid #c8a951; padding: 22px 24px;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0; margin-bottom: 14px;">💬 상담 당시 실제로 드린 말씀</h3>
    <p style="margin: 0; font-size: 14px; line-height: 2.2; color: #5a4200; font-style: italic;">
      "음식점 영업은 매장에서 식사를 제공하는 업종입니다.<br>
      매장 내 진열 판매나 온라인 판매는 별개의 영업 행위로 보기 때문에,<br>
      즉석판매제조가공업을 추가로 영업 신고하셔야 합니다.<br>
      <br>
      기존 음식점 영업은 그대로 두고, 즉석판매제조가공업을 추가 영업 신고하는 방식이라<br>
      어렵지 않습니다. 온라인 판매를 위한 통신판매업 신고도 함께 진행하시면<br>
      바로 스마트스토어나 SNS에서 판매를 시작하실 수 있습니다."
    </p>
  </div>

  <p>
    이후 즉석판매제조가공업 영업 신고를 진행했습니다.
  </p>

  <p style="margin-top: 14px;">
    영업 신고 완료 후 스마트스토어를 개설하고, 현재는 매장 영업과 온라인 판매를 병행하고 계십니다. 매장에서 팔던 반찬이 온라인에서도 꾸준히 판매되고 있다고 하셨습니다.
  </p>

  <div style="background: #f0f4ff; border-left: 4px solid #1a2e5a; border-radius: 0 8px 8px 0; padding: 18px 22px; font-size: 14px; color: #2a3a5a; margin: 28px 0 52px; line-height: 2.1;">
    <strong>✅ 진행 결과</strong><br>
    기존 영업 : 일반음식점 (유지)<br>
    추가 신고 : 즉석판매제조가공업 영업 신고 완료<br>
    부가 신고 : 통신판매업 신고 완료<br>
    판매 채널 : 매장 판매 + 스마트스토어 온라인 판매 병행
  </div>

  <!-- 이미지 자리 3 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 즉석판매제조가공업 신고증 + 통신판매업 신고증</p>
    <p style="margin: 0;">실제 발급된 신고증 사진 (개인정보 비공개 처리)<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>


  <!-- FAQ -->
  <h2>🙋 자주 묻는 질문 (FAQ)</h2>

  <div class="faq-box" style="margin-top: 24px; margin-bottom: 48px;">

    <div class="faq-item">
      <p class="faq-q">배달의민족·쿠팡이츠에서 반찬 메뉴를 팔고 싶은데, 음식점으로는 안 되나요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        배달앱에서 '식사 메뉴'로 파는 건 음식점으로 가능합니다.<br>
        하지만 반찬·김치·소스류를 <strong>미리 포장 한 상품</strong>으로 별도 판매하는 경우에는 즉석판매제조가공업 신고가 필요합니다.<br>
        어떤 형태로 파느냐에 따라 달라지므로, 판매 방식을 먼저 확인하시는 게 좋습니다.
      </p>
    </div>

    <div class="faq-item">
      <p class="faq-q">나중에 마트나 다른 식당에도 납품하고 싶어지면요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        즉석판매제조가공업만으로는 납품이 불가능합니다.<br>
        다른 업체에 납품하려면 <strong>식품제조가공업 등록</strong>이 별도로 필요합니다.<br>
        처음부터 납품까지 계획하고 계신다면, 즉석판매제조가공업보다 식품제조가공업으로 준비하시는 것이 더 효율적입니다.
      </p>
    </div>

    <div class="faq-item" style="margin-bottom: 0;">
      <p class="faq-q">즉석판매제조가공업 영업 신고 후 바로 온라인 판매를 시작할 수 있나요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        즉석판매제조가공업 신고 외에 <strong>통신판매업 신고</strong>를 함께 하셔야 합니다.<br>
        또한 제품 포장에 식품 표시 사항(원재료, 소비기한, 영업소 정보 등)을 갖춰야 판매가 가능합니다.<br>
        두 가지 신고와 표시 기준까지 함께 준비하시면 바로 온라인 판매를 시작하실 수 있습니다.
      </p>
    </div>

  </div>


  <!-- CTA -->
  <div class="cta-box" style="padding: 36px 24px;">
    <p class="cta-title">🏪 즉석판매제조가공업 영업 신고 · 온라인 판매 인허가, 처음부터 함께합니다</p>
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
  {
    id: 2,
    category: 2,                           // 2번: 축산물가공업 허가 카테고리
    title: "식육가공업이란 무엇인가요? 식육포장처리업과 같은 업종이라고 생각하셨다면 꼭 읽어보세요",
    summary: "염지·양념·가열 등 가공 행위가 있으면 식육가공업, 절단·포장만 하면 식육포장처리업입니다. 두 업종을 같은 것으로 알고 잘못 준비하는 사례가 실제로 있습니다. 인천 염지 닭 사례와 함께 핵심 차이점을 정리합니다.",
    date: "2026-07-01",
    tags: ["식육가공업", "식육포장처리업", "축산물위생관리법", "해썹인증", "염지닭허가", "지엘행정사사무소"],
    thumbnail: "",
    body: `
<article class="post-body" style="line-height: 2.2; letter-spacing: -0.02em; font-size: 15px;">

  <!-- 도입부 -->
  <section class="intro-box" style="margin-bottom: 40px; padding: 24px 26px;">

    <p style="margin-bottom: 0; font-size: 15px; font-style: italic; color: #3a4a6a;">
      "염지 닭을 생산해서 납품하고 싶은데, 식육 관련 허가 받으면 되는 거 아닌가요?"
    </p>

    <p style="margin-top: 20px; margin-bottom: 0;">
      상담 전화에서 꽤 자주 듣는 질문입니다.
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      대부분의 분들이 식육가공업과 식육포장처리업을 <strong>같은 업종</strong>으로 알고 계시는데요.
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      결론부터 말씀드리면, 두 업종은 이름은 비슷하지만 <strong>법적으로 완전히 다른 업종</strong>입니다.
    </p>

    <p style="margin-top: 12px; margin-bottom: 0;">
      특히 양념을 하거나 염지 처리를 하는 제품을 만들고 싶다면,<br>
      <strong>어떤 허가를 받아야 하는지부터 정확히 짚고 가야 합니다.</strong>
    </p>

  </section>

  <div class="standard-box" style="margin-bottom: 48px;">
    <p style="margin: 0; line-height: 2.0;">
      💡 <strong>핵심 한 줄 정리</strong><br>
      <br>
      식육에 <strong>양념·염지·가열 등 가공 행위</strong>가 들어간다면 → <strong>식육가공업</strong><br>
      단순히 자르고 포장만 한다면 → <strong>식육포장처리업</strong>
      <br><br>
      이 차이를 모르고 잘못된 업종으로 허가를 냈다가 처음부터 다시 준비하게 되는 경우가 실제로 있습니다.
    </p>
  </div>


  <!-- 섹션 1: 식육가공업 정의 -->
  <h2>1. 식육가공업이란? – 법적 정의</h2>

  <p style="margin-top: 20px;">
    <strong>식육가공업</strong>은 「축산물 위생관리법」 제2조 및 제21조에 따라 <strong>허가</strong>를 받아야 하는 영업입니다.
  </p>

  <p style="margin-top: 16px;">
    법령상 정의는 이렇습니다.
  </p>

  <div class="standard-box" style="margin: 20px 0 24px; padding: 20px 24px;">
    <p style="margin: 0; font-size: 14px; color: #2a3a5a; line-height: 2.0;">
      "식육가공품을 만들거나, 식육 또는 포장육을 원료로 가공한 제품을 <strong>제조·가공하는 영업</strong>"
    </p>
  </div>

  <p>
    여기서 핵심은 <strong>'가공'</strong>이라는 단어입니다.
  </p>

  <p style="margin-top: 12px;">
    단순한 절단이나 포장이 아니라, <strong>염지·양념·가열·훈연·건조·성형</strong> 등의 처리 공정이 포함된 것을 말합니다.
  </p>

  <p style="margin-top: 12px;">
    쉽게 말씀드리면, 원료 고기에 <strong>무언가를 더하거나 변형시키는 과정</strong>을 거쳐 새로운 형태의 제품을 만들어내는 것입니다.
  </p>

  <p style="margin-top: 12px; margin-bottom: 32px;">
    염지 닭, 소시지, 햄, 육포, 양념갈비, 패티 같은 제품들이 모두 여기에 해당합니다.
  </p>

  <!-- 이미지 자리 1 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 식육가공품 종류 예시 사진</p>
    <p style="margin: 0;">염지 닭, 소시지, 햄, 양념육, 육포 등 대표 식육가공품 이미지<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>


  <!-- 섹션 2: 식육포장처리업 정의 -->
  <h2>2. 식육포장처리업이란? – 법적 정의</h2>

  <p style="margin-top: 20px;">
    <strong>식육포장처리업</strong>은 같은 법에 따라 <strong>허가</strong>를 받아야 하는 영업이지만, 할 수 있는 것의 범위가 다릅니다.
  </p>

  <p style="margin-top: 16px;">
    법령상 정의는 이렇습니다.
  </p>

  <div class="standard-box" style="margin: 20px 0 24px; padding: 20px 24px;">
    <p style="margin: 0; font-size: 14px; color: #2a3a5a; line-height: 2.0;">
      "포장육을 만드는 영업"<br>
      <span style="font-size: 13px; color: #6b7280;">※ 포장육 : 식육을 절단하거나 분쇄해서 위생적으로 포장한 것</span>
    </p>
  </div>

  <p>
    원료 고기를 <strong>자르고 포장하는 것</strong>이 이 업종이 할 수 있는 범위입니다.
  </p>

  <p style="margin-top: 12px; margin-bottom: 32px;">
    양념을 더하거나, 염지액에 담그거나, 가열·훈연 공정을 거치는 것은 <strong>식육포장처리업의 범위에 포함되지 않습니다.</strong>
  </p>

  <!-- 이미지 자리 2 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 포장육 제품 예시 사진</p>
    <p style="margin: 0;">정육 절단 후 트레이 포장된 포장육 이미지<br>※ 핵심 정보는 위 본문에 텍스트로 병기되어 있습니다.</p>
  </div>


  <!-- 섹션 3: 비교표 -->
  <h2>3. 두 업종, 핵심 차이점만 비교해 보면</h2>

  <p style="margin-top: 20px; margin-bottom: 24px;">
    두 업종의 가장 큰 차이는 딱 하나입니다.
    <br>
    <strong>가공 행위가 있느냐, 없느냐</strong>입니다.
  </p>

  <div class="standard-box" style="margin: 0 0 28px; padding: 0; overflow: hidden;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.9;">
      <thead>
        <tr>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center; width: 26%;">구분</th>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center;">식육가공업</th>
          <th style="background: #1a2e5a; color: #fff; padding: 13px 16px; text-align: center;">식육포장처리업</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">할 수 있는 것</td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">염지, 양념, 가열, 훈연, 건조, 성형 등<br>가공 공정을 포함한 제품 제조</td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">원료 식육을<br>절단·분쇄하여 포장하는 것</td>
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 14px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">가공 행위</td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">✅ <strong>있음</strong><br><span style="font-size: 12px; color: #6b7280;">원료에 변형을 가함</span></td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">❌ <strong>없음</strong><br><span style="font-size: 12px; color: #6b7280;">절단·포장에 한정</span></td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center; border-bottom: 1px solid #e8ecf5;">대표 제품</td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">염지 닭, 양념갈비, 소시지,<br>햄, 육포, 패티</td>
          <td style="padding: 14px 16px; border-bottom: 1px solid #e8ecf5; color: #3a3a3a;">절단 포장육<br>(정육 트레이팩 등)</td>
        </tr>
        <tr style="background: #f8f9fd;">
          <td style="padding: 14px 16px; background: #f0f4ff; font-weight: 700; color: #1a2e5a; text-align: center;">해썹(HACCP)</td>
          <td style="padding: 14px 16px; color: #3a3a3a;">✅ 의무 적용</td>
          <td style="padding: 14px 16px; color: #3a3a3a;">✅ 의무 적용</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    <strong>고기에 무언가를 더하거나, 열을 가하거나, 형태를 바꾸는 공정이 하나라도 있다면</strong><br>
    식육가공업 허가가 필요합니다.
  </p>

  <div class="standard-box" style="margin: 24px 0 48px;">
    <p style="margin: 0; line-height: 2.0;">
      📌 <strong>염지</strong>는 소금·향신료 등을 고기에 스며들게 하는 처리로, <strong>가공 행위에 해당</strong>합니다.<br><br>
      따라서 <strong>염지 닭을 생산·납품하려면 식육포장처리업이 아닌 식육가공업 허가</strong>를 받아야 합니다.
    </p>
  </div>


  <!-- 섹션 4: 해썹 -->
  <h2>4. 식육가공업은 해썹(HACCP) 의무 업종입니다</h2>

  <p style="margin-top: 20px;">
    식육가공업은 「축산물 위생관리법」 제9조에 따라 <strong>해썹(HACCP) 적용 의무 업종</strong>으로 지정되어 있습니다.
  </p>

  <p style="margin-top: 12px; margin-bottom: 28px;">
    허가를 받은 후 반드시 해썹 인증을 취득해야 합니다.
  </p>

  <h3>해썹(HACCP)이란?</h3>

  <p style="margin-top: 14px;">
    해썹은 <strong>Hazard Analysis and Critical Control Points</strong>의 약자입니다.<br>
    우리말로는 <strong>'위해요소 중점관리기준'</strong>이라고 합니다.
  </p>

  <p style="margin-top: 16px;">
    쉽게 말씀드리면 이렇습니다.
  </p>

  <div class="standard-box" style="margin: 18px 0 24px; padding: 20px 24px;">
    <p style="margin: 0; line-height: 2.0; color: #2a3a5a;">
      식품을 만드는 <strong>전 과정에서 위험이 생길 수 있는 지점을 미리 찾아내고,</strong><br>
      그 지점을 집중적으로 관리하는 국제적인 식품 안전 시스템입니다.
    </p>
  </div>

  <p>
    식육가공업처럼 원료 고기를 직접 가공해서 제품을 만드는 업종은 살모넬라, 리스테리아 같은 식중독균 오염 위험이 높습니다.
  </p>

  <p style="margin-top: 12px; margin-bottom: 40px;">
    이 때문에 법적으로 <strong>해썹 인증이 의무화</strong>되어 있습니다.
  </p>

  <!-- 이미지 자리 3 -->
  <div style="margin: 36px 0; background: #f8fafc; border: 1.5px dashed #c8d0e0; border-radius: 10px; padding: 40px 20px; text-align: center; color: #8a96b0; font-size: 14px; line-height: 2.0;">
    <p style="font-size: 24px; margin-bottom: 10px;">🖼️</p>
    <p style="font-weight: 700; color: #4a5580; font-size: 15px; margin-bottom: 6px;">이미지 삽입 위치 : 해썹(HACCP) 인증 마크 이미지</p>
    <p style="margin: 0;">공식 HACCP 인증 로고 또는 인증서 사진<br>※ 제품 포장에 HACCP 마크를 부착하려면 인증 취득이 선행되어야 합니다.</p>
  </div>


  <!-- 섹션 5: 실제 사례 -->
  <h2>5. 실제 사례 – 염지 닭 생산을 준비하던 인천 의뢰업체 이야기</h2>

  <div class="standard-box" style="margin: 24px 0 32px; background: #fffbf0; border: 1px solid #c8a951; padding: 22px 24px;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0; margin-bottom: 14px;">📌 사례 개요</h3>
    <p style="margin: 0; line-height: 2.1; font-size: 14px; color: #4a3a00;">
      업종 목적 : 가금류(염지 닭) 제조·납품<br>
      위치 : 인천<br>
      상담 전 인식 : 식육가공업과 식육포장처리업이 같은 업종이라고 알고 있었음<br>
      상담 후 결과 : 식육가공업 허가 취득 + 해썹 인증 완료
    </p>
  </div>

  <p>
    인천에서 가금류(염지 닭) 생산을 준비 중이던 업체가 저희 사무소에 상담을 요청해 오셨습니다.
  </p>

  <p style="margin-top: 14px;">
    식육 관련 허가가 필요하다는 것은 알고 계셨는데, 식육가공업과 식육포장처리업을 <strong>같은 업종</strong>으로 알고 계셔서 어느 쪽으로 진행해야 할지 파악하지 못한 상태였습니다.
  </p>

  <p style="margin-top: 14px;">
    저희가 상담에서 먼저 확인한 것은 <strong>어떤 제품을 어떤 공정으로 만들 것이냐</strong>였습니다.
  </p>

  <p style="margin-top: 14px;">
    말씀하신 염지 닭은 닭고기에 염지액을 주입하거나 침지하는 공정이 들어가는 제품입니다.
    <br>
    이는 가공 행위에 해당하기 때문에, <strong>식육가공업 허가 대상</strong>임을 안내드렸습니다.
  </p>

  <div class="standard-box" style="margin: 28px 0; background: #fffbf0; border: 1px solid #c8a951; padding: 22px 24px;">
    <h3 style="color: #8a6400; border-left-color: #c8a951; margin-top: 0; margin-bottom: 14px;">💬 상담 당시 실제로 드린 말씀</h3>
    <p style="margin: 0; font-size: 14px; line-height: 2.1; color: #5a4200; font-style: italic;">
      "염지는 단순 포장이 아니라 원료 고기에 직접적인 변형을 가하는 공정입니다.<br>
      식육포장처리업으로는 이 제품을 생산할 수 없습니다.<br>
      <br>
      처음부터 식육가공업으로 준비하셔야 하고, 해썹 인증도 함께 준비하셔야 합니다.<br>
      두 가지를 처음부터 병행해서 진행하는 것이 시간도 비용도 절약됩니다."
    </p>
  </div>

  <p>
    이후 식육가공업 허가 절차와 해썹 준비를 함께 진행했고, 최종적으로 <strong>허가 취득과 해썹 인증을 모두 완료</strong>하셨습니다.
  </p>

  <p style="margin-top: 14px; margin-bottom: 32px;">
    만약 처음부터 식육포장처리업으로 잘못 진행했다면, 허가가 나더라도 염지 닭 생산은 불가능하고 결국 처음부터 다시 해야 하는 상황이 됩니다.
  </p>

  <div style="background: #f0f4ff; border-left: 4px solid #1a2e5a; border-radius: 0 8px 8px 0; padding: 18px 22px; font-size: 14px; color: #2a3a5a; margin: 0 0 52px; line-height: 2.1;">
    <strong>✅ 진행 결과</strong><br>
    업종 : 식육가공업<br>
    품목 : 가금류 식육가공품 (염지 닭)<br>
    소재지 : 인천<br>
    → 식육가공업 허가 취득 + 해썹(HACCP) 인증 완료
  </div>


  <!-- FAQ -->
  <h2>🙋 자주 묻는 질문 (FAQ)</h2>

  <div class="faq-box" style="margin-top: 24px; margin-bottom: 48px;">

    <div class="faq-item">
      <p class="faq-q">양념육도 식육가공업 허가가 필요한가요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        네, 필요합니다.<br>
        원료 식육에 양념·소스류를 혼합하거나 염지 처리를 하는 것은 가공 행위에 해당합니다.<br>
        양념갈비, 양념돼지갈비, 염지 닭 등은 모두 식육가공업 허가 대상 제품입니다.
      </p>
    </div>

    <div class="faq-item">
      <p class="faq-q">닭고기나 오리고기도 식육가공업 허가로 제조할 수 있나요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        네, 가능합니다.<br>
        법령상 식육의 범위에는 소·돼지뿐 아니라 닭·오리·칠면조 등 가금류도 포함됩니다.<br>
        가금류를 원료로 염지·가열 등의 공정을 거친 제품을 제조하려면 동일하게 식육가공업 허가를 받아야 합니다.
      </p>
    </div>

    <div class="faq-item">
      <p class="faq-q">식육가공업 허가 후 해썹 인증까지 얼마나 걸리나요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        업체 상황에 따라 다르지만, 시설 준비 기간을 포함해 통상 <strong>4~6개월</strong> 정도를 예상하시면 됩니다.<br>
        허가와 해썹 준비를 처음부터 병행하면 전체 일정을 단축하는 데 유리합니다.
      </p>
    </div>

    <div class="faq-item" style="margin-bottom: 0;">
      <p class="faq-q">온라인이나 배달로 염지 닭을 판매하려는데, 그래도 허가가 필요한가요?</p>
      <p class="faq-a" style="line-height: 2.0;">
        네, 판매 방식이나 규모에 관계없이 염지 닭을 직접 제조해서 판매한다면 식육가공업 허가가 필요합니다.<br>
        무허가 영업은 법적 처벌 대상이 될 수 있으니 사전에 반드시 확인하시기 바랍니다.
      </p>
    </div>

  </div>

  <!-- CTA -->
  <div class="cta-box" style="padding: 36px 24px;">
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
