<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO 메타태그 (JS로 동적 교체됨) -->
  <title>지엘행정사사무소 | 식품·축산물 인허가 전문 블로그</title>
  <meta id="meta-desc" name="description"
    content="인천 남동구 지엘행정사사무소 공식 블로그. 식품제조가공업, 식육가공업, HACCP 인증 등 축산물·식품 인허가 실무 정보를 제공합니다." />

  <!-- Open Graph -->
  <meta id="og-title"   property="og:title"       content="지엘행정사사무소 블로그" />
  <meta id="og-desc"    property="og:description"  content="식품·축산물 인허가 10년 경력 행정사의 실무 블로그" />
  <meta property="og:type"        content="website" />
  <meta property="og:locale"      content="ko_KR" />
  <meta property="og:site_name"   content="지엘행정사사무소" />

  <!-- 네이버 C-Rank / AI 브리핑 크롤러 힌트 -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="지엘행정사사무소 김대운 행정사" />
  <meta name="keywords" content="식품허가, 식육가공업, HACCP, 해썹, 식품제조가공업, 축산물위생관리법, 인천 행정사" />

  <!-- Schema.org LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "지엘행정사사무소",
    "description": "식품·축산물 인허가 및 HACCP 인증 전문 행정사 사무소",
    "telephone": "010-3538-3098",
    "url": "http://gladmin.co.kr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "인천광역시 남동구",
      "addressCountry": "KR"
    }
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />

  <style>
    /* ─────────────────────────────────────────
       DESIGN TOKEN
    ───────────────────────────────────────── */
    :root {
      --navy:      #1a2e5a;
      --navy-dark: #111f3e;
      --gold:      #c8a951;
      --gold-lt:   #f0dfa0;
      --bg:        #f5f6f8;
      --surface:   #ffffff;
      --border:    #e2e6ed;
      --text:      #202124;
      --muted:     #6b7280;
      --accent:    #2563eb;
      --radius:    10px;
      --shadow:    0 2px 12px rgba(0,0,0,.08);
      --transition: .18s ease;
    }

    /* ─────────────────────────────────────────
       RESET & BASE
    ───────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 15px;
      line-height: 1.75;
      color: var(--text);
      background: var(--bg);
    }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    ul { padding-left: 1.4em; }
    li { margin-bottom: .3em; }

    /* ─────────────────────────────────────────
       HEADER
    ───────────────────────────────────────── */
    #site-header {
      background: var(--navy);
      color: #fff;
      position: sticky;
      top: 0;
      z-index: 200;
      box-shadow: 0 2px 8px rgba(0,0,0,.3);
    }
    .header-inner {
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 20px;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .site-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .logo-mark {
      width: 36px; height: 36px;
      background: var(--gold);
      color: var(--navy);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: -.5px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 6px;
    }
    .logo-text { font-size: 15px; font-weight: 700; line-height: 1.2; }
    .logo-text small { display: block; font-size: 10px; font-weight: 400; opacity: .75; }

    /* mobile menu toggle */
    .menu-toggle {
      display: none;
      background: none; border: none;
      color: #fff; font-size: 22px; cursor: pointer;
      padding: 4px 8px;
    }

    /* desktop search bar */
    .header-search {
      flex: 1; max-width: 360px;
      display: flex;
      border: 1.5px solid rgba(255,255,255,.25);
      border-radius: 24px;
      overflow: hidden;
    }
    .header-search input {
      flex: 1; padding: 6px 14px;
      background: rgba(255,255,255,.1);
      border: none; outline: none;
      color: #fff; font-size: 13px;
      font-family: inherit;
    }
    .header-search input::placeholder { color: rgba(255,255,255,.5); }
    .header-search button {
      padding: 0 14px;
      background: var(--gold); border: none; cursor: pointer;
      color: var(--navy); font-size: 14px; font-weight: 700;
    }

    .header-tel {
      display: flex; align-items: center; gap: 6px;
      background: var(--gold); color: var(--navy);
      font-size: 13px; font-weight: 700;
      padding: 6px 14px; border-radius: 20px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .header-tel:hover { opacity: .9; }

    /* ─────────────────────────────────────────
       LAYOUT
    ───────────────────────────────────────── */
    #app-wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 24px 16px 80px;
      display: flex;
      gap: 24px;
      align-items: flex-start;
    }

    /* ─────────────────────────────────────────
       SIDEBAR
    ───────────────────────────────────────── */
    #sidebar {
      width: 220px;
      flex-shrink: 0;
      position: sticky;
      top: 78px;
    }
    .sidebar-card {
      background: var(--surface);
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
      padding: 20px 16px;
      margin-bottom: 16px;
    }

    /* profile */
    .profile-avatar {
      width: 64px; height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--navy), #2563eb);
      color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; font-weight: 700;
      margin: 0 auto 10px;
    }
    .profile-name {
      text-align: center;
      font-weight: 700; font-size: 14px;
      color: var(--navy);
    }
    .profile-sub {
      text-align: center;
      font-size: 11px; color: var(--muted);
      margin-top: 2px; line-height: 1.5;
    }
    .profile-badges {
      display: flex; flex-wrap: wrap; gap: 4px;
      justify-content: center; margin-top: 10px;
    }
    .badge {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 12px;
      background: #eef2ff;
      color: #3730a3;
      font-weight: 500;
    }

    /* category nav */
    .sidebar-section-title {
      font-size: 11px; font-weight: 700; letter-spacing: .08em;
      color: var(--muted); text-transform: uppercase;
      margin-bottom: 10px;
    }
    .cat-nav { list-style: none; padding: 0; }
    .cat-nav li { margin-bottom: 2px; }
    .cat-nav a {
      display: flex; align-items: center; justify-content: space-between;
      padding: 7px 10px;
      border-radius: 7px;
      font-size: 13px;
      color: var(--text);
      transition: background var(--transition);
      cursor: pointer;
    }
    .cat-nav a:hover  { background: #f0f4ff; color: var(--navy); }
    .cat-nav a.active { background: var(--navy); color: #fff; font-weight: 700; }
    .cat-count {
      font-size: 11px;
      background: rgba(0,0,0,.08);
      padding: 1px 6px; border-radius: 8px;
    }
    .cat-nav a.active .cat-count { background: rgba(255,255,255,.2); }

    /* sidebar contact */
    .sidebar-contact a {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 10px; border-radius: 7px;
      font-size: 13px; font-weight: 500;
      color: var(--navy);
      background: #f0f4ff;
      margin-bottom: 6px;
      transition: background var(--transition);
    }
    .sidebar-contact a:hover { background: #dde5ff; }

    /* ─────────────────────────────────────────
       MAIN CONTENT
    ───────────────────────────────────────── */
    #main {
      flex: 1;
      min-width: 0;
    }

    /* ─────────────────────────────────────────
       VIEW: LIST
    ───────────────────────────────────────── */
    #view-list { display: block; }
    #view-post { display: none; }

    .list-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    .list-title {
      font-size: 18px; font-weight: 700; color: var(--navy);
    }
    .list-count { font-size: 13px; color: var(--muted); }

    /* post card */
    .post-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 20px 22px;
      margin-bottom: 14px;
      display: flex; gap: 16px;
      cursor: pointer;
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .post-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,.12);
    }
    .post-thumb {
      width: 100px; height: 72px;
      border-radius: 7px;
      background: linear-gradient(135deg, var(--navy) 0%, #2563eb 100%);
      flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,.4); font-size: 28px;
      overflow: hidden;
    }
    .post-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .post-info { flex: 1; min-width: 0; }
    .post-cat-tag {
      display: inline-block;
      font-size: 10px; font-weight: 700;
      padding: 2px 8px; border-radius: 10px;
      background: #eef2ff; color: #3730a3;
      margin-bottom: 5px;
    }
    .post-card-title {
      font-size: 15px; font-weight: 700;
      color: var(--text); line-height: 1.4;
      margin-bottom: 6px;
      overflow: hidden; display: -webkit-box;
      -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    }
    .post-summary {
      font-size: 13px; color: var(--muted);
      overflow: hidden; display: -webkit-box;
      -webkit-line-clamp: 2; -webkit-box-orient: vertical;
      line-height: 1.55;
    }
    .post-meta {
      margin-top: 8px;
      display: flex; align-items: center; gap: 10px;
      font-size: 11px; color: #9ca3af;
    }
    .tag-chip {
      padding: 1px 7px; border-radius: 10px;
      background: #f3f4f6; color: #6b7280;
      font-size: 10px;
    }

    /* empty state */
    .empty-state {
      text-align: center; padding: 60px 0;
      color: var(--muted); font-size: 14px;
    }
    .empty-state .empty-icon { font-size: 40px; margin-bottom: 10px; }

    /* ─────────────────────────────────────────
       VIEW: POST DETAIL
    ───────────────────────────────────────── */
    .post-detail-wrap {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 32px 36px;
    }
    .post-back {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 13px; color: var(--muted);
      margin-bottom: 20px; cursor: pointer;
      transition: color var(--transition);
    }
    .post-back:hover { color: var(--navy); }
    .post-detail-cat {
      display: inline-block; font-size: 11px; font-weight: 700;
      padding: 3px 10px; border-radius: 12px;
      background: var(--navy); color: #fff;
      margin-bottom: 10px;
    }
    .post-detail-title {
      font-size: 22px; font-weight: 700;
      color: var(--navy); line-height: 1.4;
      margin-bottom: 10px;
    }
    .post-detail-meta {
      font-size: 12px; color: var(--muted);
      display: flex; align-items: center; gap: 12px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--border);
      margin-bottom: 28px;
    }
    .tag-list { display: flex; flex-wrap: wrap; gap: 5px; }

    /* ─────────────────────────────────────────
       POST BODY CONTENT STYLES
    ───────────────────────────────────────── */
    .post-body h2 {
      font-size: 19px; font-weight: 700;
      color: var(--navy);
      margin: 36px 0 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--gold);
    }
    .post-body h3 {
      font-size: 16px; font-weight: 700;
      color: var(--navy-dark);
      margin: 24px 0 8px;
    }
    .post-body p { margin-bottom: 14px; }
    .post-body ul { margin-bottom: 14px; }
    .post-body li { margin-bottom: 5px; }
    .post-body strong { color: var(--navy); }
    .post-body em { font-style: normal; color: #b45309; font-weight: 500; }

    /* intro box */
    .intro-box {
      background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
      border-left: 4px solid var(--navy);
      border-radius: 0 var(--radius) var(--radius) 0;
      padding: 18px 20px;
      margin-bottom: 28px;
      font-size: 15px; line-height: 1.75;
    }

    /* standard / info box */
    .standard-box {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px 22px;
      margin: 20px 0;
    }
    .standard-box h3 {
      color: var(--navy);
      border-left: 3px solid var(--gold);
      padding-left: 10px;
      margin-top: 18px;
    }
    .standard-box h3:first-child { margin-top: 0; }

    /* step box */
    .step-box { margin: 20px 0; display: flex; flex-direction: column; gap: 12px; }
    .step {
      display: flex; align-items: flex-start; gap: 14px;
      background: #f0f4ff;
      border-radius: var(--radius);
      padding: 16px 18px;
    }
    .step-num {
      background: var(--navy); color: #fff;
      font-size: 11px; font-weight: 700;
      padding: 3px 10px; border-radius: 20px;
      white-space: nowrap; flex-shrink: 0;
      margin-top: 2px;
    }
    .step-content strong { display: block; margin-bottom: 4px; font-size: 14px; color: var(--navy); }
    .step-content p { margin: 0; font-size: 13px; color: var(--muted); line-height: 1.6; }

    /* timeline */
    .timeline-box { position: relative; padding-left: 28px; margin: 20px 0; }
    .timeline-box::before {
      content: ''; position: absolute;
      left: 9px; top: 8px; bottom: 8px;
      width: 2px; background: var(--border);
    }
    .tl-item { position: relative; margin-bottom: 16px; }
    .tl-item::before {
      content: '';
      position: absolute; left: -23px; top: 5px;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: var(--gold);
      border: 2px solid var(--surface);
      box-shadow: 0 0 0 2px var(--gold);
    }
    .tl-date {
      display: inline-block;
      font-size: 11px; font-weight: 700;
      color: var(--navy);
      background: var(--gold-lt);
      padding: 1px 8px; border-radius: 10px;
      margin-bottom: 3px;
    }
    .tl-item p { font-size: 13px; color: var(--muted); margin: 0; }

    /* FAQ */
    .faq-box { margin: 20px 0; }
    .faq-item {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
      margin-bottom: 8px;
    }
    .faq-q {
      background: #f8fafc;
      padding: 12px 16px;
      font-size: 14px; font-weight: 700;
      color: var(--navy); margin: 0;
    }
    .faq-a {
      padding: 12px 16px;
      font-size: 13px; color: var(--muted);
      margin: 0; line-height: 1.65;
    }

    /* CTA box */
    .cta-box {
      background: linear-gradient(135deg, var(--navy) 0%, #1e3a8a 100%);
      color: #fff;
      border-radius: var(--radius);
      padding: 28px 24px;
      text-align: center;
      margin: 36px 0 0;
    }
    .cta-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
    .cta-box p { font-size: 12px; opacity: .7; margin-bottom: 18px; }
    .cta-btn {
      display: inline-block;
      padding: 12px 28px;
      border-radius: 24px;
      font-size: 14px; font-weight: 700;
      background: var(--gold);
      color: var(--navy);
      margin: 4px 6px;
      transition: opacity var(--transition);
    }
    .cta-btn:hover { opacity: .88; }
    .cta-btn-outline {
      background: transparent;
      border: 2px solid rgba(255,255,255,.5);
      color: #fff;
    }

    /* ─────────────────────────────────────────
       SEARCH RESULTS BAR
    ───────────────────────────────────────── */
    .search-bar-notice {
      background: #fff7ed;
      border: 1px solid #fdba74;
      border-radius: var(--radius);
      padding: 12px 16px;
      margin-bottom: 16px;
      font-size: 13px; color: #92400e;
      display: flex; align-items: center; gap: 8px;
    }
    .search-clear {
      margin-left: auto; cursor: pointer;
      font-size: 12px; color: #b45309; font-weight: 600;
    }

    /* ─────────────────────────────────────────
       MOBILE FLOATING CTA
    ───────────────────────────────────────── */
    #float-cta {
      display: none;
      position: fixed; bottom: 0; left: 0; right: 0;
      z-index: 300;
      background: var(--navy);
      padding: 10px 16px;
      box-shadow: 0 -3px 12px rgba(0,0,0,.2);
    }
    #float-cta a {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      background: var(--gold);
      color: var(--navy);
      font-size: 15px; font-weight: 700;
      border-radius: 10px;
      padding: 12px;
    }

    /* ─────────────────────────────────────────
       MOBILE SIDEBAR OVERLAY
    ───────────────────────────────────────── */
    #sidebar-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(0,0,0,.45);
      z-index: 180;
    }

    /* ─────────────────────────────────────────
       RESPONSIVE
    ───────────────────────────────────────── */
    @media (max-width: 768px) {
      .header-search { display: none; }
      .header-tel span { display: none; }
      .header-tel { padding: 6px 10px; font-size: 16px; }
      .menu-toggle { display: block; }

      #sidebar {
        position: fixed;
        top: 0; left: -260px;
        width: 260px; height: 100dvh;
        overflow-y: auto;
        background: var(--bg);
        z-index: 190;
        padding: 70px 12px 100px;
        transition: left .25s ease;
        border-right: 1px solid var(--border);
      }
      #sidebar.open { left: 0; }
      #sidebar-overlay.open { display: block; }

      #app-wrap { padding: 16px 12px 100px; }

      .post-detail-wrap { padding: 20px 16px; }
      .post-detail-title { font-size: 18px; }
      .post-card { flex-direction: column; gap: 10px; }
      .post-thumb { width: 100%; height: 160px; }

      #float-cta { display: block; }
    }

    @media (max-width: 480px) {
      .post-detail-wrap { padding: 16px 12px; }
      .post-body h2 { font-size: 17px; }
    }

    /* ─────────────────────────────────────────
       이미지 관리 패널
    ───────────────────────────────────────── */
    #img-manager-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      position: fixed;
      right: 20px;
      bottom: 90px;
      z-index: 260;
      padding: 10px 16px;
      background: var(--navy);
      color: #fff;
      border: none;
      border-radius: 24px;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(0,0,0,.28);
      opacity: 0.92;
      transition: opacity .15s, transform .15s;
    }
    #img-manager-toggle:hover { opacity: 1; transform: translateY(-1px); }

    #img-manager-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(0,0,0,.4);
      z-index: 390;
    }
    #img-manager-overlay.open { display: block; }

    #img-manager {
      display: none;
      position: fixed;
      top: 0;
      right: -360px;
      width: 340px;
      max-width: 92vw;
      height: 100dvh;
      overflow-y: auto;
      background: #fff;
      border: none;
      border-left: 1.5px solid var(--border);
      border-radius: 0;
      padding: 20px;
      margin: 0;
      z-index: 400;
      box-shadow: -6px 0 24px rgba(0,0,0,.18);
      transition: right .25s ease;
    }
    #img-manager.open { display: block; right: 0; }

    .img-manager-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--border);
    }
    .img-manager-head h3 {
      font-size: 15px;
      font-weight: 700;
      color: var(--navy);
    }
    .img-manager-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--muted);
      line-height: 1;
    }

    .img-slot-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .img-slot-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
    }
    .img-slot-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: #f8f9fd;
      font-size: 13px;
      font-weight: 700;
      color: var(--navy);
      gap: 10px;
    }
    .img-slot-label { flex: 1; }
    .img-slot-desc {
      font-size: 12px;
      font-weight: 400;
      color: var(--muted);
      margin-top: 2px;
    }
    .img-slot-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }
    .btn-upload-img {
      padding: 5px 12px;
      background: var(--gold);
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 12px;
      font-family: inherit;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
    }
    .btn-upload-img:hover { background: #b8952f; }
    .btn-del-img {
      padding: 5px 10px;
      background: #fee2e2;
      color: #b91c1c;
      border: none;
      border-radius: 5px;
      font-size: 12px;
      font-family: inherit;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
    }
    .btn-del-img:hover { background: #fca5a5; }
    .img-slot-preview {
      padding: 10px 14px;
      min-height: 48px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .img-slot-preview img {
      max-height: 80px;
      border-radius: 4px;
      border: 1px solid var(--border);
    }
    .img-slot-preview .no-img {
      font-size: 12px;
      color: var(--muted);
      font-style: italic;
    }
    .img-slot-preview .has-img {
      font-size: 12px;
      color: #16a34a;
      font-weight: 700;
    }

    /* 본문 내 슬롯 이미지 */
    .post-body img.slot-img {
      width: 100%;
      border-radius: 8px;
      margin: 24px 0;
      display: block;
    }
    .post-body .slot-img-wrap {
      margin: 24px 0;
      text-align: center;
    }
    .post-body .slot-img-wrap img {
      max-width: 100%;
      border-radius: 8px;
    }
    .post-body .slot-img-wrap .slot-caption {
      font-size: 12px;
      color: var(--muted);
      margin-top: 6px;
    }

    /* 잠금 모달 */
    #img-lock-modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.45);
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }
    #img-lock-modal.open { display: flex; }
    .img-lock-box {
      background: #fff;
      border-radius: 12px;
      padding: 28px 24px;
      width: 300px;
      max-width: 90vw;
      text-align: center;
    }
    .img-lock-box h3 { font-size: 16px; margin-bottom: 6px; color: var(--navy); }
    .img-lock-box p  { font-size: 13px; color: var(--muted); margin-bottom: 16px; }
    .img-lock-box input {
      width: 100%;
      border: 1.5px solid var(--border);
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 15px;
      font-family: inherit;
      margin-bottom: 12px;
      text-align: center;
      letter-spacing: 4px;
    }
    .img-lock-box input:focus { outline: none; border-color: var(--navy); }
    .img-lock-btn {
      width: 100%;
      padding: 10px;
      background: var(--navy);
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-family: inherit;
      font-weight: 700;
      cursor: pointer;
      margin-bottom: 8px;
    }
    .img-lock-cancel {
      background: none;
      border: none;
      font-size: 13px;
      color: var(--muted);
      cursor: pointer;
      font-family: inherit;
    }
    .img-lock-error {
      font-size: 13px;
      color: #dc2626;
      margin-top: 6px;
      display: none;
    }
    @media (max-width: 600px) {
      .img-slot-header { flex-direction: column; align-items: flex-start; }
      .img-slot-actions { margin-top: 6px; }
      #img-manager-toggle { right: 12px; bottom: 76px; padding: 9px 14px; font-size: 12px; }
    }
  </style>
</head>
<body>

<!-- ═══════════════════════════════════════════
     HEADER
═══════════════════════════════════════════ -->
<header id="site-header">
  <div class="header-inner">
    <button class="menu-toggle" id="menu-toggle" aria-label="메뉴 열기">☰</button>

    <div class="site-logo" onclick="goHome()">
      <div class="logo-mark">GL</div>
      <div class="logo-text">
        지엘행정사사무소
        <small>식품·축산물 인허가 전문</small>
      </div>
    </div>

    <div class="header-search">
      <input type="text" id="search-input" placeholder="키워드로 글 검색..." />
      <button onclick="doSearch()">🔍</button>
    </div>

    <a href="tel:010-3538-3098" class="header-tel">
      📞 <span>010-3538-3098</span>
    </a>
  </div>
</header>

<!-- sidebar overlay for mobile -->
<div id="sidebar-overlay" onclick="closeSidebar()"></div>

<!-- ═══════════════════════════════════════════
     APP WRAP
═══════════════════════════════════════════ -->
<div id="app-wrap">

  <!-- ── SIDEBAR ── -->
  <aside id="sidebar">

    <!-- Profile -->
    <div class="sidebar-card">
      <div class="profile-avatar">김</div>
      <div class="profile-name">김대운 행정사</div>
      <div class="profile-sub">지엘행정사사무소<br>인천 남동구 | 경력 10년+</div>
      <div class="profile-badges">
        <span class="badge">식품 인허가</span>
        <span class="badge">HACCP</span>
        <span class="badge">이민·비자</span>
      </div>
    </div>

    <!-- Category -->
    <div class="sidebar-card">
      <p class="sidebar-section-title">카테고리</p>
      <ul class="cat-nav" id="cat-nav"></ul>
    </div>

    <!-- Contact -->
    <div class="sidebar-card sidebar-contact">
      <p class="sidebar-section-title">바로가기</p>
      <a href="tel:010-3538-3098">📞 전화 상담</a>
      <a href="http://gladmin.co.kr" target="_blank" rel="noopener">🌐 공식 홈페이지</a>
    </div>

  </aside>

  <!-- ── MAIN ── -->
  <main id="main">

    <!-- LIST VIEW -->
    <div id="view-list">
      <div class="list-header">
        <h1 class="list-title" id="list-title">전체 글</h1>
        <span class="list-count" id="list-count"></span>
      </div>
      <div id="search-notice" style="display:none"></div>
      <div id="post-list"></div>
    </div>

    <!-- POST DETAIL VIEW -->
    <div id="view-post">
      <div class="post-detail-wrap">
        <span class="post-back" onclick="goBack()">← 목록으로</span>
        <div id="post-detail-content"></div>
      </div>
    </div>

  </main>
</div>

<!-- ═══════════════════════════════════════════
     MOBILE FLOATING CTA
═══════════════════════════════════════════ -->
<div id="float-cta">
  <a href="tel:010-3538-3098">📞 010-3538-3098 전화 상담</a>
</div>

<!-- ═══════════════════════════════════════════
     이미지 관리자 (토글 버튼 · 패널 · 잠금모달)
═══════════════════════════════════════════ -->
<button id="img-manager-toggle" onclick="openImgManager()">🖼️ 이미지 관리</button>

<div id="img-manager-overlay" onclick="closeImgManager()"></div>
<div id="img-manager">
  <div class="img-manager-head">
    <h3>🖼️ 이미지 관리자</h3>
    <button class="img-manager-close" onclick="closeImgManager()">✕</button>
  </div>
  <div id="img-manager-body"></div>
</div>

<div id="img-lock-modal">
  <div class="img-lock-box">
    <h3>🔒 이미지 관리자</h3>
    <p>관리자 암호를 입력하세요</p>
    <input type="password" id="img-lock-input" placeholder="암호" />
    <button class="img-lock-btn" onclick="checkImgLock()">확인</button>
    <button class="img-lock-cancel" onclick="closeImgLock()">취소</button>
    <p class="img-lock-error" id="img-lock-error">암호가 올바르지 않습니다.</p>
  </div>
</div>

<!-- ═══════════════════════════════════════════
     SCRIPTS
═══════════════════════════════════════════ -->
<script src="posts.js"></script>
<script>
/* ─────────────────────────────────────────────
   STATE
───────────────────────────────────────────── */
let state = {
  view: 'list',      // 'list' | 'post'
  category: 0,       // 0 = all
  postId: null,
  search: '',
  history: [],       // for back navigation
};

/* ─────────────────────────────────────────────
   INIT — URL PARAMETER ROUTING
───────────────────────────────────────────── */
function init() {
  buildCatNav();

  const params = new URLSearchParams(window.location.search);
  const catParam  = params.get('category');
  const postParam = params.get('post');

  if (postParam) {
    const id = parseInt(postParam, 10);
    openPost(id, false);
  } else if (catParam) {
    selectCategory(parseInt(catParam, 10), false);
  } else {
    renderList();
  }

  // keyboard search
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  // 이미지 맵 로드 (GitHub에 저장된 실제 이미지 정보를 불러와 화면에 반영)
  loadImageMap();

  // 잠금 모달 엔터키 처리
  document.getElementById('img-lock-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkImgLock();
  });
}

/* ─────────────────────────────────────────────
   CATEGORY NAV
───────────────────────────────────────────── */
function buildCatNav() {
  const nav = document.getElementById('cat-nav');
  nav.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const count = cat.id === 0
      ? POSTS.length
      : POSTS.filter(p => p.category === cat.id).length;

    const li  = document.createElement('li');
    const a   = document.createElement('a');
    a.dataset.catId = cat.id;
    a.innerHTML = `${cat.label} <span class="cat-count">${count}</span>`;
    a.onclick = () => { selectCategory(cat.id); closeSidebar(); };
    li.appendChild(a);
    nav.appendChild(li);
  });

  updateActiveCat();
}

