"use client";
import { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Searchbar from "./components/Searchbar";
import { ARTICLE_LIST } from "./models/mockData";
import { useArticle } from "./store/useArticle";

export default function Home() {
  const [data, setData] = useState(ARTICLE_LIST); 

  const { filteredArticles} = useArticle();

  return (
    <div className="min-h-full flex flex-col items-center justify-center">
      <nav className="flex flex-row space-x-8 pt-4 mr-auto ml-8 justify-start">
        <div className="font-semibold">RamaniAuthors</div>
        <div className="w-full">
          <Searchbar articles={data}/>
        </div>
      </nav>
      <section className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-6">
        {filteredArticles.map((article, idx) => (
          <ArticleCard key={idx} article={article}/>
        ))}
      </section>
    </div>
  );
}
