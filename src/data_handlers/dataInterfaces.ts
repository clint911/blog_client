export enum ArticleType {
  Design, DailyDigest, Tutorial, Others
}
export enum UserRole {
  admin, normal
}
export interface IArticle {
  articleId: number,
  creatorId: number,
  articleType: ArticleType,
  articleContent: string
}
export interface IComment {
  commentId: number,
  commentorId: number,
  textContent: string
}
export interface IUser {
  userId: number,
  firstName: string,
  lastName: string,
  userRole: UserRole,
  password: number,
  country: string
}