function updateActiveCat() {
  document.querySelectorAll('.cat-nav a').forEach(a => {
    a.classList.toggle('active', parseInt(a.dataset.catId) === state.category);
  });
}

/* ─────────────────────────────────────────────
   SELECT CATEGORY
───────────────────────────────────────────── */
function selectCategory(catId, pushHistory = true) {
  if (pushHistory && state.view !== 'list') state.history.push({...state});
  state.category = catId;
  state.search   = '';
  state.view     = 'list';
  state.postId   = null;
  document.getElementById('search-input').value = '';
  updateURL();
  renderList();
  updateActiveCat();
}

/* ─────────────────────────────────────────────
   RENDER LIST
───────────────────────────────────────────── */
function renderList() {
  showView('list');

  let filtered = state.category === 0
    ? [...POSTS]
    : POSTS.filter(p => p.category === state.category);

  if (state.search) {
    const q = state.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q))
    );
  }

  const catLabel = CATEGORIES.find(c => c.id === state.category)?.label || '전체 글';
  document.getElementById('list-title').textContent =
    state.search ? `"${state.search}" 검색 결과` : catLabel;
  document.getElementById('list-count').textContent = `총 ${filtered.length}건`;

  // search notice
  const noticeEl = document.getElementById('search-notice');
  if (state.search) {
    noticeEl.style.display = 'block';
    noticeEl.innerHTML = `
      <div class="search-bar-notice">
        🔍 <strong>"${state.search}"</strong> 검색 결과입니다.
        <span class="search-clear" onclick="clearSearch()">✕ 검색 취소</span>
      </div>`;
  } else {
    noticeEl.style.display = 'none';
  }

  // update page meta for list
  updateMeta(catLabel + ' | 지엘행정사사무소 블로그',
    `지엘행정사사무소의 ${catLabel} 관련 실무 정보 모음입니다.`);

  const listEl = document.getElementById('post-list');
  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <p>아직 등록된 글이 없습니다.</p>
      </div>`;
    return;
  }

  listEl.innerHTML = filtered.map(post => {
    const catLabel = CATEGORIES.find(c => c.id === post.category)?.label || '';
    const tagsHtml = (post.tags || []).slice(0, 3)
      .map(t => `<span class="tag-chip">#${t}</span>`).join('');
    const thumbHtml = post.thumbnail
      ? `<img src="${post.thumbnail}" alt="${escHtml(post.title)}" />`
      : '📄';

    return `
      <div class="post-card" onclick="openPost(${post.id})">
        <div class="post-thumb" data-thumb-slot="thumb-${post.id}">${thumbHtml}</div>
        <div class="post-info">
          <span class="post-cat-tag">${escHtml(catLabel)}</span>
          <p class="post-card-title">${escHtml(post.title)}</p>
          <p class="post-summary">${escHtml(post.summary)}</p>
          <div class="post-meta">
            <span>${post.date}</span>
            <div class="tag-list">${tagsHtml}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  applyImageSlots();
}

/* ─────────────────────────────────────────────
   OPEN POST
───────────────────────────────────────────── */
function openPost(postId, pushHistory = true) {
  const post = POSTS.find(p => p.id === postId);
  if (!post) { renderList(); return; }

  if (pushHistory) state.history.push({...state});
  state.view   = 'post';
  state.postId = postId;
  updateURL();
  showView('post');

  const catLabel = CATEGORIES.find(c => c.id === post.category)?.label || '';
  const tagsHtml = (post.tags || [])
    .map(t => `<span class="tag-chip">#${t}</span>`).join('');

  document.getElementById('post-detail-content').innerHTML = `
    <span class="post-detail-cat">${escHtml(catLabel)}</span>
    <h1 class="post-detail-title">${escHtml(post.title)}</h1>
    <div class="post-detail-meta">
      <span>📅 ${post.date}</span>
      <span>✍️ 김대운 행정사</span>
      <div class="tag-list">${tagsHtml}</div>
    </div>
    ${post.body}
  `;

  // dynamic SEO meta
  updateMeta(post.title + ' | 지엘행정사사무소', post.summary);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  applyImageSlots();
  // 이미지 관리 패널이 열려 있다면 새 글에 맞춰 슬롯 목록을 다시 그림
  if (document.getElementById('img-manager').classList.contains('open')) {
    renderImgManagerBody();
  }
}

