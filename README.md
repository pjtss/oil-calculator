# oil-calculator

Next.js(App Router) 기반 유류비 계산기입니다.

## 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## 배포

Netlify는 최신 Next.js를 자동 감지하고 OpenNext adapter로 배포를 처리합니다. 현재 프로젝트는 별도 Netlify 플러그인 고정 없이 배포하는 구성을 전제로 합니다.

1. 이 저장소를 GitHub에 푸시합니다.
2. Netlify에서 `Add new site` -> `Import an existing project`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. 프레임워크가 `Next.js`로 자동 감지되는지 확인합니다.
5. 배포를 실행합니다.

## 공식 문서

- Next.js `create-next-app`: https://nextjs.org/docs/app/api-reference/cli/create-next-app
- Next.js 배포: https://nextjs.org/docs/app/building-your-application/deploying
- Netlify Next.js 지원 개요: https://docs.netlify.com/frameworks/next-js/overview/
