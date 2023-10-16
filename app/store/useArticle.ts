import { create } from "zustand";
import { ARTICLE_LIST, Article } from "../models/mockData";

type ArticleStore = {
  searchTerm: string;
  filteredArticles: Article[];
  setSearchTerm: (searchTerm: string) => void;
  searchArticles: (searchTerm: string, articles: Article[]) => void;
};

export const useArticle = create<ArticleStore>((set) => ({
  searchTerm: "",
  filteredArticles: ARTICLE_LIST,

  setSearchTerm: (searchTerm) => set({ searchTerm }),

  searchArticles: (searchTerm, articles) => {
    if (searchTerm === "") {
      set({ filteredArticles: ARTICLE_LIST });
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      set({ filteredArticles: filtered });
    }
  },
}));
