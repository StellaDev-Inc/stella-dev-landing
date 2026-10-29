// UpServe 외부 링크. 여러 섹션의 가입·요금제·문서·앱 버튼이 같은 주소를 쓰도록 한곳에 둔다.
export const UPSERVE_URL = 'https://upserve.app';
export const UPSERVE_SIGNUP_URL = 'https://upserve.app/signup';
export const UPSERVE_PRICING_URL = 'https://upserve.app/pricing';
export const UPSERVE_APP_STORE_URL = 'https://apps.apple.com/us/app/upserve/id6760365638';
export const UPSERVE_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.stella.upserve';

export function upserveDocsUrl(locale: string) {
  return `https://docs.upserve.app/${locale === 'ko' ? 'ko' : 'en'}`;
}
