import React from "react";
import Layout from "../components/Layout";
import { getEntriesBySlug } from "@/utils/contenful/get-entries";
import { Article } from "@/types/article.types";
import Image from "next/image";
import { format } from "date-fns";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ArticleDetailPage = async ({ params }: any) => {
  const articleDetail: Article = await getEntriesBySlug(
    "article",
    `${params.slug}`,
  );
  const { fields } = articleDetail.items[0];
  const idAsset = fields.thumbnail.sys.id;
  const assets = articleDetail.includes.Asset;
  const thumbnail = assets.find((asset: any) => asset.sys.id === idAsset);
  const idCategory = fields.category.sys.id;
  const categories = articleDetail.includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );

  const RICHTEXT_OPTION = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return (
          <p className="mt-4 font-openSans text-sm font-medium">{children}</p>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        const idAsset = node.data.target.sys.id;
        const image = assets.find((asset: any) => asset.sys.id === idAsset);

        return (
          <div className="relative mt-2 h-[21.6rem] w-full">
            <Image
              src={`https:${image?.fields.file.url}`}
              alt={fields.title}
              fill
              className="object-cover"
            />
          </div>
        );
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
        return (
          <ul className="list-disc">
            <li>{children}</li>
          </ul>
        );
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1 className="font-gilda text-6xl font-bold">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 className="font-gilda text-5xl font-bold">{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any, children: any) => {
        return <h3 className="font-gilda text-4xl font-bold">{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node: any, children: any) => {
        return <h4 className="font-gilda text-3xl font-bold">{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (node: any, children: any) => {
        return <h5 className="font-gilda text-2xl font-bold">{children}</h5>;
      },
      [BLOCKS.HEADING_6]: (node: any, children: any) => {
        return <h6 className="font-gilda text-xl font-bold">{children}</h6>;
      },
      [BLOCKS.HR]: (node: any, children: any) => {
        return <hr className="border-[0.5px]" />;
      },
    },
  };

  return (
    <Layout>
      <div className="relative h-[21.6rem] w-full">
        <Image
          src={`https:${thumbnail?.fields.file.url}`}
          alt={fields.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <span className="flex items-center gap-x-2">
          <p className="font-openSans text-sm font-bold text-[#463b34]">
            {/* {article.fields.createdAt} */}
            {format(new Date(fields.createdAt), "MMMM d yyyy")}
          </p>{" "}
          /<p>In {category?.fields.title}</p>
        </span>
        <h1 className="font-gilda text-3xl font-semibold">{fields.title}</h1>
        {documentToReactComponents(fields.content, RICHTEXT_OPTION)}
      </div>
    </Layout>
  );
};

export default ArticleDetailPage;