/* ─────────────────────────────────────────────
   NAVIGATION HELPERS
───────────────────────────────────────────── */
function goBack() {
  if (state.history.length > 0) {
    const prev = state.history.pop();
    Object.assign(state, prev);
  } else {
    state.view     = 'list';
    state.postId   = null;
  }
  updateURL();
  if (state.view === 'post') {
    openPost(state.postId, false);
  } else {
    renderList();
  }
}

function goHome() {
  state = { view: 'list', category: 0, postId: null, search: '', history: [] };
  document.getElementById('search-input').value = '';
  updateURL();
  renderList();
  updateActiveCat();
}

/* ─────────────────────────────────────────────
   SEARCH
───────────────────────────────────────────── */
function doSearch() {
  const q = document.getElementById('search-input').value.trim();
  if (!q) return;
  state.search   = q;
  state.category = 0;
  state.view     = 'list';
  state.postId   = null;
  updateActiveCat();
  renderList();
}

function clearSearch() {
  state.search = '';
  document.getElementById('search-input').value = '';
  renderList();
}

/* ─────────────────────────────────────────────
   VIEW SWITCH
───────────────────────────────────────────── */
function showView(which) {
  document.getElementById('view-list').style.display = which === 'list' ? 'block' : 'none';
  document.getElementById('view-post').style.display = which === 'post'  ? 'block' : 'none';
}

