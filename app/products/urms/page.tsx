import { ProductOnePager } from "@/components/site/product-one-pager";
import { getProduct } from "@/lib/products";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const product = getProduct("urms");

export const metadata: Metadata = {
  title: "URMS",
  description: "URMS product one-pager and scorecard.",
};

export default function UrmsPage() {
  if (!product) notFound();
  return <ProductOnePager product={product} />;
}
