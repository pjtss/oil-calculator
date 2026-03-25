# oil-calculator

Next.js App Router 기반 유류비 계산기입니다.

## 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## Netlify 배포

이 프로젝트는 Next.js 공식 static export 방식으로 `out` 디렉터리를 생성해 배포합니다.

- `Base directory`: 비워두기
- `Build command`: `npm run build`
- `Publish directory`: `out`

중요:

- `next.config.ts`에서 `output: "export"`를 사용합니다.
- GitHub 연동 배포를 사용합니다.
- 설정 변경 후 `Clear cache and deploy site`로 다시 배포하는 것이 안전합니다.

## 공식 문서

- Next.js `create-next-app`: https://nextjs.org/docs/app/api-reference/cli/create-next-app
- Next.js deployment: https://nextjs.org/docs/app/building-your-application/deploying
- Next.js static export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Netlify Next.js overview: https://docs.netlify.com/frameworks/next-js/overview/

## SEO 및 광고 설정

다음 환경 변수를 Netlify에 설정하면 메타데이터와 광고 코드가 함께 반영됩니다.

- `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...`
- `NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx`

`public/ads.txt.example`은 AdSense용 샘플 파일입니다. 실제 AdSense publisher ID를 받은 뒤 `public/ads.txt`로 복사해서 사용해야 합니다.

Google AdSense 게시 전 체크:

- AdSense `Sites`에 실제 도메인 추가
- 사이트 상태가 `Ready`인지 확인
- `ads.txt`에 실제 publisher ID 반영
- 정책 페이지(`/privacy`, `/terms`, `/ads`) 배포 확인
