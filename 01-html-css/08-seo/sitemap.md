# 주요 요소 설명

1. urlset: 사이트맵의 루트 요소
2. url: 각 페이지의 정보를 담는 요소
3. loc: 페이지의 URL (필수)
4. lastmod: 마지막 수정 날짜
5. changefreq: 페이지 업데이트 빈도
   - always
   - hourly
   - daily
   - weekly
   - monthly
   - yearly
   - never
6. priority: 페이지의 상대적 중요도 (0.0 ~ 1.0)

# 주의사항

- XML 선언은 필수
- 모든 URL은 절대 경로로 작성
- lastmod는 W3C 날짜 형식 사용
- priority는 기본값 0.5