/* ─────────────────────────────────────────────
   DYNAMIC SEO META
───────────────────────────────────────────── */
function updateMeta(title, desc) {
  document.title = title;
  document.getElementById('meta-desc').setAttribute('content', desc);
  document.getElementById('og-title').setAttribute('content', title);
  document.getElementById('og-desc').setAttribute('content', desc);
}

/* ─────────────────────────────────────────────
   URL SYNC
───────────────────────────────────────────── */
function updateURL() {
  const params = new URLSearchParams();
  if (state.view === 'post' && state.postId) {
    params.set('post', state.postId);
  } else if (state.category !== 0) {
    params.set('category', state.category);
  }
  const newUrl = params.toString()
    ? `${location.pathname}?${params.toString()}`
    : location.pathname;
  history.pushState(null, '', newUrl);
}

window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const catParam  = params.get('category');
  const postParam = params.get('post');
  if (postParam) {
    openPost(parseInt(postParam, 10), false);
  } else if (catParam) {
    selectCategory(parseInt(catParam, 10), false);
  } else {
    state = { view: 'list', category: 0, postId: null, search: '', history: [] };
    renderList();
    updateActiveCat();
  }
});

/* ─────────────────────────────────────────────
   MOBILE SIDEBAR
───────────────────────────────────────────── */
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
});
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

