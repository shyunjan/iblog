export interface BlogType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* 블로그 검색조건과 검색 결과 블로그 배열이 함께 담겨있는 타입 */
export interface BlogWithConditionType {
  searchCondition: string;
  blogs: BlogType[];
}
