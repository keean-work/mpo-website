import { ProductOnePager } from "@/components/site/product-one-pager";
import { getProduct } from "@/lib/products";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const product = getProduct("qualify");

export const metadata: Metadata = {
  title: "Qualify",
  description: "Qualify product one-pager and scorecard.",
};

export default function QualifyPage() {
  if (!product) notFound();
  return <ProductOnePager product={product} />;
}