/* ─────────────────────────────────────────────
   UTIL
───────────────────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ═══════════════════════════════════════════════════════════
   이미지 관리자 (GitHub 저장소 연동)
   ─────────────────────────────────────────────────────────
   동작 원리
   1) 업로드한 이미지는 이 저장소(repo)의 images/ 폴더에 실제로
      저장되고, image-map.json 파일에 "슬롯이름 → 이미지주소"가
      기록됩니다. 즉 브라우저 저장(localStorage)이 아니라 GitHub
      저장소 자체에 저장되므로, 홈페이지에 방문하는 모든 사람에게
      동일하게 이미지가 보입니다.
   2) 최초 1회, 우측 패널 하단의 "GitHub 연동 설정"에서
      - GitHub 계정명(owner)
      - 저장소 이름(repo)
      - 브랜치명(보통 main)
      - Personal Access Token (repo 쓰기 권한 필요)
      를 입력해두면 그 다음부터는 업로드 버튼만 누르면 됩니다.
   3) 암호창은 아무나 이미지가 바뀌지 않도록 막는 간단한 잠금
      장치입니다. 아래 IMG_LOCK_PASSWORD 값을 원하는 암호로
      바꿔서 사용하세요.
═══════════════════════════════════════════════════════════ */

const IMG_LOCK_PASSWORD = "gladmin1234"; // ← 원하는 암호로 변경하세요

