import Products from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Our Products",
    description: "Explore the range of products offered by Shivkishan Natural Pure Honey, including our pure honey varieties, packaging options, and how to place bulk orders for your business.",
}

export default function ProductsPage() {
    return (
        <Products />
    );
}