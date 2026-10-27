---
version: alpha
name: Study Journal — Build Log
description: 직접 만들고 실험하며 배운 과정을 기록하는 한국어 개발 블로그
colors:
  primary: "#F2D34F"
  primary-hover: "#E4C43C"
  on-primary: "#202020"
  background: "#FFFDF5"
  surface: "#FFFFFF"
  foreground: "#202020"
  secondary: "#595959"
  subtle: "#F0EEE6"
  border: "#202020"
  control-border: "#202020"
  link: "#2448B1"
  link-hover: "#193582"
  focus: "#2448B1"
  danger: "#A12B25"
  dark-primary: "#F2D34F"
  dark-primary-hover: "#E4C43C"
  dark-on-primary: "#202020"
  dark-background: "#191919"
  dark-surface: "#252525"
  dark-foreground: "#F5F3EB"
  dark-secondary: "#BDBBB3"
  dark-subtle: "#303030"
  dark-border: "#A6A49D"
  dark-control-border: "#A6A49D"
  dark-link: "#A9BDFF"
  dark-link-hover: "#CCD8FF"
  dark-focus: "#A9BDFF"
  dark-danger: "#FFB4AB"
typography:
  h1:
    fontFamily: Pretendard Variable
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Pretendard Variable
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: -0.02em
  h2:
    fontFamily: Pretendard Variable
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: -0.01em
  post-title:
    fontFamily: Pretendard Variable
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: -0.01em
  post-title-mobile:
    fontFamily: Pretendard Variable
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: -0.01em
  body:
    fontFamily: Pretendard Variable
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0em
  summary:
    fontFamily: Pretendard Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  label:
    fontFamily: Pretendard Variable
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0em
  metadata:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  code:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
rounded:
  sm: 0px
  md: 0px
spacing:
  xs: 4px
  sm: 8px
  compact: 12px
  md: 16px
  lg: 24px
  xl: 32px
  section: 48px
  section-desktop: 64px
  container: 1080px
  reading: 720px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  button-primary-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  button-primary-dark-hover:
    backgroundColor: "{colors.dark-primary-hover}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  search-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.summary}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  search-input-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-foreground}"
    typography: "{typography.summary}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  tag:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  tag-dark:
    backgroundColor: "{colors.dark-subtle}"
    textColor: "{colors.dark-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  record-type:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  record-type-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
---

## Overview

**선택 방향: 빌드 로그 — 만들고, 막히고, 해결하며 쌓는 개발 기록.** 학습·개발 기록 블로그라는 목적과 Study Journal 이름은 유지한다. 굵은 제목, 각진 블록, 선명한 경계, 노란 강조 면과 파란 링크로 작업 일지의 개성을 만든다. 독자가 무엇을 시도했고 배웠는지 먼저 파악하도록 한다.

UI UX Pro Max의 `brutalism` 자료에서 기술 블로그에 적합한 굵은 글자·0px 모서리·2~4px 경계·즉시 상태 전환을 채택했다. 일반 생성 결과의 FAQ 구성과 OLED 테마는 목적에 맞지 않아 채택하지 않았다. 한국어 글꼴·색상값·읽기 폭·기록 유형은 프로젝트에 맞춰 정의했다.

기존 YAML 토큰 + Markdown 설명 형식을 유지하는 향후 구현 기준이다. 현재 화면이 이미 이 규칙을 따른다는 의미는 아니다. 이번에는 DESIGN.md만 수정하며 실제 화면·데이터·글꼴·의존성은 후속 구현 대상이다.

## Colors

기본 토큰은 라이트, `dark-` 토큰은 같은 역할의 다크 값이다. 구현 시 역할별 의미 토큰에 연결한다. Primary는 노란 강조 면, Link는 파란 텍스트 링크다.

| 역할 | Light | Dark | 적용 |
|---|---|---|---|
| Background | #FFFDF5 | #191919 | 페이지 바탕 |
| Surface | #FFFFFF | #252525 | 글 블록·입력창·메뉴·코드 |
| Foreground | #202020 | #F5F3EB | 제목·본문·아이콘 |
| Secondary | #595959 | #BDBBB3 | 요약·날짜·읽기 시간·placeholder |
| Primary | #F2D34F | #F2D34F | 주요 버튼·기록 유형·선택 면 |
| Primary hover | #E4C43C | #E4C43C | 노란 면 hover·pressed |
| On primary | #202020 | #202020 | 노란 면 위 글자·아이콘·경계 |
| Subtle | #F0EEE6 | #303030 | 보조 태그·비활성 면 |
| Border / Control border | #202020 | #A6A49D | 구조·버튼·입력창 경계 |
| Link / Focus | #2448B1 | #A9BDFF | 링크·포커스 |
| Link hover | #193582 | #CCD8FF | 링크 hover·pressed |
| Danger | #A12B25 | #FFB4AB | 오류 문구·경계 |