let ghConfig = JSON.parse(localStorage.getItem('gh_config') || 'null');
let imageMap = {};
let imgManagerUnlocked = sessionStorage.getItem('img_unlocked') === '1';

/* ── 이미지 맵 로드 & 화면 반영 ── */
async function loadImageMap() {
  try {
    const res = await fetch('./image-map.json?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      imageMap = await res.json();
    } else {
      imageMap = {};
    }
  } catch (e) {
    imageMap = {};
  }
  applyImageSlots();
}

function applyImageSlots() {
  // 본문 내 이미지 슬롯 (data-img-slot)
  document.querySelectorAll('[data-img-slot]').forEach(el => {
    const key = el.dataset.imgSlot;
    const url = imageMap[key];
    el.innerHTML = url ? `<img src="${url}" alt="${escHtml(key)}" loading="lazy">` : '';
  });
  // 목록 썸네일 (data-thumb-slot) — 이미지가 없으면 기존 아이콘/썸네일 유지
  document.querySelectorAll('[data-thumb-slot]').forEach(el => {
    const key = el.dataset.thumbSlot;
    const url = imageMap[key];
    if (url) el.innerHTML = `<img src="${url}" alt="thumbnail">`;
  });
}

/* ── 잠금 모달 ── */
function openImgManager() {
  if (!imgManagerUnlocked) {
    document.getElementById('img-lock-modal').classList.add('open');
    document.getElementById('img-lock-input').value = '';
    document.getElementById('img-lock-error').style.display = 'none';
    setTimeout(() => document.getElementById('img-lock-input').focus(), 50);
  } else {
    showImgManagerPanel();
  }
}

