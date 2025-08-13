## 🔗 빠른 링크
- 📑 기획서(피그마 슬라이드): https://www.figma.com/slides/w2F4dHtW2v49EIQjht4CZz/%EB%B6%88%ED%83%9C%EC%9A%B0%EC%A1%B0_1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_ppt?node-id=45-7&t=s2V9KC2eaol5uiNv-1

- 🎨 디자인 원본(피그마): https://www.figma.com/design/mNXabWwo6hMDaMMnCI31Xf/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%84%A4%EC%8A%AC%EB%A0%88%EB%94%94%EC%9E%90%EC%9D%B8?node-id=118-4&t=INpKFc1KKtJtadsd-1

---


# Nestlé Website Renewal
> HTML/CSS/JS 정적 웹사이트 리뉴얼 프로젝트

## 목차
- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [주요 기능](#주요-기능)
- [페이지 맵](#페이지-맵)
- [빠른 시작](#빠른-시작)
- [개발 가이드](#개발-가이드)
- [빌드 & 배포](#빌드--배포)
- [브라우저 지원](#브라우저-지원)
- [품질 체크리스트](#품질-체크리스트)
- [크레딧](#크레딧)

---

## 1. 프로젝트 개요
Nestlé 브랜드 웹사이트를 **정적 페이지(HTML/CSS/JS)** 로 리뉴얼한 프로젝트입니다. 브랜드 스토리 전달력과 제품 가독성을 높이기 위해 **간결한 레이아웃, 대조가 뚜렷한 타이포, 대형 히어로 이미지/영상**을 활용했습니다.  
디렉터리 구성은 `index.html` 과 `css/`, `js/`, `images/`, `video/` 로 나뉘며, 간단한 스크립트로 내비게이션, 슬라이더 등 인터랙션을 제공합니다.

- **주요 기술**: HTML5, CSS3, JavaScript(ES6)
- **디자인 목표**: 브랜드 아이덴티티 반영, 접근성(명도 대비/키보드 내비게이션), 반응형 레이아웃
- **성과 지표 예시**: LCP 2.5s 이내, CLS 0.1 이하, Lighthouse 90+ (Performance/Accessibility/SEO)

---

### 1.1 👥 팀원

| 이름 | 역할 | 주요 담당 | GitHub | 연락 |
| --- | --- | --- | --- | --- |
| 장원석 | 팀장 · 공통 | 프로젝트 기획, 메인 페이지 제작 | [@timcho19](https://github.com/timcho19) | timcho4589@gmail.com |
| 박경선 | 공통 | 서브 페이지(제품/브랜드/ESG) 제작 | [@Ha-im](https://github.com/Ha-im) | gungsun1@naver.com |
| 조아랑 | 공통 | 디자인 시안 제작, 반응형 레이아웃 설계 | [@likerang](https://github.com/likerang) | like_rang@naver.com |
| 박연미 | 공통 | 디자인 시안 제작, 반응형 레이아웃 설계 | - | - |

---
### 1.2 🗓️ 마일스톤

```mermaid
gantt
    title 네슬레 간트 차트
    dateFormat  YYYY-MM-DD
    excludes    weekends


    section 기획/설계
    자료조사·방향설정           :a1, 2025-04-07, 4d
    스케치/스토리보드           :a2, after a1, 5d
    발표자료                   :a3, after a2, 1d
    스타일 가이드              :a4, after a3, 3d
    Figma 와이어·디자인        :a5, after a4, 7d


    section 구현(핵심)
    컨벤션 구축 / 파트 분배     :b1, 2025-04-28, 2d
    파트별 코딩           :b2, after b1, 7d


    section 품질
    SEO/OG·성능·접근성         :c1, 2025-05-04, 2d
    테스트(E2E)·에러관측       :c2, after c1, 2d

    section 릴리스
    문서화·시연자료 :d1, 2025-05-07, 1d
```

---

## 2. 🎯 주요 기능
- **헤더/내비게이션**: 스티키 헤더, 모바일 메뉴 토글
- **히어로 섹션**: 대형 이미지/동영상 배경, 핵심 메시지
- **제품 소개**: 카드 레이아웃, 호버 인터랙션, 간단한 필터/탭
- **스토리/ESG 섹션**: 브랜드 가치 및 지속가능성 소개
- **푸터**: 약관/개인정보/소셜 링크
- **접근성 배려**: 시맨틱 마크업, 스킵 링크, 대체 텍스트, 명도 대비

---

## 3. 데이터 흐름

```mermaid
sequenceDiagram
    actor User as 사용자
    participant Browser as 브라우저
    participant Server as 정적서버

    User->>Browser: 사이트 접속
    Browser->>+Server: HTML/CSS/JS 요청
    Server-->>Browser: 파일 전송
    Browser->>Browser: DOM 렌더링
    
    Browser->>+Server: 이미지/비디오 요청
    Server-->>Browser: 미디어 전송
    
    User->>Browser: 메뉴 클릭
    Browser->>Browser: 토글 처리
    
    User->>Browser: 제품 카드 클릭
    Browser->>Browser: 인터랙션 처리
    
    User->>Browser: 슬라이더 조작
    Browser->>Browser: 애니메이션 실행
```

---

## 4. 폴더 구조
```
/ (repo root)
├─ index.html          # 진입점
├─ css/                # 스타일 시트 (reset, layout, components 등)
├─ js/                 # 스크립트 (nav, carousel, modal 등)
├─ images/             # 이미지 자산 (logo, 제품, 배너)
└─ video/              # 히어로/배경 영상 등
```
> 실제 리포지토리 내에는 `index.html`, `css/`, `js/`, `images/`, `video/` 폴더가 포함되어 있습니다.

---
## 5. 아키텍쳐 
```mermaid

flowchart TD
    %% 사용자 진입
    START([사용자 접속]):::start
    
    %% 메인 페이지 로드
    LOAD[index.html 로드]
    
    %% 기본 자원 로딩
    CSS[CSS 스타일시트 로딩]
    JS[JavaScript 로딩]
    
    %% 메인 페이지 섹션들
    subgraph MAIN_PAGE[메인 페이지 구성]
        HEADER[헤더/네비게이션]
        HERO[히어로 섹션]
        PRODUCTS[제품 하이라이트]
        STORY[브랜드 스토리]
        NEWS[뉴스/프로모션]
        FOOTER[푸터]
    end
    
    %% 정적 자산
    subgraph ASSETS[정적 자산]
        IMAGES[제품 이미지]
        VIDEOS[배경 동영상]
        LOGOS[로고/아이콘]
    end
    
    %% 사용자 인터랙션
    subgraph INTERACTIONS[사용자 인터랙션]
        NAV_TOGGLE[모바일 메뉴 토글]
        CAROUSEL[제품 슬라이더]
        HOVER[호버 효과]
        SCROLL[스크롤 애니메이션]
    end
    
    %% 기본 흐름
    START --> LOAD --> CSS --> JS
    JS --> HEADER
    JS --> HERO
    JS --> PRODUCTS
    JS --> STORY  
    JS --> NEWS
    JS --> FOOTER
    
    %% 자산 로딩
    HERO --> VIDEOS
    PRODUCTS --> IMAGES
    HEADER --> LOGOS
    
    %% 인터랙션 연결
    HEADER --> NAV_TOGGLE
    PRODUCTS --> CAROUSEL
    STORY --> HOVER
    HERO --> SCROLL
    
    %% 렌더링 완료
    HEADER --> RENDER[페이지 렌더링 완료]
    HERO --> RENDER
    PRODUCTS --> RENDER
    STORY --> RENDER
    NEWS --> RENDER
    FOOTER --> RENDER
    
    %% 스타일 정의
    classDef start fill:#e0f2fe,stroke:#0284c7,color:#075985
    classDef section fill:#fce7f3,stroke:#db2777,color:#831843
    classDef asset fill:#fef9c3,stroke:#f59e0b,color:#92400e
    classDef interaction fill:#e6fffa,stroke:#38b2ac,color:#285e61
    classDef endStyle fill:#f0fdf4,stroke:#22c55e,color:#15803d

```
---

## 6. 개발 환경 & 실행 방법
로컬에서 바로 열람하거나, VS Code **Live Server** 확장으로 개발합니다.

### 1) 의존성 없음 (정적 프로젝트)
```bash
# 클론
git clone https://github.com/likerang/Renewal_project_Nestle.git
cd Renewal_project_Nestle

# 바로 열기
# macOS
open index.html

# Windows
start index.html
```

### 2) VS Code Live Server (권장)
1. VS Code에서 폴더 열기
2. 확장 탭에서 **Live Server** 설치
3. `index.html` 우클릭 → **Open with Live Server**

---

## 7. 빌드 & 배포
정적 사이트이므로 **정적 호스팅**을 사용합니다.

- **GitHub Pages**  
  - Settings → Pages → Branch 선택 → 저장  
  - 기본 도메인: `https://timcho19.github.io/Renewal_project_Nestle/`

---

## 8. 향후 개선 사항

- 다국어(i18n) 지원
- 반응형 개선: 모바일/태블릿 최적화 강화
- 서브페이지 구현
- CSS 변수/SCSS 적용으로 유지보수성 강화
- JavaScript 모듈화 및 코드 최적화
- 이미지 최적화로 로딩 속도 향상


---

## 9. 제작 후기

이번 프로젝트를 통해 HTML, CSS, Javascript를 사용하여 웹 페이지를 제작할 때 필요한 점을 배울 수 있었습니다.
더하여, 팀원들과 협력하여 프로젝트를 진행하며, 팀원 간의 협업 경험을 쌓을 수 있었고 기획부터 구현까지 방향성에 맞게 잘 구현한 것 같습니다.

---

## 10. 미리보기
[![기획서 미리보기](./images/readme/figma-slides-thumb.png)](https://www.figma.com/slides/w2F4dHtW2v49EIQjht4CZz/%EB%B6%88%ED%83%9C%EC%9A%B0%EC%A1%B0_1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_ppt?node-id=45-7&t=s2V9KC2eaol5uiNv-1 "피그마 슬라이드로 이동")
[![디자인 미리보기](./images/readme/figma-design-thumb.png)](https://www.figma.com/design/mNXabWwo6hMDaMMnCI31Xf/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%84%A4%EC%8A%AC%EB%A0%88%EB%94%94%EC%9E%90%EC%9D%B8?node-id=118-4&t=INpKFc1KKtJtadsd-1 "피그마 디자인으로 이동")

## 10.1크레딧
- 디자인/기획: 팀원 공통
- 개발: 장원석, 박경선, 박연미, 조아랑
- 작업 기간: *2025-04-07 ~ 2025-05-07*
---
