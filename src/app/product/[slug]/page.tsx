"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ProductSlugpage = () => {
  const params = useParams();
  const { slug } = params;
  console.log("check params", params);

  return <div>ProductSlugpage</div>;
};

export default ProductSlugpage;
