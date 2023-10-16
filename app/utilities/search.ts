import { ARTICLE_LIST, Article } from "../models/mockData";

export function searchArticles(keyword: string): Article[] {
    const lowerCaseKeyword = keyword.toLowerCase();
  
    return ARTICLE_LIST.filter((article) => {
      const lowerCaseTitle = article.title.toLowerCase();
      const lowerCaseBody = article.body.toLowerCase();
      const lowerCaseAuthor = article.author.toLowerCase();
  
      return (
        lowerCaseTitle.includes(lowerCaseKeyword) ||
        lowerCaseBody.includes(lowerCaseKeyword) ||
        lowerCaseAuthor.includes(lowerCaseKeyword)
      );
    });
  }