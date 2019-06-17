# MyBrary Web

## Back-End

#### Mybrary with Express + Prisma + GraphQL + Apollo + React

## User Stories

- [x] Create account
- [x] Email Confirm
- [x] Duplication Check
- [x] Authentiation (Log In)
- [x] Like / Unlike a post
- [x] Edit my profile
- [x] See My Post
- [x] Upload Post
- [x] Delete Post
- [x] See All Post
- [x] See All Post
- [ ] See Best Post

## 기능

## 환경설정

### NodeJS 설치

[NodeJS 공식홈페이지로 이동](https://nodejs.org/ko/)

> 공식 홈페이지로 가서 LTS버전 다운로드

---

###### ※ yarn을 이용한 설치

### graphql-yoga

```bash
yarn add graphql-yoga
```

> 빠르게 graphQL을 사용할 수 있도록 도와주는 패키지 (Express Server가 내장되어 있음)  
> ※ GraphQL을 쓰는 이유: Over-fatching / Under-fetching을 해결 가능

### nodemon

```bash
yarn add nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
> `dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### Babel

```bash
yarn add @babel/node @babel/core @babel/preset-env
```

> `Babel`은 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하는 상황 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.

```bash
Requires Babel "^7.0.0-0", but was loaded with "6.26.3".
If you are sure you have a compatible version of @babel/core,
it is likely that something in your build process is loading the wrong version.
```

###### ※ 혹시 이런 오류가 난다면 `babel-cli` 가 설치 되어 있는지 확인하자

### morgan

```bash
yarn add morgan
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

###### ※ morgan("") → 괄호 안에 원하는 로그의 형태를 지정할 수 있다.

### graphql-tools

```bash
yarn add graphql-tools
```

> Schema와 Resolve를 분리를 해주는 구조를 만들 수 있도록 도와주는 모듈

### merge-graphql-schemas

```bash
yarn add merge-graphql-schemas
```

> `graphql-tools`와 함께 자주 쓰인다. 모듈화 되어 있는 Schema와 Resolver의 병합을 도와주는 모듈이다.

### prisma-client-lib

```bash
yarn add prisma-client-lib
```

> `Prisma` 클라이언트를 실행하기 위해 필요한 `GraphQL`의 패키지가 들어있다.

### @sendgrid/mail

```bash
yarn add @sendgrid/mail
```

> `SendGrid`라는 서비스이다. 간단한 함수로 사용자에게 메일을 보낼 수 있도록 도와주는 모듈

### passport

```bash
yarn add passport
```

> 사용자 인증을 도와준다.

### passport-jwt

```bash
yarn add passport-jwt
```

> `PassPort`로 `JWT`인증을 구현할 수 있도록 도와준다.

###### ※ JWT란 JsonWebToken의 약자이다.

### bcrypt

```bash
yarn add bcrypt
```

> `bcrypt`로 패스워드를 암호화 하는데 사용한다.
