import {
  getArticleEntries,
  getArticleEntriesPagination,
} from "@/utils/contenful/get-entries";
import CardArticle from "./components/CardArticle";
import Layout from "./components/Layout";
import { Article } from "@/types/article.types";
import PaginationComp from "../product/components/Pagination";

const ArticlePage = async ({ searchParams }: any) => {
  const articleEntries: Article = await getArticleEntries();
  const selectedCategory = searchParams.category || "";

  const articleEntriesPagination: Article = await getArticleEntriesPagination(
    Number(searchParams.page) || 1,
    selectedCategory,
  );
  
  const totalPages = Math.ceil(articleEntriesPagination.total / 10);

  return (
    <Layout>
      {/* Content card artice  */}
      {articleEntriesPagination.items.map((article, index) => (
        <CardArticle
          key={index}
          article={article}
          includes={articleEntries.includes}
        />
      ))}

      <PaginationComp totalPages={totalPages} />
    </Layout>
  );
};

export default ArticlePage;
