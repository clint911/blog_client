import { ArticleType, IArticle } from "./dataInterfaces";
class Articles extends CrudOps implements IArticle {

  constructor(_creatorId, _articleType, _articleContent) {
    this.creatorId = _creatorId;
    this.articleType = _articleType;
    this.articleContent = _articleContent;
  }
  formatedReq: string = "";//put in custom url formatting
  async createArticle() {
    try {
      const res = await fetch(this.formatedReq);
      if (res === 200) {
        return "sucess";
      }
    } catch (error) {
      return error;
    }
  }
  async getAllArticles() {
    try {
      const allArticles[]: Response<string[]> = fetch(this.formatedReq);
      if (allArticles.length === 0) {
        return "failed to fetch"
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  async getArticleById(_articleId) {
    this.articleId = _articleId;
    try {
      const fetchedArticle = await fetch(this.formatedReq);
      return fetchedArticle;
    }
    catch (console.error();
    );
  }
}