노란 면은 주요 행동과 기록 유형에 제한한다. 밝은 배경 위 노란 글자는 사용하지 않는다. 노란 면 위에서는 두 테마 모두 On primary 글자와 경계를 사용한다. 해당 면의 링크도 On primary와 밑줄을 사용한다. 노란 면 위 포커스 링 역시 On primary로 지정한다.

불투명 hex의 상대 휘도로 계산한 대비다. 실제 화면 검수 결과는 아니다.

| 조합 | 대비 |
|---|---:|
| Light Foreground / Background | 16.00:1 |
| Light Secondary / Background | 6.88:1 |
| Light Link / Background | 7.82:1 |
| On primary / Primary (공통) | 11.02:1 |
| Dark Foreground / Background | 15.83:1 |
| Dark Secondary / Surface | 7.97:1 |
| Dark Link / Surface | 8.33:1 |
| Light Control border / Surface | 16.29:1 |
| Dark Control border / Surface | 6.14:1 |
| Light Danger / Surface | 7.27:1 |
| Dark Danger / Surface | 9.03:1 |

모든 실제 텍스트 조합은 최소 4.5:1, 컨트롤 경계·포커스는 인접 배경 대비 최소 3:1로 검수한다. 투명도·색상 혼합을 추가하면 재계산한다. 테마는 시스템/라이트/다크로 제공하고 첫 방문은 OS 설정을 따른다. 명시 선택을 저장하고 시스템 선택 중 OS 변화도 반영한다. 초기 깜빡임을 방지하며 저장 불가 환경에서도 읽기와 선택은 가능해야 한다.

## Typography

한국어 제목·본문은 Pretendard Variable, 코드·영문 기술 식별자·날짜 숫자·영구 글 번호는 JetBrains Mono를 사용한다. `분 읽기`와 한국어 라벨은 Pretendard다. 본문 전체를 고정폭으로 바꾸지 않는다.

| 역할 | Desktop / Mobile | 굵기 | 행간 | 자간 |
|---|---|---:|---|---|
| H1 | 48 / 32px | 800 | 1.2 / 1.3 | -0.02em |
| H2 | 24 / 24px | 700 | 1.4 | -0.01em |
| 글 제목 | 26 / 22px | 700 | 1.4 / 1.45 | -0.01em |
| 본문·소개 | 18 / 18px | 400 | 1.8 | 0 |
| 요약·입력 | 16 / 16px | 400 | 1.7 | 0 |
| 버튼·필터·태그 | 14 / 14px | 600 | 1.5 | 0 |
| 날짜·번호 | 14 / 14px | 400 | 1.6 | 0 |
| 코드 | 15 / 15px | 400 | 1.7 | 0 |

기본 루트 16px 기준이며 구현에서는 rem으로 변환한다. H1은 3rem/2rem, 본문은 1.125rem이다. 한글은 어절 단위로 줄바꿈하고 긴 URL·식별자에는 별도 감싸기 규칙을 둔다. 제목·요약은 말줄임과 줄 수 제한 없이 표시하며 모바일에서도 본문 크기를 줄이지 않는다.

본문 fallback은 `"Pretendard Variable", Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`, 코드 fallback은 `"JetBrains Mono", "SFMono-Regular", Consolas, "Pretendard Variable", monospace`다. 글꼴은 로컬 제공하고 로딩 중 대체 글꼴로 읽을 수 있게 한다. 날짜는 `2026.10.04`, 읽기 시간은 `5분 읽기`로 표시한다.

## Spacing

간격 체계는 **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64px**다.

| 관계 | Mobile | Desktop (768px 이상) |
|---|---:|---:|
| 페이지 좌우 패딩 | 20px | 32px |
| 페이지 상하 패딩 | 32px | 48px |
| 주요 섹션 사이 | 48px | 64px |
| 글 블록 내부 패딩 | 16px | 24px |
| 글 블록 사이 | 24px | 24px |
| 제목 → 요약 | 8px | 8px |
| 요약 → 메타데이터 | 12px | 12px |
| 메타데이터 → 태그 | 12px | 12px |
| 버튼·필터 사이 | 8px 이상 | 8px 이상 |

모서리는 버튼·입력창·태그·메뉴·코드 모두 0px, 그림자는 0이다. 글 블록·컨트롤은 2px 실선, 헤더와 큰 섹션의 시작은 4px 실선, 블록 내부 보조 구분선은 1px 실선이다. 인접 경계를 중복해 두 배 두께로 만들지 않는다.

