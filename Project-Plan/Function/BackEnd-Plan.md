# Back-End Plan

### API

> 알라딘의 API 총 3가지 종류로 나누어져 있다.

- 상품 리스트 API → (Main Route)
- 상품 정보 API → (Book Detail Route)
- 상품 검색 API → (Search Route)

###### - [알라딘 API 메뉴얼 바로가기]

### Data Models

#### 회원 정보

- email (아이디)
- password (비밀번호)
- username (닉네임)
- secretAuthCheck (이메일 인증)
- feedsList (작성한 글s)
- likesList(추천 한 글s)

#### 글

- date (날짜)
- title (제목)
- files (사진)
- author (저자): 독서 일기 경우
- genre (장르): 독서 일기 경우
- stars (추천): 독서 일기 경우
- Likes (좋아요 수)
- contents (내용)
- private (비공개 유무)

<!-- Connect Link List -->

[알라딘 api 메뉴얼 바로가기]: https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE/edit