function checkImgLock() {
  const val = document.getElementById('img-lock-input').value;
  if (val === IMG_LOCK_PASSWORD) {
    imgManagerUnlocked = true;
    sessionStorage.setItem('img_unlocked', '1');
    closeImgLock();
    showImgManagerPanel();
  } else {
    document.getElementById('img-lock-error').style.display = 'block';
  }
}

function closeImgLock() {
  document.getElementById('img-lock-modal').classList.remove('open');
}

/* ── 패널 열기/닫기 ── */
function showImgManagerPanel() {
  document.getElementById('img-manager').classList.add('open');
  document.getElementById('img-manager-overlay').classList.add('open');
  renderImgManagerBody();
}
function closeImgManager() {
  document.getElementById('img-manager').classList.remove('open');
  document.getElementById('img-manager-overlay').classList.remove('open');
}

/* ── 패널 내용 렌더링 ── */
function renderImgManagerBody() {
  const body = document.getElementById('img-manager-body');

  if (!ghConfig || !ghConfig.token || !ghConfig.owner || !ghConfig.repo) {
    body.innerHTML = renderGhSetupForm();
    return;
  }

  if (state.view !== 'post' || !state.postId) {
    body.innerHTML = `
      <p style="font-size:13px;color:var(--muted);line-height:1.7;">
        글 목록 화면에서는 썸네일만 관리할 수 있습니다.<br>
        본문 이미지를 관리하려면 글을 먼저 열어주세요.
      </p>
      <div class="img-slot-list" style="margin-top:14px;">
        ${renderSlotRow({ key: `thumb-all`, label: '(참고) 각 글의 썸네일', desc: '글을 열면 개별적으로 관리할 수 있습니다.' }, true)}
      </div>
      ${renderGhSettingsLink()}
    `;
    return;
  }

  const post = POSTS.find(p => p.id === state.postId);
  const slots = [
    { key: `thumb-${post.id}`, label: '썸네일 이미지', desc: '목록 화면에 표시되는 대표 이미지' },
    ...(post.imageSlots || [])
  ];

  body.innerHTML = `
    <p style="font-size:12px;color:var(--muted);margin-bottom:12px;">
      현재 글: <strong style="color:var(--navy);">${escHtml(post.title)}</strong>
    </p>
    <div class="img-slot-list">
      ${slots.map(s => renderSlotRow(s)).join('')}
    </div>
    ${renderGhSettingsLink()}
  `;
}

function renderSlotRow(slot, disabled = false) {
  const url = imageMap[slot.key];
  return `
    <div class="img-slot-item">
      <div class="img-slot-header">
        <div class="img-slot-label">${escHtml(slot.label)}<div class="img-slot-desc">${escHtml(slot.desc || '')}</div></div>
        <div class="img-slot-actions">
          <label class="btn-upload-img" style="cursor:${disabled ? 'default' : 'pointer'};opacity:${disabled ? .5 : 1};">
            업로드
            <input type="file" accept="image/*" style="display:none" ${disabled ? 'disabled' : ''} onchange="handleSlotUpload('${slot.key}', this)">
          </label>
          ${url && !disabled ? `<button class="btn-del-img" onclick="handleSlotDelete('${slot.key}')">삭제</button>` : ''}
        </div>
      </div>
      <div class="img-slot-preview" id="preview-${slot.key}">
        ${url ? `<img src="${url}"><span class="has-img">등록됨</span>` : `<span class="no-img">이미지 없음</span>`}
      </div>
    </div>
  `;
}