## Layout

- 전체 셸은 패딩 포함 최대 1080px, 너비 100%, border-box 기준 중앙 정렬이다. 소개와 긴 본문은 최대 720px다. 본문은 한국어 약 30~40자 폭에서 실제 글로 검수한다.
- 홈 순서는 헤더 → 짧은 소개 → 기록 제목·검색·유형 필터 → 최신순 글 목록 → 페이지 탐색 → 주제 탐색 → 푸터다. 대형 히어로나 통계 대시보드는 사용하지 않는다.
- 목록은 모든 화면에서 한 열이다. 1024px 이상에서는 블록 내부만 `128px 기록 정보 열 + 24px 간격 + 나머지 본문 열`로 나눈다. 정보 열에는 번호·날짜·유형, 본문 열에는 제목·요약·읽기 시간·주제를 배치한다.
- 1024px 미만에서는 기록 정보를 제목 위로 옮긴다. DOM 읽기 순서도 기록 정보 → 제목 → 요약 → 읽기 시간 → 주제로 유지한다.
- 글 상세는 720px 읽기 열이다. 내용에 있을 때만 시도한 것/막힌 점/해결 과정/배운 점 구획을 둔다. 없는 결과를 만들지 않는다.
- 실제 작업을 설명할 때만 코드·이미지를 사용한다. 홈 미리보기는 글당 하나 이하, 코드 6줄 이내와 전체 글 링크를 제공한다. 요약을 이미지로 대체하지 않는다.

## Components

| 컴포넌트 | 시각·동작 기준 |
|---|---|
| 헤더·탐색 | 워드마크 20px/800, 메뉴 14px/600. 홈 링크·글/소개·테마 선택. 4px 하단 경계, 일반 문서 흐름. 현재 메뉴는 밑줄과 aria-current. |
| 소개 | H1 하나와 짧은 18px 소개. 고정 높이·강제 줄 수 제한 없음. 노란 라벨은 하나까지만 사용. |
| 글 블록 | Surface·2px Border·0px 반경·그림자 없음. 제목은 항상 밑줄이 있는 링크. 블록 전체를 링크로 감싸거나 태그 링크를 중첩하지 않음. |
| 기록 유형 | 실험/문제 해결/회고/학습 노트 중 실제 데이터의 대표 유형 하나. Primary·On primary·2px On primary 경계. 데이터가 없으면 생략하며 추측하지 않음. 비대화형 라벨에는 hover·포커스 없음. |
| 글 번호·날짜 | 실제 영구 번호가 있을 때만 번호 표시. 필터·페이지 변경으로 재번호화하지 않음. 날짜에는 기계 판독 값도 제공. |
| 링크 | Link와 항상 밑줄. hover·pressed는 Link hover, focus는 공통 링. 노란 면에서는 On primary. |
| 검색 | 항상 보이는 글 검색 라벨, 제목이나 키워드 검색 placeholder. 16px 입력, 2px Control border, 12px 16px 패딩. 제목·요약·주제 태그 검색, 지우기·초기화 제공. |
| 유형 필터 | 전체와 실제 데이터가 있는 유형의 단일 선택 버튼 그룹. 선택은 노란 면·체크·aria-pressed로 표현. 줄바꿈 허용. |
| 주제 태그 | Subtle·Secondary·1px 경계. 링크는 주제 필터가 적용된 홈으로 이동하며 밑줄과 최소 44px 영역 제공. 비대화형 태그에는 밑줄·hover 없음. |
| 주요 버튼 | Primary/On primary·2px On primary 경계·0px 반경. 영역당 주요 행동 하나. hover·pressed는 Primary hover. |
| 보조 버튼 | Surface/Foreground·2px Control border. hover·pressed는 Subtle. disabled는 Subtle/Secondary와 실제 비활성 상태, opacity로 흐리지 않음. |
| 테마 선택 | 화면 테마 라벨과 시스템/라이트/다크. 현재 선택을 텍스트로 표시하고 네이티브 키보드 동작 보존. |
| 페이지 탐색 | 페이지당 최대 8개, 이전/다음·현재/전체 페이지. 검색·유형·주제를 URL에 보존. 조건 변경은 첫 페이지로 복귀. 이동 불가 버튼은 실제 비활성화. |
| 빈 상태·오류 | 검색 결과가 없습니다와 조건 초기화, 글 없음은 첫 기록을 준비하고 있습니다. 오류는 원인·복구 행동을 문구로 제공. 결과 수 변경은 정중한 라이브 알림, 포커스 이동 없음. |
| 코드·이미지 | Surface/Foreground·2px Border·16px 패딩·0px 반경. 구문 색은 대비 검증 후 추가. 이미지는 비율 확보·대체 텍스트·설명 제공. |
| 푸터 | 2px 상단 경계·32px 내부 위 패딩·14px Secondary. 실제 정보와 링크만 표시. |

