# Stella-Dev 랜딩 페이지

**기술로 문제를 해결하다**

스텔라 데브의 공식 랜딩 페이지입니다. 회사의 서비스와 가치를 소개하는 웹사이트입니다.
개발 회사이기 때문에 어두운 배경으로 심플하지만 세련되고 뭔가 있어보이게 만들어야합니다.

## 서비스

- **UpServe**: 매니지드 AI 직원 - https://upserve.app
- **Slur**: 클래식 음악가를 위한 통합 플랫폼 - https://slur.stella-dev.org/
- **아보행**: AI 기반 감성 일기 앱 - https://abohaeng.stella-dev.org/
- **Day100**: 100일 챌린지 습관 형성 앱 - https://day100.stella-dev.org/

## 기술 스택

- Next.js 16
- TypeScript
- Tailwind CSS
- Docker

## 프로덕션 빌드

```bash
npm run build
npm start
```

## Docker로 실행

```bash
# 이미지 빌드
docker build -t stella-dev-landing .

# 컨테이너 실행
docker run -p 3000:3000 stella-dev-landing

# 또는 docker-compose 사용
docker-compose up --build
```

## 연락처

문의사항이 있으시면 support@stella-dev.org로 연락주세요.

---

© 2025 스텔라 데브. All rights reserved.