function renderGhSettingsLink() {
  return `<p style="margin-top:16px;text-align:right;">
    <a style="font-size:12px;color:var(--muted);text-decoration:underline;cursor:pointer;" onclick="showGhSetupForm()">⚙️ GitHub 연동 설정</a>
  </p>`;
}

function showGhSetupForm() {
  document.getElementById('img-manager-body').innerHTML = renderGhSetupForm();
}

function renderGhSetupForm() {
  const c = ghConfig || {};
  return `
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:14px;line-height:1.7;">
      GitHub Pages 저장소 정보를 입력하면, 업로드한 이미지가 저장소에 자동으로 저장되어
      모든 방문자에게 정상적으로 표시됩니다.<br>
      토큰은 이 브라우저에만 저장되며 서버로 전송되지 않습니다.
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <input id="gh-owner" placeholder="GitHub 계정명 (owner)" value="${c.owner || ''}" style="padding:9px 10px;border:1px solid var(--border);border-radius:6px;font-family:inherit;">
      <input id="gh-repo" placeholder="저장소 이름 (repo)" value="${c.repo || ''}" style="padding:9px 10px;border:1px solid var(--border);border-radius:6px;font-family:inherit;">
      <input id="gh-branch" placeholder="브랜치 (기본: main)" value="${c.branch || 'main'}" style="padding:9px 10px;border:1px solid var(--border);border-radius:6px;font-family:inherit;">
      <input id="gh-token" type="password" placeholder="Personal Access Token" value="${c.token || ''}" style="padding:9px 10px;border:1px solid var(--border);border-radius:6px;font-family:inherit;">
      <button class="btn-upload-img" style="width:100%;padding:10px;" onclick="saveGhConfig()">저장</button>
      ${ghConfig && ghConfig.token ? `<button class="btn-del-img" style="width:100%;padding:9px;" onclick="renderImgManagerBody()">취소</button>` : ''}
    </div>
  `;
}

function saveGhConfig() {
  const owner  = document.getElementById('gh-owner').value.trim();
  const repo   = document.getElementById('gh-repo').value.trim();
  const branch = document.getElementById('gh-branch').value.trim() || 'main';
  const token  = document.getElementById('gh-token').value.trim();

  if (!owner || !repo || !token) {
    alert('계정명, 저장소 이름, 토큰은 필수입니다.');
    return;
  }

  ghConfig = { owner, repo, branch, token };
  localStorage.setItem('gh_config', JSON.stringify(ghConfig));
  renderImgManagerBody();
}

/* ── GitHub API 헬퍼 ── */
async function ghApi(path, options = {}) {
  const url = `https://api.github.com/repos/${ghConfig.owner}/${ghConfig.repo}/contents/${path}`;
  return fetch(url, {
    ...options,
    headers: {
      'Authorization': `token ${ghConfig.token}`,
      'Accept': 'application/vnd.github+json',
      ...(options.headers || {})
    }
  });
}

async function getFileSha(path) {
  try {
    const res = await ghApi(`${path}?ref=${ghConfig.branch}`);
    if (res.status === 200) {
      const data = await res.json();
      return data.sha;
    }
  } catch (e) { /* 파일이 없으면 무시 */ }
  return null;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result.split(',')[1]);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

/* ── 이미지 업로드 ── */
async function handleSlotUpload(slotKey, inputEl) {
  const file = inputEl.files[0];
  if (!file) return;
  if (!ghConfig || !ghConfig.token) { alert('먼저 GitHub 연동 설정을 완료해주세요.'); return; }

  const previewEl = document.getElementById(`preview-${slotKey}`);
  if (previewEl) previewEl.innerHTML = `<span class="no-img">업로드 중...</span>`;

  try {
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    const imgPath = `images/${slotKey}.${ext}`;
    const base64 = await fileToBase64(file);

    const existingSha = await getFileSha(imgPath);
    const putRes = await ghApi(imgPath, {
      method: 'PUT',
      body: JSON.stringify({
        message: `이미지 업로드: ${slotKey}`,
        content: base64,
        branch: ghConfig.branch,
        ...(existingSha ? { sha: existingSha } : {})
      })
    });
    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || '이미지 업로드 실패');
    }

    const rawUrl = `https://raw.githubusercontent.com/${ghConfig.owner}/${ghConfig.repo}/${ghConfig.branch}/${imgPath}`;
    imageMap[slotKey] = rawUrl + `?v=${Date.now()}`;
    await saveImageMap();

    applyImageSlots();
    renderImgManagerBody();
  } catch (e) {
    alert('업로드 중 오류가 발생했습니다.\n' + e.message);
    renderImgManagerBody();
  }
}

/* ── 이미지 삭제 (매핑만 제거, 파일은 저장소에 남습니다) ── */
async function handleSlotDelete(slotKey) {
  if (!confirm('이 슬롯에서 이미지를 제거하시겠습니까?\n(저장소의 이미지 파일 자체는 삭제되지 않습니다)')) return;
  try {
    delete imageMap[slotKey];
    await saveImageMap();
    applyImageSlots();
    renderImgManagerBody();
  } catch (e) {
    alert('삭제 중 오류가 발생했습니다.\n' + e.message);
  }
}

/* ── image-map.json 저장 ── */
async function saveImageMap() {
  const path = 'image-map.json';
  const sha = await getFileSha(path);
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(imageMap, null, 2))));
  const res = await ghApi(path, {
    method: 'PUT',
    body: JSON.stringify({
      message: '이미지 맵 업데이트',
      content,
      branch: ghConfig.branch,
      ...(sha ? { sha } : {})
    })
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.message || '이미지 맵 저장 실패');
  }
}

/* ─────────────────────────────────────────────
   START
───────────────────────────────────────────── */
init();
</script>
</body>
</html>