검색·유형·주제는 함께 적용하고 현재 조건과 개별 해제를 제공한다. 후속 구현 전에는 작동하지 않는 컨트롤을 장식으로 노출하지 않는다.

## Responsive

| 구간 | 배치 |
|---|---|
| 768px 미만 | 헤더 첫 줄 워드마크, 다음 줄 메뉴·테마. 줄바꿈 허용. H1 32px, 글 제목 22px. 검색·필터 세로, 정보는 제목 위. |
| 768~1023px | 헤더는 가용 폭에 따라 한 줄 또는 줄바꿈. H1 48px, 글 제목 26px. 검색·필터는 공간이 있을 때 나란히, 블록 내부는 한 열. |
| 1024px 이상 | 헤더 한 줄, 블록 내부 정보/본문 두 열. 전체 1080px·긴 본문 720px 상한 유지. |

320/375/768/1024/1440px와 가로 방향, 200% 글자 확대와 400% 브라우저 확대에서 손실 없이 재배치한다. 페이지 전체 가로 스크롤은 금지하고 코드·표에만 필요한 내부 스크롤을 허용한다. 해당 영역은 키보드 접근이 가능해야 한다. 필터·태그는 줄바꿈하며 긴 한국어 라벨을 자르지 않는다.

## Accessibility

- 텍스트 최소 4.5:1, 컨트롤 경계·포커스 최소 3:1. 색상만으로 선택·오류·링크를 표현하지 않는다.
- 버튼·입력·선택·대화형 태그는 최소 44×44 CSS px. 본문 인라인 링크는 예외이며 주변 링크와 구별 가능한 간격을 둔다.
- 포커스는 2px 실선 Focus + 3px 바깥 여백으로 즉시 표시한다. 노란 면 위 링은 On primary. overflow로 자르거나 다른 요소로 가리지 않는다.
- 본문 바로가기, header/nav/main/footer, H1 하나와 H2→H3 위계를 제공한다. 키보드 순서는 읽기 순서와 일치한다.
- 선택은 체크·텍스트·의미 상태를 함께 제공한다. 오류는 입력과 연결하고 원인·복구 방법을 설명한다. 비활성 링크에 작동하는 href를 남기지 않는다.
- 아이콘은 Lucide 선형 SVG 20px·stroke 2px로 통일한다. 장식은 보조 기술에서 숨기고 단독 버튼에는 접근 가능한 이름을 제공한다.
- 코드 복사 같은 동작을 추가하면 결과를 라이브 알림으로 제공한다. hover에 필수 기능을 숨기거나 포커스를 자동 이동하지 않는다.

## Motion

기본 모션은 **0ms**, transition·animation 없음이다. hover·pressed·선택은 색·밑줄·경계 색만 즉시 바꾼다. 두께·위치·크기 변경으로 레이아웃을 흔들지 않는다. 메뉴·검색 결과·테마는 즉시 표시하고 네이티브 컨트롤의 OS 동작은 존중한다.

자동 타이핑·깜빡이는 커서·스크롤 등장·패럴랙스·캐러셀·카드 확대·강제 부드러운 스크롤은 사용하지 않는다. prefers-reduced-motion에서도 전환·애니메이션 없음과 기본 스크롤을 유지한다. 로딩은 정적 문구로 알리고 읽기를 지연시키지 않는다.

## Do's and Don'ts

### Do's

- 실제 한국어 제목·긴 기술명·결과 이미지로 줄바꿈과 위계를 확인한다.
- 무엇을 시도하고 배웠는지 제목·요약으로 먼저 전달한다.
- 노란 강조 면·파란 링크·선명한 경계의 역할을 유지한다.
- 후속 구현에서 양 테마의 기본/hover/pressed/focus/disabled/오류, 키보드·확대·반응형·폰트 로딩을 검수한다. 현재 검증은 토큰 대비 계산이다.

### Don'ts

- 장식용 가짜 번호·유형·실험 결과·통계·터미널 출력을 만들지 않는다.
- 본문 전체를 볼드·고정폭·좁은 행간으로 만들지 않는다.
- 유리 카드·그라데이션·네온·blur·둥근 카드·과도한 그림자를 혼합하지 않는다.
- 불필요한 썸네일·대형 히어로·팝업으로 글 탐색을 밀어내지 않는다.
- 제목 말줄임·강제 글자 단위 줄바꿈·작은 모바일 본문·색만의 상태 표현을 사용하지 않는다.
