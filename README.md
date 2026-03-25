# oil-calculator

Next.js App Router 기반 유류비 계산기입니다.

## 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## Netlify 배포

이 프로젝트는 Netlify의 최신 Next.js 지원(OpenNext adapter) 기준으로 배포합니다.

- `Base directory`: 비워두기
- `Build command`: `npm run build`
- `Publish directory`: 비워두기
- `Framework preset`: `Next.js`

중요:

- `Publish directory`에 `.next`를 넣지 않습니다.
- GitHub 연동 배포를 사용합니다.
- 설정 변경 후 `Clear cache and deploy site`로 다시 배포하는 것이 안전합니다.

## 공식 문서

- Next.js `create-next-app`: https://nextjs.org/docs/app/api-reference/cli/create-next-app
- Next.js deployment: https://nextjs.org/docs/app/building-your-application/deploying
- Netlify Next.js overview: https://docs.netlify.com/frameworks/next-js/overview/
