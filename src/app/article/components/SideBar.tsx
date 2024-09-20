import { ArticleCategory } from "@/types/article-category.types";
import { getArticleEntries, getEntries } from "@/utils/contenful/get-entries";
import React from "react";
import FilterArticles from "./FilterArticles";
import { Article } from "@/types/article.types";
import { format } from "date-fns";

const SideBar = async () => {
  const getArticleCategoryEntries: ArticleCategory =
    await getEntries("articleCategory");
  const articleEntries: Article = await getArticleEntries();

  const dumyLatestArticle = [
    {
      id: 1,
      title: "Apa Bedanya Jingle dengan Mars?",
      createdAt: "September 5, 2024",
    },
    {
      id: 2,
      title: "Jasa Pembuatan Jingle dan Mars Optimalkan Brand Experience?",
      createdAt: "September 5, 2024",
    },
    {
      id: 3,
      title: "Video Production Jakarta, Solusi Bikin Video Tanpa Repot?",
      createdAt: "September 5, 2024",
    },
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Aside: Latest Update Article  */}
      <div>
        <h2 className="font-gilda text-2xl font-bold">Latest Articles</h2>
        <ul className="mt-4 space-y-5">
          {articleEntries.items.slice(0, 5).map((article, index) => (
            <React.Fragment key={index}>
            <li>
              <a
                href=""
                className="text-base font-normal text-current transition-all duration-300 ease-in-out hover:font-medium hover:text-[#463b34]"
              >
                {article.fields.title}
              </a>
              <p className="font-openSans text-sm font-semibold text-[#463b34]">
                {format(new Date(article.fields.createdAt), "MMMM d yyyy")}
              </p>
            </li>
            <hr className="w-full border-[0.5]" />
          </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Aside: Categories Selection  */}
      <div>
        <h2 className="font-gilda text-2xl font-bold">Categories</h2>

        <FilterArticles articleCategory={getArticleCategoryEntries} />
      </div>
    </div>
  );
};

export default SideBar;
