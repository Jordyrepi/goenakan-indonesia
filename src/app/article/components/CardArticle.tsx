import { ArticleIncludes, ArticleItems } from "@/types/article.types";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

interface CardArticleProps {
  article: ArticleItems;
  includes: ArticleIncludes;
}

const CardArticle: React.FC<CardArticleProps> = ({ article, includes }) => {
  const idAsset = article.fields.thumbnail.sys.id;
  const assets = includes.Asset;
  const thumbnail = assets.find((asset: any) => asset.sys.id === idAsset);
  const idCategory = article.fields.category.sys.id;
  const categories = includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );

  const firstParagraphNode = article.fields.content.content.find(
    (node: any) => node.nodeType === BLOCKS.PARAGRAPH,
  );

  // Render the content of the first paragraph
  const firstParagraphContent = firstParagraphNode
    ? firstParagraphNode.content.map((childNode: any, index: number) => (
        <p
          key={index}
          className="mt-4 line-clamp-4 font-openSans text-sm font-medium"
        >
          {childNode.value}
        </p>
      ))
    : null;

  return (
    <div className="article-content space-y-10">
      <div className="relative h-[21.6rem] w-full">
        <Image
          src={`https:${thumbnail?.fields.file.url}`}
          alt={article.fields.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <span className="flex items-center gap-x-2">
          <p className="font-openSans text-sm font-bold text-[#463b34]">
            {/* {article.fields.createdAt} */}
            {format(new Date(article.fields.createdAt), "MMMM d yyyy")}
          </p>{" "}
          /<p>In {category?.fields.title}</p>
        </span>
        <h3 className="font-gilda text-3xl font-semibold">
          {article.fields.title}
        </h3>
        {/* {documentToReactComponents(article.fields.content, RICHTEXT_OPTION)} */}
        {firstParagraphContent}
        <button className="mt-7 rounded-sm bg-[#7A543E] px-6 py-3 text-white">
          <a href={`/article/${article.fields.slug}`}>CONTINUE READING</a>
        </button>
      </div>
    </div>
  );
};

export default CardArticle;
