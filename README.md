# 프로젝트 명
보드게임 장미전쟁 score tracker
(2023.05.30-진행 중)

[velog 시리즈 보기](https://velog.io/@jasmine0714/series/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9E%A5%EB%AF%B8%EC%A0%84%EC%9F%81-%EB%B3%B4%EB%93%9C%EA%B2%8C%EC%9E%84-score-tracker-%EB%A7%8C%EB%93%A4%EA%B8%B0)

# 사용 기술 스택
React 18, Typescript, react-router-dom 6, Redux-toolkit, styled-components, Lodash(deep copy) 등

# 점수 계산 알고리즘
<ul>
  <li>깊이 우선 탐색 (DFS) 알고리즘 사용</li>
  <li>lodash의 deep copy 사용: 함수를 호출했을 때 원본 배열의 원소가 0으로 바뀌는 것을 방지</li>
</ul>

# 기획 의도
보드게임 장미전쟁 한 라운드가 종료될 때마다 일일히 점수 계산하는 것이 번거로워서 만들었습니다.


# 장미 전쟁? 그게 뭔가요?
제가 가장 좋아하는 보드게임입니다. 핵꿀잼!

[장미전쟁 게임 규칙 유튜브 설명 보기](https://www.youtube.com/watch?v=ZTNB4i2n3Dk)

# 사용 방법
<div>(1) 신나고 즐겁고 흥겹게 보드게임 장미전쟁을 play합니다.</div>

![스크린샷 2023-08-21 오전 10 48 07](https://github.com/minsun0714/The-War-of-Rose_Score-Tracker/assets/117507731/6e438a5b-dbd8-421a-be37-02c8e715376a)


(2) 한 라운드가 끝나고 이제 점수를 계산해야 하나요? 모바일 환경에서 [링크](https://rose-war-score-tracker.web.app)를 클릭해주세요. (PC 환경에서는 아직 반응형 작업 진행 중이므로, 불가피하게 PC 환경을 이용해야할 경우 개발자 모드에서 모바일 뷰를 클릭해주세요.)

![스크린샷 2023-08-21 오전 10 53 35](https://github.com/minsun0714/The-War-of-Rose_Score-Tracker/assets/117507731/ce222de8-da72-48cd-a4d7-bd0838c92a4d)

(3) 구글 로그인을 하고 Get Score 버튼을 클릭합니다.

<div>(4) 2명 player의 닉네임을 입력 후, Start 버튼을 클릭하세요.</div>

![닉네임 입력](https://github.com/minsun0714/The-War-of-Rose_Score-Tracker/assets/117507731/68fbf537-0d27-4acd-a0d0-187596f03552)


<div>(5) 게임 결과와 동일하게 보드에서 cell을 클릭해주세요. 클릭한 닉네임에 따라 cell 색이 바뀝니다.</div>

![셀 클릭](https://github.com/minsun0714/The-War-of-Rose_Score-Tracker/assets/117507731/e914a968-9ba2-4749-8f4d-732a0288b4d1)


<div>(6) 점수를 확인하세요!</div>

![스크린샷 2023-08-21 오전 10 48 46](https://github.com/minsun0714/The-War-of-Rose_Score-Tracker/assets/117507731/551a40d9-23c9-47a6-bda1-8d8a0282ccbe)


# 추후 개선사항
(1) 새로고침 버튼을 추가할 예정입니다.

(2) 닉네임 설정 시 구글 API로 받아온 실명을 default 값으로 설정하여 신속한 게임을 시작하도록 추가할 예정입니다.

(3) 보드게임 카페에서 휴대폰을 열어 번개같이 점수 계산하려고 모바일 사이즈(가로 365px)로 작업했지만, 다양한 기기 사이즈에 대응하기 위해 반응형 작업 예정입니다.

(4) 장미전쟁 게임을 잘 모르는 유저들을 위해 게임 설명과 웹 앱 설명을 담은 페이지를 랜딩 페이지로 변경할 예정입니다.

(5) 여러 유저가 실시간으로 게임 cell을 클릭할 수 있는 기능에도 도전해보려고 합니다. (Firestore Realtime Database)

(6) 점수 계산 로직이 담긴 함수의 유닛 테스트를 진행할 예정입니다.
