import Error from "../pages/Error";
import { ArticleType, IArticle, IComment, IUser, UserRole } from "./dataInterfaces";
///TODO: Scrape off this shit and work with an article class 
enum RequestType {
  "GET",
  "UPDATE",
  "DELETE"
}
///We can even refactor the functions to be fetch by ID, then they can take in whether they're fetching comments, articles or users, lets try some classes 
class GETHandler {
  constructor(_formatedApiRoute) {
    _formatedApiRoute = this.formatedApiRoute;
  }
  async public getAllArticles(_formatedApiRoute) {
    const _allArticles = fetch(_formatedApiRoute);
    return _allArticles;
  }
  async public getArticleById(_articleId, _formatedApiRoute) {
    _articleId = this.articleId;
    const fetchedArticle = fetch(_formatedApiRoute + _articleId);//use ${} for more precision 
  }
  async public getAllComments(_formatedApiRoute) {
    try {
      const allComments = fetch(_formatedApiRoute);
      return allComments;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  async public getCommentById(_commentId: number, _formatedApiRoute) {
    try {
      const commentFetched = fetch(_formatedApiRoute + _commentId);
      return commentFetched;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
}
const gtHandler = new GETHandler(2);
gtHandler.getAllArticles("localhost");
gtHandler.getArticleById(10)


const apiRoute: string = "../data/Articles.json";
export async function fetchAllArticles() {
  const apiRoute: string = "../data/Articles.json";
  //TODO:All the articles will have to be stored in an array, check how to iterate and do all that to display it correctly
  const allArticles = await fetch(apiRoute);
  console.log(allArticles);
}
export async function fetchArticleById() {
  let articleId: number = 1;//Here will be replaced by say stuff from text box
  let formatedApiRoute = apiRoute + 'articleId'; // This is the part where the request is formatted by appending request mssage to url params, handle it
  const fetchedArticle = await fetch(formatedApiRoute)
  console.log(fetchedArticle)
}
export async function deleteArticleById(_articleId, _userId, _creatorId) {
  const articleId: number = 1;///will be obtained from say delete button
  //add specific request headers for method type to be implemented say delete, format url strings
  const requestType: RequestType = RequestType.DELETE;
  const _formatedApiRoute = apiRoute + requestType;
  //TODO: add logic to ensure only admin and article creator can delete a certain article
  try {
    const apiCallResponse = await fetch(_formatedApiRoute);
    if (apiCallResponse !== 204) {
      return "Failed to delete data, please try again later";
    }
    else if (apiCallResponse === 204) {
      "successfully deleted"
    }
    throw "Something else happened please handle exceptions better next time";
    ;
  }//check if has permission

export async function deleteAllArticles(_userId: number, _UserRole: UserRole) {
    const formatedApiRoute = apiRoute + _userId + _UserRole;
    if (_UserRole !== UserRole.admin) {
      return "Really, You think you can do that";
    } else {
      try {
        const _apiCallResponse = await fetch(formatedApiRoute);
      } catch (error) {
        console.log(error)
        return error;
      }
    }
  }
} ///check if admin
export async function updateArticleById() { }//check if user trying has permisiions to do so

