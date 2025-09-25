# robots.txt 파일 설명과 사용법

robots.txt는 웹 크롤러(검색 엔진 봇)에게 웹사이트의 크롤링 허용/비허용 영역을 알려주는 텍스트 파일입니다.

## 1. 기본 문법

```txt
User-agent: *
Disallow: /private/
Allow: /public/
Sitemap: https://example.com/sitemap.xml
```

## 2. 주요 지시어

### User-agent

- 크롤러를 지정
- `*`: 모든 크롤러
- `Googlebot`: 구글 크롤러
- `Bingbot`: 빙 크롤러

### Disallow

- 크롤링을 금지할 경로 지정
- 예: `/admin/`, private

### Allow

- 크롤링을 허용할 경로 지정
- Disallow의 예외 설정 가능

### Sitemap

- 사이트맵 파일의 위치 지정
- XML 형식

## 3. 예제 코드

```txt
# 모든 검색엔진 크롤러에 대한 규칙
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /temp/

# Google 크롤러에 대한 특별 규칙
User-agent: Googlebot
Allow: /public/
Disallow: /no-google/

# Bing 크롤러에 대한 특별 규칙
User-agent: Bingbot
Allow: /
Disallow: /no-bing/

# 사이트맵 위치
Sitemap: https://example.com/sitemap.xml
```

## 4. 주의사항

1. **파일 위치**

   - 반드시 웹사이트 루트 디렉토리에 위치
   - 예: `https://example.com/robots.txt`

2. **파일명**

   - 반드시 소문자로 `robots.txt`
   - 대소문자 구분

3. **파일 형식**

   - 반드시 텍스트 파일
   - UTF-8 인코딩 권장

4. **보안**

   - robots.txt는 보안 도구가 아님
   - 누구나 파일 내용을 볼 수 있음
   - 민감한 정보는 다른 방법으로 보호

5. **크롤링 제한**
   - 모든 검색 엔진이 규칙을 따르지 않을 수 있음
   - 법적 구속력 없음

## 5. 사용 예시

### 전체 사이트 크롤링 허용

```txt
User-agent: *
Allow: /
```

### 전체 사이트 크롤링 차단

```txt
User-agent: *
Disallow: /
```

### 특정 디렉토리만 차단

```txt
User-agent: *
Disallow: /private/
Disallow: /temp/
Disallow: /admin/
```

### 특정 파일 형식 차단

```txt
User-agent: *
Disallow: /*.pdf$
Disallow: /*.doc$
```

이러한 설정을 통해 검색 엔진의 크롤링 동작을 제어하고 웹사이트의 SEO를 최적화할 수 있습니다.
